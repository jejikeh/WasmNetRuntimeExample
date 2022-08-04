using System;
using System.Threading.Tasks;
using Microsoft.JSInterop.WebAssembly;
using Microsoft.JSInterop;
using Microsoft.JSInterop.Infrastructure;


public class Example
{
    public static string Hello(string message)
    {
        return $"c# method {message}";
    }
}

public class WASMRuntime : WebAssemblyJSRuntime
{

}

public class JS : JSRuntime
{
    protected override void BeginInvokeJS(long taskId, string identifier, string? argsJson, JSCallResultType resultType, long targetInstanceId)
    {

    }
    protected override void EndInvokeDotNet(DotNetInvocationInfo invocationInfo, in DotNetInvocationResult invocationResult)
    {
        if (!invocationResult.Success)
        {
            throw new Exception($"{invocationInfo.AssemblyName} failed with {invocationResult.Exception.Message}");
        }

        Console.WriteLine($"{invocationInfo.AssemblyName} succeeded!");
    }
}

class Program
{

    public static WASMRuntime WASM = new WASMRuntime();
    public static JS JS = new JS();
    private static uint[] quoteArray =
        new uint[]
        {
            60, 101, 109, 62, 67, 97, 110, 39, 116, 32, 115, 116, 111, 112, 32,
            116, 104, 101, 32, 115, 105, 103, 110, 97, 108, 44, 32, 77, 97,
            108, 46, 60, 47, 101, 109, 62, 32, 45, 32, 77, 114, 46, 32, 85, 110,
            105, 118, 101, 114, 115, 101, 10, 10,
        };

    public static async Task<string> ConvertArray()
    {
        return new(await JS.InvokeAsync<string>("convertArray", quoteArray));
    }
    public static async Task Main(string[] args)
    {
        await Task.Delay(2000);
        Console.WriteLine("Welcome to the BrowserTest");


        // string text = new(await WASM.InvokeAsync<string>("convertArray", quoteArray));
        // Console.WriteLine(text);

    }
}