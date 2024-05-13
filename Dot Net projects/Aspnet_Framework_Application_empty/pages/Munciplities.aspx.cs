using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Xml.Linq;

namespace Aspnet_Framework_Application.pages
{
    public partial class Munciplities : System.Web.UI.Page
    {
        private string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlDataAdapter adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[PROVINCES] NOLOCK ", con);
                    DataTable dt = new DataTable();
                    adpt.Fill(dt);
                    cmbproviceid.DataSource = dt;
                    cmbproviceid.DataBind();
                    cmbproviceid.DataTextField = "Name";
                    cmbproviceid.DataValueField = "ID";
                    cmbproviceid.DataBind();
                }
            }
        }

        private void ClearControl()
        {
            txtmuncipalities.Text = string.Empty;
            txtzipcode.Value = string.Empty;
            cmbproviceid.DataValueField = "1";
        }


        public void InsertIntoMulciplityTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spInsertIntoMulcipalties", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@Province_ID", Convert.ToInt32(cmbproviceid.DataValueField)));
                cmd.Parameters.Add(new SqlParameter("@NAME", txtmuncipalities.Text));
                cmd.Parameters.Add(new SqlParameter("@Zip_Code", txtzipcode.Value.ToString()));
                con.Open();
                cmd.ExecuteNonQuery();
                ClearControl();

            }
        }

        public void DeleteIntoMulciplityTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

            }
        }

        public void UpdateIntoMulciplityTable()
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
            InsertIntoMulciplityTable();
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