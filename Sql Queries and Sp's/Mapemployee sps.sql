USE Employee
GO

IF OBJECT_ID('spInsertIntoMapemployee', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMapemployee
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMapemployee
@EMP_ID NVARCHAR(100),
@First_Name NVARCHAR(100),
@Middle_Name NVARCHAR(100),
@Last_Name NVARCHAR(100),
@Extension_Name int,
@Gender int,
@BirthDay NVARCHAR(100),
@Hired_At NVARCHAR(100) = GETDATE,
@Resignes_At NVARCHAR(100) = GETDATE
AS
BEGIN

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

END
GO


IF OBJECT_ID('spUpdateIntoMapemployee', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMapemployee
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMapemployee
@EMP_ID NVARCHAR(100),
@First_Name NVARCHAR(100),
@Middle_Name NVARCHAR(100),
@Last_Name NVARCHAR(100),
@Extension_Name int,
@Gender int,
@BirthDay NVARCHAR(100),
@Hired_At NVARCHAR(100) = GETDATE,
@Resignes_At NVARCHAR(100) = GETDATE
AS
BEGIN

UPDATE MAPEMPLOYEE
SET
First_Name = @First_Name,
Middle_Name = @Middle_Name,
Last_Name = @Last_Name,
Extension_Name = @Extension_Name,
Gender = @Gender,
BirthDay = @BirthDay,
Hired_At = @Hired_At,
Resignes_At = @Resignes_At

WHERE EMP_ID = @EMP_ID
END
GO


IF OBJECT_ID('spDeleteIntoMapemployee', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMapemployee
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMapemployee
@EMP_ID NVARCHAR(100)
AS
BEGIN

DELETE MAPEMPLOYEE_DEPENDENS WHERE EMP_ID = @EMP_ID
DELETE MAPEMPLOYEE_DEPARTMENTS WHERE EMP_ID = @EMP_ID
DELETE MAPEMPLOYEE_POSITIONS WHERE EMP_ID = @EMP_ID
DELETE MAPEMPLOYEE_ADDRESS WHERE EMP_ID = @EMP_ID
DELETE MAPEMPLOYEE WHERE EMP_ID = @EMP_ID

END
GO




----------------------------------------------------



IF OBJECT_ID('spInsertIntoMapemployee_departments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMapemployee_departments
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMapemployee_departments
@EMP_ID NVARCHAR(100),
@Department_ID int,
@Resignes_At NVARCHAR(100)
AS
BEGIN

INSERT INTO 
MAPEMPLOYEE_DEPARTMENTS
(EMP_ID,
Department_ID,
Resignes_At
)
VALUES
(@EMP_ID,
@Department_ID,
@Resignes_At
)

END
GO


IF OBJECT_ID('spUpdateIntoMapemployee_departments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMapemployee_departments
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMapemployee_departments
@EMP_ID NVARCHAR(100),
@Department_ID int,
@Resignes_At NVARCHAR(100)
AS
BEGIN

UPDATE MAPEMPLOYEE_DEPARTMENTS
SET
Department_ID = @Department_ID,
Resignes_At = @Resignes_At

WHERE EMP_ID = @EMP_ID
END
GO


IF OBJECT_ID('spDeleteIntoMapemployee_departments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMapemployee_departments
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMapemployee_departments
@EMP_ID NVARCHAR(100)
AS
BEGIN

DELETE MAPEMPLOYEE_DEPARTMENTS WHERE EMP_ID = @EMP_ID

END
GO




------------------------------------------------------------------






IF OBJECT_ID('spInsertIntoMapemployee_dependens', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMapemployee_dependens
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMapemployee_dependens
@EMP_ID NVARCHAR(100),
@Name NVARCHAR(100),
@Gender int,
@BirthDay date,
@Relationship NVARCHAR(100)
AS
BEGIN

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
@Name,
@Gender,
@BirthDay,
@Relationship
)

END
GO


IF OBJECT_ID('spUpdateIntoMapemployee_dependens', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMapemployee_dependens
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMapemployee_dependens
@EMP_ID NVARCHAR(100),
@Name NVARCHAR(100),
@Gender int,
@BirthDay date,
@Relationship NVARCHAR(100)
AS
BEGIN

UPDATE MAPEMPLOYEE_DEPENDENS
SET
Name = @Name,
Gender = @Gender,
BirthDay = @BirthDay,
Relationship = @Relationship

WHERE EMP_ID = @EMP_ID
END
GO


IF OBJECT_ID('spDeleteIntoMapemployee_dependens', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMapemployee_dependens
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMapemployee_dependens
@EMP_ID NVARCHAR(100)
AS
BEGIN

DELETE MAPEMPLOYEE_DEPENDENS WHERE EMP_ID = @EMP_ID

END
GO



--------------------------------------------------------------------------




IF OBJECT_ID('spInsertIntoMapemployee_positions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMapemployee_positions
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMapemployee_positions
@EMP_ID NVARCHAR(100),
@Position_ID int,
@Current bit
AS
BEGIN

INSERT INTO 
MAPEMPLOYEE_POSITIONS
(EMP_ID,
Position_ID,
[Current]
)
VALUES
(@EMP_ID,
@Position_ID,
@Current
)

END
GO


IF OBJECT_ID('spUpdateIntoMapemployee_positions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMapemployee_positions
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMapemployee_positions
@EMP_ID NVARCHAR(100),
@Position_ID int,
@Current bit
AS
BEGIN

UPDATE MAPEMPLOYEE_POSITIONS
SET
Position_ID = @Position_ID,
[Current] = @Current

WHERE EMP_ID = @EMP_ID
END
GO


IF OBJECT_ID('spDeleteIntoMapemployee_positions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMapemployee_positions
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMapemployee_positions
@EMP_ID NVARCHAR(100)
AS
BEGIN

DELETE MAPEMPLOYEE_POSITIONS WHERE EMP_ID = @EMP_ID

END
GO







------------------------------------------------------------------





IF OBJECT_ID('spInsertIntoMapemployee_address', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMapemployee_address
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMapemployee_address
@EMP_ID NVARCHAR(100),
@Province_ID int,
@Mulcipalty_ID int,
@Barangay_ID int,
@Street NVARCHAR(100),
@House_Number NVARCHAR(100),
@Permenant bit

AS
BEGIN

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
@Mulcipalty_ID,
@Barangay_ID,
@Street,
@House_Number,
@Permenant
)

END
GO


IF OBJECT_ID('spUpdateIntoMapemployee_address', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMapemployee_address
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMapemployee_address
@EMP_ID NVARCHAR(100),
@Province_ID int,
@Mulcipalty_ID int,
@Barangay_ID int,
@Street NVARCHAR(100),
@House_Number NVARCHAR(100),
@Permenant bit
AS
BEGIN

UPDATE MAPEMPLOYEE_ADDRESS
SET
Province_ID= @Province_ID,
Mulcipalty_ID = @Mulcipalty_ID,
Barangay_ID = @Barangay_ID,
Street = @Street,
House_Number = @House_Number,
Permenant = @Permenant			

WHERE EMP_ID = @EMP_ID
END
GO


IF OBJECT_ID('spDeleteIntoMapemployee_address', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMapemployee_address
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMapemployee_address
@EMP_ID NVARCHAR(100)
AS
BEGIN

DELETE MAPEMPLOYEE_ADDRESS WHERE EMP_ID = @EMP_ID

END
GO



----------------------------------------------------------------------------------



IF OBJECT_ID('spInsertIntoProvinces', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoProvinces
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoProvinces
@NAME NVARCHAR(100)

AS
BEGIN

INSERT INTO 
PROVINCES
(NAME
)
VALUES
(@NAME
)

END
GO


IF OBJECT_ID('spUpdateIntoProvinces', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoProvinces
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoProvinces
@ID INT,
@NAME NVARCHAR(100)
AS
BEGIN

UPDATE PROVINCES
SET
Name = @NAME			

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoProvinces', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoProvinces
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoProvinces
@ID INT
AS
BEGIN

DELETE PROVINCES WHERE ID = @ID

END
GO




---------------------------------------------------





IF OBJECT_ID('spInsertIntoMulcipalties', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoMulcipalties
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoMulcipalties
@Province_ID int,
@NAME NVARCHAR(100),
@Zip_Code NVARCHAR(100)

AS
BEGIN

INSERT INTO 
MULCIPALTIES
(Province_ID,
NAME,
Zip_Code
)
VALUES
(@Province_ID,
@NAME,
@Zip_Code
)

END
GO


IF OBJECT_ID('spUpdateIntoMulcipalties', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoMulcipalties
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoMulcipalties
@ID INT,
@Province_ID int,
@NAME NVARCHAR(100),
@Zip_Code NVARCHAR(100)
AS
BEGIN

UPDATE MULCIPALTIES
SET
Province_ID =@Province_ID,
NAME = @NAME,
Zip_Code = @Zip_Code		

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoMulcipalties', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoMulcipalties
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoMulcipalties
@ID INT
AS
BEGIN

DELETE MULCIPALTIES WHERE ID = @ID

END
GO





---------------------------------------------------





IF OBJECT_ID('spInsertIntoBarangays', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoBarangays
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoBarangays
@Mulcipalty_ID int,
@NAME NVARCHAR(100)

AS
BEGIN

INSERT INTO 
BARANGAYS
(Mulcipalty_ID,
NAME
)
VALUES
(@Mulcipalty_ID,
@NAME
)

END
GO


IF OBJECT_ID('spUpdateIntoBarangays', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoBarangays
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoBarangays
@ID INT,
@Mulcipalty_ID int,
@NAME NVARCHAR(100)
AS
BEGIN

UPDATE BARANGAYS
SET
Mulcipalty_ID =@Mulcipalty_ID,
NAME = @NAME	

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoBarangays', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoBarangays
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoBarangays
@ID INT
AS
BEGIN

DELETE BARANGAYS WHERE ID = @ID

END
GO






---------------------------------------------------





IF OBJECT_ID('spInsertIntoDeparments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoDeparments
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoDeparments
@NAME NVARCHAR(100)

AS
BEGIN

INSERT INTO 
DEPARMENTS
(NAME
)
VALUES
(@NAME
)

END
GO


IF OBJECT_ID('spUpdateIntoDeparments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoDeparments
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoDeparments
@ID INT,
@NAME NVARCHAR(100)
AS
BEGIN

UPDATE DEPARMENTS
SET
Name = @NAME			

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoDeparments', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoDeparments
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoDeparments
@ID INT
AS
BEGIN

DELETE DEPARMENTS WHERE ID = @ID

END
GO




----------------------------------------------------------------------





IF OBJECT_ID('spInsertIntoPositions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoPositions
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoPositions
@NAME NVARCHAR(100)

AS
BEGIN

INSERT INTO 
POSITIONS
(NAME
)
VALUES
(@NAME
)

END
GO


IF OBJECT_ID('spUpdateIntoPositions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoPositions
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoPositions
@ID INT,
@NAME NVARCHAR(100)
AS
BEGIN

UPDATE POSITIONS
SET
Name = @NAME			

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoPositions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoPositions
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoPositions
@ID INT
AS
BEGIN

DELETE POSITIONS WHERE ID = @ID

END
GO





-----------------------------------------------------------------------------------






IF OBJECT_ID('spInsertIntoNamingextensions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoNamingextensions
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoNamingextensions
@NAME NVARCHAR(100)

AS
BEGIN

INSERT INTO 
NAMINGEXTENSIONS
(NAME
)
VALUES
(@NAME
)

END
GO


IF OBJECT_ID('spUpdateIntoNamingextensions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoNamingextensions
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoNamingextensions
@ID INT,
@NAME NVARCHAR(100)
AS
BEGIN

UPDATE NAMINGEXTENSIONS
SET
Name = @NAME			

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoNamingextensions', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoNamingextensions
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoNamingextensions
@ID INT
AS
BEGIN

DELETE NAMINGEXTENSIONS WHERE ID = @ID

END
GO





---------------------------------------------------------------------------------------






IF OBJECT_ID('spInsertIntoGendertable', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spInsertIntoGendertable
END 
GO
CREATE PROCEDURE [dbo].spInsertIntoGendertable
@GENDER NVARCHAR(100)

AS
BEGIN

INSERT INTO 
GENDERTABLE
(GENDER
)
VALUES
(@GENDER
)

END
GO


IF OBJECT_ID('spUpdateIntoGendertable', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spUpdateIntoGendertable
END 
GO
CREATE PROCEDURE [dbo].spUpdateIntoGendertable
@ID INT,
@GENDER NVARCHAR(100)
AS
BEGIN

UPDATE GENDERTABLE
SET
GENDER = @GENDER			

WHERE ID = @ID
END
GO


IF OBJECT_ID('spDeleteIntoGendertable', 'P') IS NOT NULL 
BEGIN 
    DROP PROCEDURE spDeleteIntoGendertable
END 
GO
CREATE PROCEDURE [dbo].spDeleteIntoGendertable
@ID INT
AS
BEGIN

DELETE GENDERTABLE WHERE ID = @ID

END
GO
