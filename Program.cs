using System;
using System.Threading.Tasks;

class Program {
    public static async Task Main(string[] args) {
        Console.WriteLine("Welcome to the ");
        await Task.Delay(2000);
    }
}