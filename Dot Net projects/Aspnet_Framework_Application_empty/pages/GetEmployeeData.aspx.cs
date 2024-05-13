using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Configuration.Provider;
using System.Xml.Linq;
using System.IO;

namespace Aspnet_Framework_Application.pages
{
    public partial class GetEmployeeData : System.Web.UI.Page
    {

        private string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlDataAdapter adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[NAMINGEXTENSIONS] NOLOCK ", con);
                    DataTable dt = new DataTable();
                    adpt.Fill(dt);
                    cmbextensionnamemainemp.DataSource = dt;
                    cmbextensionnamemainemp.DataBind();
                    cmbextensionnamemainemp.DataTextField = "Name";
                    cmbextensionnamemainemp.DataValueField = "ID";
                    cmbextensionnamemainemp.DataBind();

                    adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[PROVINCES] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbproviceid.DataSource = dt;
                    cmbproviceid.DataBind();
                    cmbproviceid.DataTextField = "Name";
                    cmbproviceid.DataValueField = "ID";
                    cmbproviceid.DataBind();

                    adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[BARANGAYS] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbbarangayid.DataSource = dt;
                    cmbbarangayid.DataBind();
                    cmbbarangayid.DataTextField = "Name";
                    cmbbarangayid.DataValueField = "ID";
                    cmbbarangayid.DataBind();

                    adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[DEPARMENTS] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbdepartmentid.DataSource = dt;
                    cmbdepartmentid.DataBind();
                    cmbdepartmentid.DataTextField = "Name";
                    cmbdepartmentid.DataValueField = "ID";
                    cmbdepartmentid.DataBind();

                    adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[MULCIPALTIES] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbmuncipleid.DataSource = dt;
                    cmbmuncipleid.DataBind();
                    cmbmuncipleid.DataTextField = "Name";
                    cmbmuncipleid.DataValueField = "ID";
                    cmbmuncipleid.DataBind();

                    adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[POSITIONS] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbpositioid.DataSource = dt;
                    cmbpositioid.DataBind();
                    cmbpositioid.DataTextField = "Name";
                    cmbpositioid.DataValueField = "ID";
                    cmbpositioid.DataBind();


                    adpt = new SqlDataAdapter(" SELECT [ID],[GENDER] FROM [Employee].[dbo].[GENDERTABLE] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbGenderForEmployee.DataSource = dt;
                    cmbGenderForEmployee.DataBind();
                    cmbGenderForEmployee.DataTextField = "GENDER";
                    cmbGenderForEmployee.DataValueField = "ID";
                    cmbGenderForEmployee.DataBind();


                    adpt = new SqlDataAdapter(" SELECT [ID],[GENDER] FROM [Employee].[dbo].[GENDERTABLE] NOLOCK ", con);
                    dt = new DataTable();
                    adpt.Fill(dt);
                    cmbGenderForDependent.DataSource = dt;
                    cmbGenderForDependent.DataBind();
                    cmbGenderForDependent.DataTextField = "GENDER";
                    cmbGenderForDependent.DataValueField = "ID";
                    cmbGenderForDependent.DataBind();


                }
            }
        }

        public void InsertIntoEmployeemapTable()
        {
            using(SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("InsertIntoEmployeeUserDefinedtable", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@EMP_ID", hdfemployeeidmainemp.Value));
                cmd.Parameters.Add(new SqlParameter("@Extension_Name", cmbextensionnamemainemp.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@First_Name", txtfirstname.Text));
                cmd.Parameters.Add(new SqlParameter("@Middle_Name", txtmiddlename.Text));
                cmd.Parameters.Add(new SqlParameter("@Last_Name", txtlastname.Text));
                cmd.Parameters.Add(new SqlParameter("@BirthDay", cldbirthdate.Value));
                cmd.Parameters.Add(new SqlParameter("@Hired_At", cldhiredat.Value));
                cmd.Parameters.Add(new SqlParameter("@Resignes_At", cldresignedat.Value));
                cmd.Parameters.Add(new SqlParameter("@Gender", cmbGenderForEmployee.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@Province_id", cmbproviceid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@Muncipalty_id", cmbmuncipleid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@Barangay_id", cmbbarangayid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@HouseNumber", txthousenumber.Text));
                cmd.Parameters.Add(new SqlParameter("@Street", txtstreet.Text));
                cmd.Parameters.Add(new SqlParameter("@IsPermnent", IsPermanentEmployeeAddressYes.Checked ? true : false));
                cmd.Parameters.Add(new SqlParameter("@Position_id", cmbpositioid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@IsCurrentPosition", IspermanentPositionYes.Checked ? true : false));
                cmd.Parameters.Add(new SqlParameter("@Department_id", cmbdepartmentid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@IsCurrentDepartment", IspermanentDepartmentYes.Checked ? true : false));
                cmd.Parameters.Add(new SqlParameter("@EmployeeDependentName", txtempdependentname.Text));
                cmd.Parameters.Add(new SqlParameter("@EmployeeDependentBirthday", cldempdependentbirthdate.Value));
                cmd.Parameters.Add(new SqlParameter("@EmployeeDependentRelationship", txtrelationship.Text));
                cmd.Parameters.Add(new SqlParameter("@EmployeeDependentGender", cmbGenderForDependent.DataValueField));
                con.Open();
                cmd.ExecuteNonQuery();


            }
        }

        public void DeleteIntoEmployeemapTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

            }
        }

        public void UpdateIntoEmployeemapTable()
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
            InsertIntoEmployeemapTable();
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