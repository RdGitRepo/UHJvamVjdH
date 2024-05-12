using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace WindowsFormsDemo.Classes
{
    public class Employee
    {

        #region DATA

        public int ID { get; set; }
        public string NAME { get; set; }
        public string EMP_ID { get; set; }
        public string EMP_MANAGER { get; set; }
        public string PHONE_NUMBER { get; set; }
        public DateTime EMP_JOINED_DATE { get; set; }
        public DateTime EMP_CONFIRM_DATE { get; set; }

        #endregion

        #region PROCEDURE

        public Employee()
        {

        }

        public Employee(int _ID, String _NAME, String _EMP_ID, String _EMP_MANAGER, String _PHONE_NUMBER, String _EMP_JOINED_DATE, String _EMP_CONFIRM_DATE)
        {
            ID = _ID; NAME = _NAME; EMP_ID = _EMP_ID; EMP_MANAGER = _EMP_MANAGER; PHONE_NUMBER = _PHONE_NUMBER;
        }

        #endregion

    }
}
