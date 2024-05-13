<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Provinces.aspx.cs" Inherits="Aspnet_Framework_Application.pages.Provinces" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <%--<link href="../Css/Provinces.css" rel="stylesheet" />--%>
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
    <form class="MainForm" id="frmProvinces" runat="server">
        <asp:HiddenField ID="hdfemployeeidmainemp" runat="server" Value="Id"></asp:HiddenField>
        <div class="CompleteDetails">
            <h2>Provinces</h2>
            <div class="content">
                <div class="cell-data">
                    <label for="lblprovinces" id="lblprovinces">Provinces</label>
                    <asp:TextBox runat="server" name="txtprovinces" ID="txtprovinces" placeholder="Enter your ProviceName" />
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
        $(document).ready(function () {
            $(window).resize(function () {
                $(".group-column").removeClass("below")
                $(".cell-data").removeClass("below")
                if (window.innerWidth <= 800) {
                    $(".group-column").addClass("below");
                    $(".cell-data").addClass("below");
                }
            })
        })
    </script>
</body>
</html>
