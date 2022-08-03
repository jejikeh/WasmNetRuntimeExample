using System;
using System.Threading.Tasks;


public class Example
{
    public static string Hello(string message)
    {
        return $"Hello {message}";
    }
}
class Program
{
    public static async Task Main(string[] args)
    {
        Console.WriteLine("Welcome to the BrowserTest");
        await Task.Delay(2000);
    }
}