# WasmNetRuntimeExample

Запуск .net runtime в браузере

[runtime/src/mono/wasm at main · dotnet/runtime](https://github.com/dotnet/runtime/tree/main/src/mono/wasm)

## Зависимости

1. .net7 preview
2. `dotnet workload install wasm-tools`
3. `dotnet new --install Microsoft.NET.Runtime.WebAssembly.Templates::7.0.0-preview.6.22324.4`
4. node.js

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