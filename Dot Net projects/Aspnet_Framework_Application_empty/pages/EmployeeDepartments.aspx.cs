using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;

namespace Aspnet_Framework_Application.pages
{
    public partial class EmployeeDepartments : System.Web.UI.Page
    {
        private string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        private void ClearControl()
        {
            txtdepartment.Text = string.Empty;
        }


        public void InsertIntoDepartmentsTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spInsertIntoMulcipalties", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@NAME", txtdepartment.Text));
                con.Open();
                cmd.ExecuteNonQuery();
                ClearControl();

            }
        }

        public void DeleteIntoDepartmentsTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

            }
        }

        public void UpdateIntoDepartmentsTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

            }
        }

        protected void btnfirst_Click(object sender, EventArgs e)
        {

        }

        protected void btnprev_Click(object sender, EventArgs e)
        {

        }

        protected void btnnext_Click(object sender, EventArgs e)
        {

        }

        protected void btnlast_Click(object sender, EventArgs e)
        {

        }

        protected void btnsave_Click(object sender, EventArgs e)
        {
            InsertIntoDepartmentsTable();
        }

        protected void btndelete_Click(object sender, EventArgs e)
        {

        }

        protected void btnedit_Click(object sender, EventArgs e)
        {

        }

        protected void btncancel_Click(object sender, EventArgs e)
        {

        }

        protected void cmbbarangayid_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void cmbpositioid_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void cmbdepartmentid_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}