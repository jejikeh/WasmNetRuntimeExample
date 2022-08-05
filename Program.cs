using System;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

using Mono.WebAssembly.Interop;
// execute this code from JS
public class Example
{
    public static string Hello(string message)
    {
        return $"c# method {message}";
    }

    public static int ReturnZero()
    {
        return 0;
    }
}

public partial class Program
{
    // Rust lib interop 
    [DllImport("lib", EntryPoint = "rust_method")]
    private static extern int RustMethod();
    static MonoWebAssemblyJSRuntime s = new MonoWebAssemblyJSRuntime();

    public static async Task Main(string[] args)
    {
        await Task.Delay(2000);
        //var hostName = GetHostName();
        //Console.WriteLine($"Hello {hostName}, DotNet here!");
        Console.WriteLine("Welcome to the BrowserTest");
        Console.WriteLine("Hello RUST from c# : " + RustMethod());


        s.Invoke<int>("Hello");
        // Assembly.InvokeVoid("Hello");
        // LogNumberRust(3);
    }
}