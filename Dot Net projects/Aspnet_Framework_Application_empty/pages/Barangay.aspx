<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Barangay.aspx.cs" Inherits="Aspnet_Framework_Application.pages.Barangay" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <%--<link href="../Css/Barangay.css" rel="stylesheet" />--%>
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
    <form class="MainForm" id="frmBarangay" runat="server">
        <asp:hiddenfield ID="hdfemployeeidmainemp" runat="server" value="Id"></asp:hiddenfield>
      <div class="CompleteDetails">
            <h2>Barangays</h2>
            <div class="content">
                <div class="group-column">
                    <div class="cell-data">
                        <label for="lblbarangay" id="lblbarangay">Name</label>
                        <asp:TextBox runat="server" name="txtbarangay" id="txtbarangay" placeholder="Enter your BarangayName"/>
                    </div>
                    <div class="cell-data">
                        <label for="lblmuncipleidinbarangay" id="lblmuncipleidinbarangay">MunicipalityId</label>
                         <asp:DropDownList runat="server"  class="DropdownClass" name="cmbmuncipleid" id="cmbmuncipleid">
                        </asp:DropDownList>
                    </div>
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
