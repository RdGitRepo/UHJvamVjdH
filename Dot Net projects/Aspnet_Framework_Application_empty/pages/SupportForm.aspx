<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SupportForm.aspx.cs" Inherits="Aspnet_Framework_Application.pages.SupportForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" defer></script>
    <style type="text/css">
        .Mainnavbar {
            /* background: linear-gradient(to right, #89fffd, #89fffd); 
            color: black; */
            background: linear-gradient(to right, #ef32d9, #ef32d9);
            color: white;

            & * {
                      color:white;
                  }
        }

        .buttonforaction {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            gap: 1rem;
    
            .employeebuttonsubmitclass {
                flex-grow: 1;
                padding-block: 0.2rem;
                border: 1px solid #bfbfbf;
                box-shadow: 0px 1px 3px #bfbfbf, 1px 3px 6px #bfbfbf;
                border-radius: 0.5rem;

                &:hover, &:focus-visible {
                    border: 1px solid black;
                    box-shadow: 0px 1px 3px #bfbfbf;            
                }
            }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary Mainnavbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FORM TO SHOW CRUD OPERATIONS
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link
                        </a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-3">
                <input class="form-control" type="hidden" id="txtsupportkey" name="txtsupportkey" />
            </div>
            <div class="col-lg-6 mb-3">
                <input class="form-control" type="hidden" id="txtsupportaltcode" name="txtsupportaltcode" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtsupportexecution">SUPPORT EXECUTION: </label>
            <div class="col-lg-10 mb-3">
                <input class="form-control" type="text" id="txtsupportexecution" name="txtsupportexecution" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtclientcatogory">CLIENT CATOGORY: </label>
            <div class="col-lg-2 mb-3">
                <input class="form-control" type="text" id="txtclientcatogory" name="txtclientcatogory" />
            </div>
            <label class="col-lg-1 col-form-label" for="txtclientname">CLIENT NAME: </label>
            <div class="col-lg-3 mb-3">
                <input class="form-control" type="text" id="txtclientname" name="txtclientname" />
            </div>
            <label class="col-lg-1 col-form-label" for="txtpersonname">PERSON NAME: </label>
            <div class="col-lg-3 mb-3">
                <input class="form-control" type="text" id="txtpersonname" name="txtpersonname" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtpersondepartment">PERSON DEPARTMENT: </label>
            <div class="col-lg-2 mb-3">
                <input class="form-control" type="text" id="txtpersondepartment" name="txtpersondepartment" />
            </div>
            <label class="col-lg-1 col-form-label" for="txtphonenumber">NUMBER: </label>
            <div class="col-lg-3 mb-3">
                <input class="form-control" type="text" id="txtphonenumber" name="txtphonenumber" />
            </div>
            <label class="col-lg-1 col-form-label" for="txtquerytype">QUERY TYPE: </label>
            <div class="col-lg-3 mb-3">
                <input class="form-control" type="text" id="txtquerytype" name="txtquerytype" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtquerydescription">QUERY DESCRIPTION: </label>
            <div class="col-lg-10 mb-3">
                <input class="form-control" type="text" id="txtquerydescription" name="txtquerydescription" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtanydesknumber">ANYDESK NUMBER: </label>
            <div class="col-lg-8 mb-3">
                <input class="form-control" type="text" id="txtanydesknumber" name="txtanydesknumber" />
            </div>
            <label class="col-lg-1 col-form-label" for="txtstatus">STATUS: </label>
            <div class="col-lg-1 mb-3 d-flex align-items-center flex-row">
                <input class="btn-primary" type="checkbox" id="txtstatus" name="txtstatus" autocomplete="off" defaultchecked />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtstarttime">START TIME: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="text" id="txtstarttime" name="txtstarttime" />
            </div>
            <label class="col-lg-2 col-form-label" for="txtendtime">END TIME: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="text" id="txtendtime" name="txtendtime" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtcreatedby">CREATED BY: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="text" id="txtcreatedby" name="txtcreatedby" />
            </div>
            <label class="col-lg-2 col-form-label" for="txtcreateddate">CREATED DATE: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="date" id="txtcreateddate" name="txtcreateddate" />
            </div>
        </div>

        <div class="row">
            <label class="col-lg-2 col-form-label" for="txtupdatedby">UPDATED BY: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="text" id="txtupdatedby" name="txtupdatedby" />
            </div>
            <label class="col-lg-2 col-form-label" for="txtupdateddate">UPDATED DATE: </label>
            <div class="col-lg-4 mb-3">
                <input class="form-control" type="date" id="txtupdateddate" name="txtupdateddate" />
            </div>
        </div>
        <div class="input-group mb-3 my-3">
            <label class="input-group-text" for="flufileupload">Upload</label>
            <input type="file" class="form-control" id="flufileupload" />
        </div>
        <div class="buttonforaction">
            <button class="employeebuttonsubmitclass my-4" onclick ="btnfirst_Click" id="btnfirst" runat="server" Text="GetFirst" >GetFirst</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btnprev_Click" id="btnprev" runat="server" Text="GetPrev" >GetPrev</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btnnext_Click" id="btnnext" runat="server" Text="GetNext" >GetNext</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btnlast_Click" id="btnlast" runat="server" Text="GetLast" >GetLast</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btnsave_Click" id="btnsave" runat="server" Text="Save" >Save</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btndelete_Click" id="btndelete" runat="server" Text="Delete" >Delete</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btnedit_Click" id="btnedit" runat="server" Text="Edit" >Edit</button>
            <button class="employeebuttonsubmitclass my-4" onclick="btncancel_Click" id="btncancel" runat="server" Text="Cancel" >Cancel</button>
        </div>
    </div>
</body>
</html>
