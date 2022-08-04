using System;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

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
    private static extern int Rust_Method();

    public static async Task Main(string[] args)
    {
        await Task.Delay(2000);
        //var hostName = GetHostName();
        //Console.WriteLine($"Hello {hostName}, DotNet here!");
        Console.WriteLine("Hello RUST from c# : " + Rust_Method());
        Console.WriteLine("Welcome to the BrowserTest");
    }
}