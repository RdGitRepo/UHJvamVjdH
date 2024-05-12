USE [SUPPORT_DATA]
GO

/****** Object:  StoredProcedure [dbo].[INSERT_SUPPORT]    Script Date: 18-11-2023 20:22:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[INSERT_SUPPORT]
@SUPPORT_KEY NVARCHAR(100),
@SUPPORT_ALT_CODE NVARCHAR(100),
@SUPPORT_EXECUTION NVARCHAR(100),
@CLIENT_CATOGORY NVARCHAR(100),
@CLIENT_NAME NVARCHAR(100),
@PERSON_NAME NVARCHAR(100),
@PERSON_DEPARTMENT NVARCHAR(100),
@PHONE_NUMBER NVARCHAR(100),
@QUERY_TYPE NVARCHAR(100),
@QUERY_DESCRIPTION NVARCHAR(100),
@ANYDESK_NUMBER NVARCHAR(100),
@START_TIME NVARCHAR(100),
@END_TIME NVARCHAR(100),
@STATUS NVARCHAR(1),
@CREATED_BY NVARCHAR(1),
@CREATED_DATE NVARCHAR(100) = GETDATE
AS
BEGIN

INSERT INTO 
SUPPORT
(SUPPORT_KEY,
SUPPORT_ALT_CODE,
SUPPORT_EXECUTION,
CLIENT_CATOGORY,
CLIENT_NAME,
PERSON_NAME,
PERSON_DEPARTMENT,
PHONE_NUMBER,
QUERY_TYPE,
QUERY_DESCRIPTION,
ANYDESK_NUMBER,
START_TIME,
END_TIME,
STATUS,
CREATED_BY,
CREATED_DATE
)
VALUES
(@SUPPORT_KEY,
@SUPPORT_ALT_CODE,
@SUPPORT_EXECUTION,
@CLIENT_CATOGORY,
@CLIENT_NAME,
@PERSON_NAME,
@PERSON_DEPARTMENT,
@PHONE_NUMBER,
@QUERY_TYPE,
@QUERY_DESCRIPTION,
@ANYDESK_NUMBER,
@START_TIME,
@END_TIME,
@STATUS,
@CREATED_BY,
GETDATE()
)

END
GO


