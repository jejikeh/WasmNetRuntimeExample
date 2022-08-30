# WasmNetRuntimeExample

Запуск .net runtime в браузере

[runtime/src/mono/wasm at main · dotnet/runtime](https://github.com/dotnet/runtime/tree/main/src/mono/wasm)

## Зависимости

1. `.net7 preview`
2. `mono`
3. `dotnet workload install wasm-tools`
4. `dotnet new --install Microsoft.NET.Runtime.WebAssembly.Templates::7.0.0-preview.6.22324.4`
5. `node.js`

## Билд проекта

```bash
// Для создания нового dotnet new wasmconsole or dotnet new wasmbrowser
dotnet build
dotnet publish
node server.js
```

Для хостинга можно использовать любой сервер. К примеру 

```bash
npx http-server .\bin\Debug\net7.0\browser-wasm\AppBundle\
```

Но лучше всего написать свой http сервер. Так как `http-server`  не обновляет статичные файлы при сборке.

```bash
npm init
npm install express --save
touch server.js
```

Wasm собирается в `bin/Debug/net7.0/browser-wasm/AppBundle/`

```jsx
// server.js example
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("bin/Debug/net7.0/browser-wasm/AppBundle/"));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```

## Call C# from JS

Static method in c#

```csharp
public class Example
{
    public static string Hello(string message)
    {
        return $"c# method {message}";
    }
}
```

Потом обворачиваем метод C# в JS

```jsx

var execute = App.BINDING.bind_static_method("[LibNameWithout .DLL] Example:Hello");
    console.log(execute("Hello World!")); // c# method Hello World!
```

## Run DLL iterop file in wasm

Что-бы запустить нативную библиотеку в wasm нужно ее сначала скомпилировать в `.bc`

Тут можно посмотреть как это сделать для C++ и Rust.

[C# interop with C/C++ and Rust in WebAssembly](https://platform.uno/blog/c-interop-with-c-c-and-rust-in-webassembly/)

В статье описывается как это сделать из WSL, но в Mono и .Net уже есть всё необходимое для билда.

Rust example

```rust
#[no_mangle]
pub extern fn rust_method() -> u32 {
    return 1;
}
```

Build

```bash
rustc --target=wasm32-unknown-emscripten mylib.rs --crate-type=staticlib -o ../myrustlib.bc
```

C# example

```csharp
// ...
[DllImport("lib", EntryPoint = "rust_method")]
private static extern int Rust_Method();
// ...
Console.WriteLine(Rust_Method());
```

После этого перед билдом нужно добавить `.bc` в `NativeFileReference` 

```csharp
<NativeFileReference Include="lib.bc" />
```

## Run Rust Wasm code alongside c# wasm code

Если по какой либо причине нужно исполнить другой wasm code то это можно сделать просто изменив `index.html`

```js
WebAssembly.instantiateStreaming(fetch('target/wasm32-unknown-unknown/debug/examples/path_to_file.wasm'), imports).then(function (result) {
          result.instance.exports.main();
      })
```

Предарительно скомпилировав код в .wasm

```bash
// Rust
rustup target add wasm32-unknown-unknown
cargo build --example namefile --target wasm32-unknown-unknown
```

Узнать про Wasm rust code можно тут :

[Tutorial: Writing a Tiny Rust Game Engine for Web](https://ianjk.com/game-engine-in-rust/)
