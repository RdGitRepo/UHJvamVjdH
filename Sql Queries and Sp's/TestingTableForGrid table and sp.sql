-- Create table
CREATE TABLE TestingTableForGrid (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(100),
    LastName NVARCHAR(100),
    Email NVARCHAR(100),
    Phone NVARCHAR(100),
    Address NVARCHAR(100),
    City NVARCHAR(100),
    State NVARCHAR(100),
    Country NVARCHAR(100),
    Age INT,
    Gender NVARCHAR(10),
    Occupation NVARCHAR(100),
    Status NVARCHAR(20)
);

-- Insert testing data
INSERT INTO TestingTableForGrid (FirstName, LastName, Email, Phone, Address, City, State, Country, Age, Gender, Occupation, Status)
VALUES
    ('John', 'Doe', 'john@example.com', '123-456-7890', '123 Main St', 'Anytown', 'CA', 'USA', 30, 'Male', 'Software Engineer', 'Active'),
    ('Alice', 'Smith', 'alice@example.com', '987-654-3210', '456 Oak St', 'Othercity', 'NY', 'USA', 25, 'Female', 'Teacher', 'Inactive'),
    ('Bob', 'Johnson', 'bob@example.com', '456-789-0123', '789 Elm St', 'Sometown', 'TX', 'USA', 40, 'Male', 'Doctor', 'Active'),
    ('Emily', 'Brown', 'emily@example.com', '321-654-0987', '321 Pine St', 'Anothercity', 'FL', 'USA', 35, 'Female', 'Engineer', 'Inactive'),
    ('Michael', 'Williams', 'michael@example.com', '111-222-3333', '555 Cedar St', 'Newtown', 'WA', 'USA', 45, 'Male', 'Manager', 'Active'),
    ('Emma', 'Taylor', 'emma@example.com', '333-444-5555', '444 Birch St', 'Someplace', 'CA', 'USA', 28, 'Female', 'Artist', 'Active'),
    ('William', 'Jones', 'william@example.com', '666-777-8888', '678 Maple St', 'Randomtown', 'OH', 'USA', 50, 'Male', 'Lawyer', 'Inactive'),
    ('Sophia', 'Davis', 'sophia@example.com', '555-666-7777', '777 Walnut St', 'Nowhere', 'MI', 'USA', 32, 'Female', 'Writer', 'Active'),
    ('James', 'Miller', 'james@example.com', '888-999-0000', '890 Oakwood St', 'Anyplace', 'GA', 'USA', 38, 'Male', 'Consultant', 'Inactive'),
    ('Olivia', 'Wilson', 'olivia@example.com', '999-000-1111', '999 Cherry St', 'Othertown', 'NV', 'USA', 29, 'Female', 'Scientist', 'Active'),
    ('Daniel', 'Moore', 'daniel@example.com', '222-333-4444', '234 Poplar St', 'Randomcity', 'IL', 'USA', 42, 'Male', 'Entrepreneur', 'Inactive'),
    ('Ava', 'Taylor', 'ava@example.com', '444-555-6666', '543 Elmwood St', 'Anytown', 'CA', 'USA', 31, 'Female', 'Developer', 'Active'),
    ('Matthew', 'Anderson', 'matthew@example.com', '555-444-3333', '765 Oakwood St', 'Hometown', 'NC', 'USA', 48, 'Male', 'Architect', 'Inactive'),
    ('Isabella', 'Thomas', 'isabella@example.com', '777-888-9999', '876 Pine St', 'Sometown', 'TX', 'USA', 27, 'Female', 'Designer', 'Active'),
    ('David', 'Harris', 'david@example.com', '888-999-0000', '987 Cedar St', 'Randomcity', 'CA', 'USA', 33, 'Male', 'Analyst', 'Inactive');
go



	CREATE PROCEDURE InsertTestingRecord
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100),
    @Email NVARCHAR(100),
    @Phone NVARCHAR(100),
    @Address NVARCHAR(100),
    @City NVARCHAR(100),
    @State NVARCHAR(100),
    @Country NVARCHAR(100),
    @Age INT,
    @Gender NVARCHAR(10),
    @Occupation NVARCHAR(100),
    @Status NVARCHAR(20)
AS
BEGIN
    INSERT INTO TestingTable (FirstName, LastName, Email, Phone, Address, City, State, Country, Age, Gender, Occupation, Status)
    VALUES (@FirstName, @LastName, @Email, @Phone, @Address, @City, @State, @Country, @Age, @Gender, @Occupation, @Status)
END;
go



CREATE PROCEDURE UpdateTestingRecord
    @ID INT,
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100),
    @Email NVARCHAR(100),
    @Phone NVARCHAR(100),
    @Address NVARCHAR(100),
    @City NVARCHAR(100),
    @State NVARCHAR(100),
    @Country NVARCHAR(100),
    @Age INT,
    @Gender NVARCHAR(10),
    @Occupation NVARCHAR(100),
    @Status NVARCHAR(20)
AS
BEGIN
    UPDATE TestingTable
    SET FirstName = @FirstName,
        LastName = @LastName,
        Email = @Email,
        Phone = @Phone,
        Address = @Address,
        City = @City,
        State = @State,
        Country = @Country,
        Age = @Age,
        Gender = @Gender,
        Occupation = @Occupation,
        Status = @Status
    WHERE ID = @ID;
END;
go



CREATE PROCEDURE DeleteTestingRecord
    @ID INT
AS
BEGIN
    DELETE FROM TestingTable WHERE ID = @ID;
END;
go



CREATE PROCEDURE GetMyTableDataByID
    @ID INT
AS
BEGIN
    SELECT ID, Name, Age, Email, Gender, City, Salary, Active
    FROM MyTable
    WHERE ID = @ID;
END;
go


CREATE PROCEDURE GetTestingRecordById
    @ID INT
AS
BEGIN
        SELECT  FirstName,
               LastName,
               Email,
               Phone,
               	Address,
                City,
               State,
               Country,
               	 Age,
                Gender,
               		Occupation,
               Status
        FROM TestingTable
        WHERE ID = @ID

end
go