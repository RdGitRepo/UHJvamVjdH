USE DatabaseForMVC
GO

-- Create table
CREATE TABLE MyTable (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(50),
    Age INT,
    Email VARCHAR(100),
    Gender VARCHAR(10),
    City VARCHAR(50),
    Salary DECIMAL(10,2),
    Active BIT
);
go

-- Create stored procedure for inserting data
CREATE PROCEDURE InsertDataIntoMyTable
    @Name VARCHAR(50),
    @Age INT,
    @Email VARCHAR(100),
    @Gender VARCHAR(10),
    @City VARCHAR(50),
    @Salary DECIMAL(10,2),
    @Active BIT
AS
BEGIN
    INSERT INTO MyTable (Name, Age, Email, Gender, City, Salary, Active)
    VALUES (@Name, @Age, @Email, @Gender, @City, @Salary, @Active);
END;
go

-- Create stored procedure for updating data
CREATE PROCEDURE UpdateDataInMyTable
    @ID INT,
    @Name VARCHAR(50),
    @Age INT,
    @Email VARCHAR(100),
    @Gender VARCHAR(10),
    @City VARCHAR(50),
    @Salary DECIMAL(10,2),
    @Active BIT
AS
BEGIN
    UPDATE MyTable
    SET Name = @Name,
        Age = @Age,
        Email = @Email,
        Gender = @Gender,
        City = @City,
        Salary = @Salary,
        Active = @Active
    WHERE ID = @ID;
END;
go

-- Create stored procedure for deleting data
CREATE PROCEDURE DeleteDataFromMyTable
    @ID INT
AS
BEGIN
    DELETE FROM MyTable
    WHERE ID = @ID;
END;
go