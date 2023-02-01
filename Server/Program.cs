using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.IO;

namespace Server
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome the login server");

            //create a HTTP server that listens on port 8080
            const int port = 8080;
            string prefix = $"http://localhost:{port}/";

            Console.WriteLine("Listening");

            HttpListener server = new HttpListener();
            server.Prefixes.Add(prefix);
            server.Start();
            

            bool running = true;
            while(running)
            {
                HttpListenerContext context = server.GetContext();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;

                string html = $"";
                byte[] buffer = Encoding.UTF8.GetBytes(html);

                
                Console.WriteLine($"Request:{request.RawUrl}");


                switch(request.RawUrl) {
                    case "/":
                        html = File.ReadAllText($"../../static/index.html");
                        break;
                    default:
                        string path = "../../static" + request.RawUrl;
                        if (File.Exists(path))
                        {
                            html = File.ReadAllText(path);

                        } else
                        {
                            response.StatusCode = 404;
                            html = "sorry -file not found";
                            Console.WriteLine($"Unknown Url: {request.RawUrl}");
                        }
                        Console.WriteLine($"UnKnown URL: {request.RawUrl}");
                        break;
                }
                Console.WriteLine($"Sending: {buffer.Length} bytes");
                response.ContentLength64 = buffer.Length;
                response.OutputStream.Write(buffer, 0, buffer.Length);
                response.OutputStream.Close();
                server.Stop();
            }

            Console.ReadLine();
        }
    }
}
