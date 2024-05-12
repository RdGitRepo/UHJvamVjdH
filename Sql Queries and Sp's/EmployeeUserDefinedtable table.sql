USE Employee
GO

IF OBJECT_ID('EmployeeUserDefinedtable', 'U') IS NULL 
BEGIN 
    CREATE TABLE EmployeeUserDefinedtable
	(
		ID INT PRIMARY KEY IDENTITY,		
		EMP_ID NVARCHAR(100) FOREIGN KEY REFERENCES MAPEMPLOYEE(EMP_ID),
		First_Name NVARCHAR(100),
		Middle_Name NVARCHAR(100),
		Last_Name NVARCHAR(100),
		Extension_Name int FOREIGN KEY REFERENCES NAMINGEXTENSIONS(ID),
		Gender int FOREIGN KEY REFERENCES GENDERTABLE(ID),
		BirthDay date,
		Hired_At NVARCHAR(100),
		Resignes_At NVARCHAR(100),
		Province_id int FOREIGN KEY REFERENCES PROVINCES(ID),
		Muncipalty_id int FOREIGN KEY REFERENCES MULCIPALTIES(ID),
		Barangay_id int FOREIGN KEY REFERENCES BARANGAYS(ID),
		HouseNumber Nvarchar(100),
		Street Nvarchar(100),
		IsPermnent bit,
		Position_id int FOREIGN KEY REFERENCES POSITIONS(ID),
		IsCurrentPosition bit,
		Department_id int FOREIGN KEY REFERENCES DEPARMENTS(ID),
		IsCurrentDepartment bit,
		EmployeeDependentName Nvarchar(100),
		EmployeeDependentBirthday date,
		EmployeeDependentRelationship Nvarchar(100),
		EmployeeDependentGender int FOREIGN KEY REFERENCES GENDERTABLE(ID),
	)
END 
GO