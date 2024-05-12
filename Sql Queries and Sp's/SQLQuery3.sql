USE [SUPPORT_DATA]
GO

/****** Object:  StoredProcedure [dbo].[GET_FIRST]    Script Date: 18-11-2023 20:21:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GET_FIRST]
@TABLE_NAME NVARCHAR(100),
@TABLE_COLUMN NVARCHAR(100)
AS
BEGIN
	DECLARE @EXE AS NVARCHAR(MAX)
	SET @EXE = 'SELECT TOP 1 * FROM ' + @TABLE_NAME + ' ORDER BY ' + @TABLE_COLUMN + ' ASC'
	EXECUTE SP_EXECUTESQL @EXE
END
GO

