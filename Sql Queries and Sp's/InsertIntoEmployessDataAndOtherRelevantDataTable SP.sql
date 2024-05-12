USE Employee
GO


IF OBJECT_ID('InsertIntoEmployeeUserDefinedtable', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE InsertIntoEmployeeUserDefinedtable
END 
GO
CREATE PROCEDURE [dbo].InsertIntoEmployeeUserDefinedtable		
@EMP_ID NVARCHAR(100),
@Extension_Name NVARCHAR(100),
@First_Name NVARCHAR(100),
@Middle_Name NVARCHAR(100),
@Last_Name NVARCHAR(100),
@BirthDay date,
@Hired_At NVARCHAR(100),
@Resignes_At NVARCHAR(100),
@Gender int,
@Province_id int,
@Muncipalty_id int,
@Barangay_id int,
@HouseNumber Nvarchar(100),
@Street Nvarchar(100),
@IsPermnent bit,
@Position_id int,
@IsCurrentPosition bit,
@Department_id int,
@IsCurrentDepartment bit,
@EmployeeDependentName Nvarchar(100),
@EmployeeDependentBirthday date,
@EmployeeDependentRelationship Nvarchar(100),
@EmployeeDependentGender int
AS
BEGIN

INSERT INTO 
EmployeeUserDefinedtable
(EMP_ID,
Extension_Name,
First_Name,
Middle_Name,
Last_Name,
BirthDay,
Hired_At,
Resignes_At,
Gender,
Province_id,
Muncipalty_id,
Barangay_id,
HouseNumber,
Street,
IsPermnent,
Position_id,
IsCurrentPosition,
Department_id,
IsCurrentDepartment,
EmployeeDependentName,
EmployeeDependentBirthday,
EmployeeDependentRelationship,
EmployeeDependentGender
)
VALUES
(@EMP_ID,
@Extension_Name,
@First_Name,
@Middle_Name,
@Last_Name,
@BirthDay,
@Hired_At,
@Resignes_At,
@Gender,
@Province_id,
@Muncipalty_id,
@Barangay_id,
@HouseNumber,
@Street,
@IsPermnent,
@Position_id,
@IsCurrentPosition,
@Department_id,
@IsCurrentDepartment,
@EmployeeDependentName,
@EmployeeDependentBirthday,
@EmployeeDependentRelationship,
@EmployeeDependentGender
)


INSERT INTO 
MAPEMPLOYEE
(EMP_ID,
First_Name,
Middle_Name,
Last_Name,
Extension_Name,
Gender,
BirthDay,
Hired_At,
Resignes_At
)
VALUES
(@EMP_ID,
@First_Name,
@Middle_Name,
@Last_Name,
@Extension_Name,
@Gender,
@BirthDay,
@Hired_At,
@Resignes_At
)


INSERT INTO 
MAPEMPLOYEE_DEPENDENS
(EMP_ID,
Name,
Gender,
BirthDay,
Relationship
)
VALUES
(@EMP_ID,
@EmployeeDependentName,
@EmployeeDependentGender,
@EmployeeDependentBirthday,
@EmployeeDependentRelationship
)


INSERT INTO 
MAPEMPLOYEE_ADDRESS
(EMP_ID,
Province_ID,
Mulcipalty_ID,
Barangay_ID,
Street,
House_Number,
Permenant
)
VALUES
(@EMP_ID,
@Province_ID,
@Muncipalty_id,
@Barangay_ID,
@Street,
@HouseNumber,
@IsPermnent
)


END
GO