using Microsoft.Extensions.Options;
using System;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;
using System.Security;
using System.Threading.Tasks;
using Core.Interfaces.Services;

namespace Core.Services
{
    public class EmailService:IEmailService
    {
  
        public async Task SendMailAsync(string to, string subject, string body, string from = "noreply@gmail.com")
        {
            var client = new SmtpClient(SmtpClientHost, SmtpClientPort)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(NetworkCredentialUsername, NetworkCredentialPassword)
            };

            using (var message = new MailMessage())
            {

                message.To.Add(to);

                message.From = new MailAddress(from);
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true;
                message.Priority = MailPriority.High;

                try
                {
                    await client.SendMailAsync(message);
                }
                catch (Exception ex)
                {
                    Trace.TraceError(ex.Message);
                }
            }
        }


        public string NetworkCredentialPassword { get; set; } = "qxpxxthmsivvxxce";

        public string NetworkCredentialUsername { get; set; } = "ceranicdavid@gmail.com";

        public string SmtpClientHost { get; set; } = "smtp.gmail.com";
            
        public int SmtpClientPort { get; set; } = 587;
    }
}