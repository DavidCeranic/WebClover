using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class UserDetail
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string City { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string PhoneNumber { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string UserType { get; set; }// ovde treba da bude neki enum koji ce predstavljati kog tipa je User;

    }
}
