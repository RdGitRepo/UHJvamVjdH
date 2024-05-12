USE [SUPPORT_DATA]
GO

/****** Object:  StoredProcedure [dbo].[GET_NEXT]    Script Date: 18-11-2023 20:22:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GET_NEXT]
@TABLE_NAME NVARCHAR(100),
@TABLE_COLUMN NVARCHAR(100),
@COLUMN_VALUE NVARCHAR(100)
AS
BEGIN
	DECLARE @EXE AS NVARCHAR(MAX)
	SET @EXE = 'SELECT * FROM ' + @TABLE_NAME + ' WHERE ' + @TABLE_COLUMN + ' > ' + @COLUMN_VALUE + ' AND ' + @TABLE_COLUMN + ' <= ( SELECT MIN(' + @TABLE_COLUMN + ') FROM ' + @TABLE_NAME + ' WHERE ' + @TABLE_COLUMN + ' > ' + @COLUMN_VALUE + ' )'
	EXECUTE SP_EXECUTESQL @EXE
END
GO


