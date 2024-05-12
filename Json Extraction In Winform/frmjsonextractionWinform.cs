using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Security.AccessControl;
using WindowsFormsDemo.Classes;
using Newtonsoft.Json;
using System.IO;
using System.Data.Common;

namespace WindowsFormsDemo
{
    public partial class frmjsonextractionWinform : Form
    {
        public frmjsonextractionWinform()
        {
            InitializeComponent();
        }

        public string cs = ConfigurationManager.ConnectionStrings["CSDB"].ConnectionString;

        private void btnimportdatafromfile_Click(object sender, EventArgs e)
        {
            try
            {
                string FilefromFolder = ofdgetdatafromfile.ShowDialog() == DialogResult.OK ? ofdgetdatafromfile.FileName : "";
                Employee employeeobjfromjson = new Employee();
                if (FilefromFolder != "") { employeeobjfromjson = JsonConvert.DeserializeObject<Employee>(FilefromFolder); }
                else { lblerror.Text = "Please select the right path for json file"; }
            }
            catch (Exception ex)
            {
                lblerror.Text = "Please select the right path for json file. " + ex.Message;
            }
        }

        private void btngetdataforjson_Click(object sender, EventArgs e)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    DataSet ds = new DataSet();
                    SqlDataAdapter da = new SqlDataAdapter(new SqlCommand("SELECT * FROM TBLEMPLOYEE NOLOCK", con));
                    da.Fill(ds);                    
                    dgvmain.DataSource = ds.Tables[0];                  
                }
            }
            catch(Exception ex)
            {
                lblerror.Text = "cannot take data from database. " + ex.Message;
            }
        }

        private void btnsavedatainfile_Click(object sender, EventArgs e)
        {
            try
            {
                string Folderforstorage = fbdgetfolderforsavingfile.ShowDialog() == DialogResult.OK ? fbdgetfolderforsavingfile.SelectedPath : "";
                string Pathforstorage = Folderforstorage + "\\json.txt";
                for (int i = 0; File.Exists(Pathforstorage); i++)
                {
                    string Getstringwithoutextension = Path.GetFileNameWithoutExtension(Pathforstorage);
                    string Getextension = Path.GetExtension(Pathforstorage);
                    Pathforstorage = Folderforstorage + "\\" + Getstringwithoutextension + i.ToString() + Getextension;
                }               
                string jsonstring = "";
                if (Pathforstorage != "")
                {
                    List<Employee> ObjForJson = new List<Employee>();
                    ObjForJson = GetdatafromGrid(dgvmain);
                    jsonstring = JsonConvert.SerializeObject(ObjForJson);
                    File.AppendAllText(Pathforstorage, jsonstring);
                }
            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
            }
        }

        public String GetUniqueFileName(String filename)
        {
            string Uniquefilename = "";
            return Uniquefilename;
        }

        public List<Employee> GetdatafromGrid(DataGridView dgv)
        {
            try
            {
                List<Employee> EmpList = new List<Employee>();
                foreach (DataGridViewRow dgvrow in dgv.Rows)
                {
                    if (dgvrow.Cells[0].Value == null)
                    {
                        continue;
                    }
                    Employee EmpObj = new Employee();
                    EmpObj.ID = (int)dgvrow.Cells[0].Value;
                    EmpObj.NAME = dgvrow.Cells[1].Value.ToString();
                    EmpObj.EMP_ID = dgvrow.Cells[2].Value.ToString();
                    EmpObj.EMP_MANAGER = dgvrow.Cells[3].Value.ToString();
                    EmpObj.PHONE_NUMBER = dgvrow.Cells[4].Value.ToString();
                    EmpObj.EMP_JOINED_DATE = Convert.ToDateTime(dgvrow.Cells[5].Value);
                    EmpObj.EMP_CONFIRM_DATE = Convert.ToDateTime(dgvrow.Cells[6].Value);
                    EmpList.Add(EmpObj);
                }
                return EmpList;
            }
            catch (Exception ex) 
            {
                lblerror.Text = "Employee data can't be filled. " + ex.Message;
                return new List<Employee>();
            }           
        }

        private void InsertInto_Emmployee(Employee employee)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("SPINSERTINTO_TBLEMPLOYEE", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@NAME", employee.ID));
                    cmd.Parameters.Add(new SqlParameter("@EMP_ID", employee.EMP_ID));
                    cmd.Parameters.Add(new SqlParameter("@EMP_MANAGER", employee.EMP_MANAGER));
                    cmd.Parameters.Add(new SqlParameter("@PHONE_NUMBER", employee.PHONE_NUMBER));
                    cmd.Parameters.Add(new SqlParameter("@EMP_JOINED_DATE", employee.EMP_JOINED_DATE));
                    cmd.Parameters.Add(new SqlParameter("@EMP_CONFIRM_DATE", employee.EMP_CONFIRM_DATE));
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
            }
        }

        private void Update_Emmployee(Employee employee)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("SPUPDATE_TBLEMPLOYEE", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@NAME", employee.ID));
                    cmd.Parameters.Add(new SqlParameter("@EMP_ID", employee.EMP_ID));
                    cmd.Parameters.Add(new SqlParameter("@EMP_MANAGER", employee.EMP_MANAGER));
                    cmd.Parameters.Add(new SqlParameter("@PHONE_NUMBER", employee.PHONE_NUMBER));
                    cmd.Parameters.Add(new SqlParameter("@EMP_JOINED_DATE", employee.EMP_JOINED_DATE));
                    cmd.Parameters.Add(new SqlParameter("@EMP_CONFIRM_DATE", employee.EMP_CONFIRM_DATE));
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
            }
        }

        private void Delete_Emmployee(Employee employee)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("SPDELETE_TBLEMPLOYEE", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@EMP_ID", employee.EMP_ID));
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
            }
        }
    }
}
