using Aspnet_Framework_Application_MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace Aspnet_Framework_Application_MVC.Controllers
{   
    public class MyTableController : Controller
    {

        private string csMytable = ConfigurationManager.ConnectionStrings["MyTableConnectionString"].ConnectionString;
        private string csTestingTableForGrid = ConfigurationManager.ConnectionStrings["TestingTableForGridConnectionString"].ConnectionString;

        // GET: MyTable
        public ActionResult Index()
        {
            return View();
        }

        // GET: MyTable
        [HttpGet]
        public ActionResult DisplayGridView()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                    {
                        SqlCommand cmd = new SqlCommand(" SELECT * FROM MyTable NOLOCK ", sqlConnection);
                        cmd.CommandType = CommandType.Text;
                        DataTable da = new DataTable();
                        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                        adapter.Fill(da);
                        List<MyTableModel> list = new List<MyTableModel>();
                        foreach (DataRow dr in da.Rows)
                        {
                            MyTableModel obj = new MyTableModel();
                            obj.ID = (int)dr.ItemArray[0];
                            obj.Name = dr.ItemArray[1].ToString();
                            obj.Age = (int)dr.ItemArray[2];
                            obj.Email = dr.ItemArray[3].ToString();
                            obj.Gender = dr.ItemArray[4].ToString();
                            obj.City = dr.ItemArray[5].ToString();
                            obj.Salary = (decimal)dr.ItemArray[6];
                            obj.Active = (bool)dr.ItemArray[7] ? true : false;
                            list.Add(obj);
                        }                    
                        return View(list);
                    }
                }
                return View();
            }
            catch
            {
                return View();
            }
        }

        // GET: MyTable/Details/5
        public ActionResult Details(int id)
        {
            if (ModelState.IsValid)
            {
                using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                {
                    SqlCommand cmd = new SqlCommand("GetMyTableDataByID", sqlConnection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("ID", id));
                    DataTable da = new DataTable();
                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                    adapter.Fill(da);
                    MyTableModel obj = new MyTableModel();
                    obj.ID = (int)da.Rows[0].ItemArray[0];
                    obj.Name = da.Rows[0].ItemArray[1].ToString();
                    obj.Age = (int)da.Rows[0].ItemArray[2];
                    obj.Email = da.Rows[0].ItemArray[3].ToString();
                    obj.Gender = da.Rows[0].ItemArray[4].ToString();
                    obj.City = da.Rows[0].ItemArray[5].ToString();
                    obj.Salary = (decimal)da.Rows[0].ItemArray[6];
                    obj.Active = (bool)da.Rows[0].ItemArray[7] ? true : false;
                    return View(obj);

                }
            }
            return View();
        }

        // GET: MyTable/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MyTable/Create
        [HttpPost]
        public ActionResult Create(MyTableModel myTableModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                    {
                        SqlCommand cmd = new SqlCommand("InsertDataIntoMyTable", sqlConnection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new SqlParameter("Name", myTableModel.Name));
                        cmd.Parameters.Add(new SqlParameter("Age", myTableModel.Age));
                        cmd.Parameters.Add(new SqlParameter("Email", myTableModel.Email));
                        cmd.Parameters.Add(new SqlParameter("Gender", myTableModel.Gender));
                        cmd.Parameters.Add(new SqlParameter("City", myTableModel.City));
                        cmd.Parameters.Add(new SqlParameter("Salary", myTableModel.Salary));
                        cmd.Parameters.Add(new SqlParameter("Active", myTableModel.Active));
                        sqlConnection.Open();
                        cmd.ExecuteNonQuery();
                    }
                }
                return RedirectToAction("DisplayGridView");
            }
            catch
            {
                return View();
            }
        }

        // GET: MyTable/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MyTable/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, MyTableModel myTableModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                    {
                        SqlCommand cmd = new SqlCommand("UpdateDataInMyTable", sqlConnection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new SqlParameter("ID", myTableModel.ID));
                        cmd.Parameters.Add(new SqlParameter("Name", myTableModel.Name));
                        cmd.Parameters.Add(new SqlParameter("Age", myTableModel.Age));
                        cmd.Parameters.Add(new SqlParameter("Email", myTableModel.Email));
                        cmd.Parameters.Add(new SqlParameter("Gender", myTableModel.Gender));
                        cmd.Parameters.Add(new SqlParameter("City", myTableModel.City));
                        cmd.Parameters.Add(new SqlParameter("Salary", myTableModel.Salary));
                        cmd.Parameters.Add(new SqlParameter("Active", myTableModel.Active));
                        sqlConnection.Open();
                        cmd.ExecuteNonQuery();
                    }
                }
                return RedirectToAction("DisplayGridView");
            }
            catch
            {
                return View();
            }
        }

        // GET: MyTable/Delete/5
        public ActionResult Delete(int id)
        {
            if (ModelState.IsValid)
            {
                using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                {
                    SqlCommand cmd = new SqlCommand("GetMyTableDataByID", sqlConnection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("ID", id));
                    DataTable da = new DataTable();
                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                    adapter.Fill(da);
                    MyTableModel obj = new MyTableModel();
                    obj.ID = (int)da.Rows[0].ItemArray[0];
                    obj.Name = da.Rows[0].ItemArray[1].ToString();
                    obj.Age = (int)da.Rows[0].ItemArray[2];
                    obj.Email = da.Rows[0].ItemArray[3].ToString();
                    obj.Gender = da.Rows[0].ItemArray[4].ToString();
                    obj.City = da.Rows[0].ItemArray[5].ToString();
                    obj.Salary = (decimal)da.Rows[0].ItemArray[6];
                    obj.Active = (bool)da.Rows[0].ItemArray[7] ? true : false;
                    return View(obj);

                }
            }
            return View();
        }

        // POST: MyTable/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, MyTableModel myTableModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (SqlConnection sqlConnection = new SqlConnection(csMytable))
                    {
                        SqlCommand cmd = new SqlCommand("DeleteDataFromMyTable", sqlConnection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new SqlParameter("ID", myTableModel.ID));
                        sqlConnection.Open();
                        cmd.ExecuteNonQuery();
                    }
                }
                return RedirectToAction("DisplayGridView");
            }
            catch
            {
                return View();
            }
        }
    }
}
