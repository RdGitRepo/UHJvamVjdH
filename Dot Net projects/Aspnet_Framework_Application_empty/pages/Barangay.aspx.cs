﻿using System;
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
    public partial class Barangay : System.Web.UI.Page
    {
        private string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlDataAdapter adpt = new SqlDataAdapter(" SELECT [ID],[NAME] FROM [Employee].[dbo].[MULCIPALTIES] NOLOCK ", con);
                    DataTable dt = new DataTable();
                    adpt.Fill(dt);
                    cmbmuncipleid.DataSource = dt;
                    cmbmuncipleid.DataBind();
                    cmbmuncipleid.DataTextField = "Name";
                    cmbmuncipleid.DataValueField = "ID";
                    cmbmuncipleid.DataBind();
                }
            }
        }

        private void ClearControl()
        {
            txtbarangay.Text = string.Empty;
            cmbmuncipleid.DataValueField = "1";
        }

        public void InsertIntoBarangayTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spInsertIntoBarangays", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@Mulcipalty_ID", cmbmuncipleid.DataValueField));
                cmd.Parameters.Add(new SqlParameter("@NAME", txtbarangay.Text));
                con.Open();
                cmd.ExecuteNonQuery();
                ClearControl();

            }
        }

        public void DeleteIntoBarangayTable()
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

            }
        }

        public void UpdateIntoBarangayTable()
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