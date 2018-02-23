using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Hangman
{
    
    public class Program
    {
        public static string Server;

        // The default listening address is http://localhost:5000 if none is specified.
        // Replace "localhost" with "*" to listen to external requests.
        // You can use the --urls command-line flag to change the listening address. Ex:
        // > dotnet run --urls http://*:8080;http://*:8081

        // Use the following code to configure URLs in code:
        // builder.UseUrls("http://*:8080", "http://*:8081");
        // Put it after UseConfiguration(config) to take precedence over command-line configuration.

        #region snippet_Main
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseStartup<Startup>()
            .Build();
            
            host.Run();
        }
        #endregion
}
}
