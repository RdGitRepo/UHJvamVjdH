<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="GetEmployeeData.aspx.cs" Inherits="Aspnet_Framework_Application.pages.GetEmployeeData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="../Css/MainCss.css" rel="stylesheet" />
</head>
<body>
    <header>
        <nav>
            <div class="headingforform">
                Employess Form
            </div>
            <ul>
                <li><a href="./GetEmployeeData.aspx">Home</a></li>
                <li><a href="./EmployeeDepartments.aspx">Department</a></li>
                <li><a href="./EmployeePositions.aspx">Position</a></li>
                <li><a href="./Provinces.aspx">Province</a></li>
                <li><a href="./Munciplities.aspx">Mulcipality</a></li>
                <li><a href="./Barangay.aspx">Barangay</a></li>
            </ul>
            <div class="btn">
                <button>
                    ||||
                </button>
            </div>
        </nav>
    </header>   
    <form class="MainForm" id="forminbody" runat="server">
        <asp:hiddenfield ID="hdfemployeeidmainemp" runat="server" value="Id"></asp:hiddenfield>
        <div class="CompleteDetails">
            <h2>Employee Information</h2>
            <div class="content">
                <div class="cell-data">
                    <label for="cmbextensionnamemainemp" id="lblextensionname">Extension Name</label>
                    <asp:DropDownList runat="server" class="DropdownClass" name="cmbextensionnamemainemp" id="cmbextensionnamemainemp">
                    </asp:DropDownList>
                </div>
                <div class="group-column">
                    <div class="cell-data">
                        <label for="txtfirstname" id="lblfirstname">First Name</label>
                        <asp:TextBox runat="server" name="txtfirstname" id="txtfirstname" placeholder="Enter your FirstName"/>
                    </div>
                    <div class="cell-data">
                        <label for="txtmiddlename" id="lblmiddlename">Middle Name</label>
                        <asp:TextBox runat="server" name="txtmiddlename" id="txtmiddlename" placeholder="Enter your MiddleName"/>
                    </div>
                    <div class="cell-data">
                        <label for="txtlastname" id="lbllastname">Last Name</label>
                        <asp:TextBox runat="server" name="txtlastname" id="txtlastname" placeholder="Enter your LastName"/>
                    </div>
                </div>
                <div class="group-column">
                    <div class="cell-data">
                        <label for="cldbirthdate" id="lblbirthdate">Birthdate</label>
                        <input runat="server" type="date" id="cldbirthdate" />
                    </div>
                    <div class="cell-data">
                        <label for="cldhiredat" id="lblhiredat">Hired_at</label>
                        <input runat="server" type="date" id="cldhiredat" />
                    </div>
                    <div class="cell-data">
                        <label for="cldresignedat" id="lblresignedat">Resigned_at</label>
                        <input runat="server" type="date" id="cldresignedat" />
                    </div>
                </div>
                <div class="cell-data radio">
                    <label for="cmbGenderForEmployee" id="lblgenderforemployee">Gender</label>
                   <%-- <div class="radio">
                        <div><input runat="server" type="radio" name="gender" id="rdbmaleforemployee" value="male"/><label for="rdbmaleforemployee">Male</label></div>
                        <div><input runat="server" type="radio" name="gender" id="rdbfemaleforemployee" value="female"/><label for="rdbfemaleforemployee">Female</label></div>
                        <div><input runat="server" type="radio" name="gender" id="rdbothersforemployee" value="others"/><label for="rdbothersforemployee">others</label></div>
                    </div>--%>
                    <asp:DropDownList runat="server" class="DropdownClass" name="cmbGenderForEmployee" id="cmbGenderForEmployee">
                    </asp:DropDownList>
                </div>
            </div>
        </div>

        <div class="CompleteDetails">
            <h2>Employee Address</h2>
            <div class="content">
                <div class="group-column">

                    <div class="cell-data">
                        <label for="lblprovinceid" id="lblprovinceid">ProviceId</label>
                        <asp:DropDownList runat="server"  class="DropdownClass" name="cmbproviceid" id="cmbproviceid">
                        </asp:DropDownList>
                    </div>
                    <div class="cell-data">
                        <label for="lblmuncipleid" id="lblmuncipleid">MunicipalityId</label>
                        <asp:DropDownList runat="server"  class="DropdownClass" name="cmbmuncipleid" id="cmbmuncipleid">
                        </asp:DropDownList>
                    </div>
                    <div class="cell-data">
                        <label for="lblbarangayid" id="lblbarangayid">BarangayId</label>
                        <asp:DropDownList runat="server" OnSelectedIndexChanged="cmbbarangayid_SelectedIndexChanged" class="DropdownClass" name="cmbbarangayid" id="cmbbarangayid">
                        </asp:DropDownList>
                    </div>
                </div>
                <div class="group-column">
                    <div class="cell-data">
                        <label for="lblhousenumber" id="lblhousenumber">House Number</label>
                        <asp:TextBox runat="server" name="txthousenumber" id="txthousenumber" placeholder="Enter your House number"/>
                    </div>
                    <div class="cell-data">
                        <label for="lblstreet" id="lblstreet">Street</label>
                        <asp:TextBox runat="server" name="txtstreet" id="txtstreet" placeholder="Enter your Street name"/>
                    </div>
                </div>
                <div class="cell-data radio">
                    <label for="" id="lblpermanent">Permanent</label>
                    <div class="radio">
                        <div><input runat="server" type="radio" name="Permanent" id="IsPermanentEmployeeAddressYes" value="yes"/><label for="IsPermanentEmployeeAddressYes">Yes</label></div>
                        <div><input runat="server" type="radio" name="Permanent" id="IsPermanentEmployeeAddressNo" value="no"/><label for="IsPermanentEmployeeAddressNo">No</label></div>
                    </div>
                </div>
            </div>
        </div>
         <div class="CompleteDetails">
            <h2>Employee Positions</h2>
            <div class="content">
                <div class="cell-data">
                    <label for="lblpositionid" id="lblpositionid">PositionId</label>
                    <asp:DropDownList runat="server" OnSelectedIndexChanged="cmbpositioid_SelectedIndexChanged" class="DropdownClass" name="cmbpositioid" id="cmbpositioid">
                    </asp:DropDownList>
                </div>
                <div class="cell-data radio">
                    <label for="lblcurrentposition" id="lblcurrentposition">Current</label>
                    <div class="radio">
                        <div><input runat="server" type="radio" name="Permanent" id="IspermanentPositionYes" value="yes"/><label for="IspermanentPositionYes"/>Yes</label></div>
                        <div><input runat="server" type="radio" name="Permanent" id="IspermanentPositionNo" value="no"/><label for="IspermanentPositionNo"/>No</label></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="CompleteDetails">
            <h2>Employee Departments</h2>
            <div class="content">
                <div class="cell-data">
                    <label for="lbldepartmentid" id="lbldepartmentid">DepartmentsId</label>
                     <asp:DropDownList runat="server" OnSelectedIndexChanged="cmbdepartmentid_SelectedIndexChanged" class="DropdownClass" name="cmbdepartmentid" id="cmbdepartmentid">
                     </asp:DropDownList>
                </div>
                <div class="cell-data radio">
                    <label for="lblcurrentdepartment" id="lblcurrentdepartment">Current</label>
                    <div class="radio">
                        <div><input runat="server" type="radio" name="Permanent" id="IspermanentDepartmentYes" value="yes"/><label for="IspermanentDepartmentYes">Yes</label></div>
                        <div><input runat="server" type="radio" name="Permanent" id="IspermanentDepartmentNo" value="no"/><label for="IspermanentDepartmentNo">No</label></div>
                    </div>
                </div>
            </div>
        </div>

         <div class="CompleteDetails">
            <h2>Employee Dependents</h2>
            <div class="content">
                <div class="group-column">
                    <div class="cell-data">
                        <label for="lblempdependentname" id="lblempdependentname">Name</label>
                        <asp:TextBox runat="server" name="txtempdependentname" id="txtempdependentname" placeholder="Enter your DepartmentName"/>
                    </div>
                    <div class="cell-data">
                        <label for="lblempdependentbirthdate" id="lblempdependentbirthdate">Birthdate</label>
                        <input runat="server" type="date" id="cldempdependentbirthdate" />
                    </div>
                    <div class="cell-data">
                        <label for="lblrelationship" id="lblrelationship">Relationship</label>
                        <asp:TextBox runat="server" name="txtrelationship" id="txtrelationship" placeholder="Enter your relation"/>
                    </div>
                </div>
                <div class="cell-data">
                    <label for="cmbGenderForDependent" id="lblgenderfordependent">Gender</label>
                    <%--<div class="radio">
                        <div><input runat="server" type="radio" name="gender" id="rdbmalefordependent" value="male"/><label for="rdbmalefordependent">Male</label></div>
                        <div><input runat="server" type="radio" name="gender" id="rdbfemalefordependent" value="female"/><label for="rdbfemalefordependent">Female</label></div>
                        <div><input runat="server" type="radio" name="gender" id="rdbothersfordependent" value="others"/><label for="rdbothersfordependent">others</label></div>
                    </div>--%>
                    <asp:DropDownList runat="server" class="DropdownClass" name="cmbGenderForDependent" id="cmbGenderForDependent">
                    </asp:DropDownList>
                </div>
            </div>
        </div>

        <div class="buttonforaction">
            
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnfirst_Click" ID="btnfirst" runat="server" Text="GetFirst" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnprev_Click" ID="btnprev" runat="server" Text="GetPrev" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnnext_Click" ID="btnnext" runat="server" Text="GetNext" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnlast_Click" ID="btnlast" runat="server" Text="GetLast" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnsave_Click" ID="btnsave" runat="server" Text="Save" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btndelete_Click" ID="btndelete" runat="server" Text="Delete" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btnedit_Click" ID="btnedit" runat="server" Text="Edit" />
            <asp:Button CssClass="employeebuttonsubmitclass" OnClick="btncancel_Click" ID="btncancel" runat="server" Text="Cancel" />

        </div>
    </form>

    <script src="../js/jquery-3.7.1.min.js"></script>
    <script>
        $(document).ready(function(){
            $(window).resize(function(){
                $(".group-column").removeClass("below")
                $(".cell-data").removeClass("below")
                if(window.innerWidth <= 800){
                    $(".group-column").addClass("below");
                    $(".cell-data").addClass("below");
                }
            })
        })
    </script>
</body>
</html>
