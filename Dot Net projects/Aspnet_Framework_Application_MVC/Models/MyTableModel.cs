using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aspnet_Framework_Application_MVC.Models
{
    public class MyTableModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public decimal Salary { get; set; }
        public bool Active { get; set; }
    }
}