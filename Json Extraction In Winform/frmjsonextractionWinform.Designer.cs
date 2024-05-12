namespace WindowsFormsDemo
{
    partial class frmjsonextractionWinform
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmjsonextractionWinform));
            this.tblmain = new System.Windows.Forms.TableLayoutPanel();
            this.lblheading = new System.Windows.Forms.Label();
            this.lblerror = new System.Windows.Forms.Label();
            this.btngetdata = new System.Windows.Forms.Button();
            this.dgvmain = new System.Windows.Forms.DataGridView();
            this.btnimportdatafromfileusingjson = new System.Windows.Forms.Button();
            this.btnsavedatainfile = new System.Windows.Forms.Button();
            this.ofdgetdatafromfile = new System.Windows.Forms.OpenFileDialog();
            this.sfdsavefilefolder = new System.Windows.Forms.SaveFileDialog();
            this.fbdgetfolderforsavingfile = new System.Windows.Forms.FolderBrowserDialog();
            this.tblmain.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvmain)).BeginInit();
            this.SuspendLayout();
            // 
            // tblmain
            // 
            this.tblmain.ColumnCount = 4;
            this.tblmain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 300F));
            this.tblmain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 300F));
            this.tblmain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 300F));
            this.tblmain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tblmain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblmain.Controls.Add(this.lblheading, 0, 0);
            this.tblmain.Controls.Add(this.lblerror, 0, 3);
            this.tblmain.Controls.Add(this.btngetdata, 0, 1);
            this.tblmain.Controls.Add(this.dgvmain, 0, 2);
            this.tblmain.Controls.Add(this.btnimportdatafromfileusingjson, 1, 1);
            this.tblmain.Controls.Add(this.btnsavedatainfile, 2, 1);
            this.tblmain.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tblmain.Location = new System.Drawing.Point(0, 0);
            this.tblmain.Margin = new System.Windows.Forms.Padding(0);
            this.tblmain.Name = "tblmain";
            this.tblmain.RowCount = 5;
            this.tblmain.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
            this.tblmain.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
            this.tblmain.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 400F));
            this.tblmain.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
            this.tblmain.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tblmain.Size = new System.Drawing.Size(905, 501);
            this.tblmain.TabIndex = 0;
            // 
            // lblheading
            // 
            this.lblheading.AutoSize = true;
            this.lblheading.BackColor = System.Drawing.Color.LightGray;
            this.tblmain.SetColumnSpan(this.lblheading, 3);
            this.lblheading.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblheading.Font = new System.Drawing.Font("Calibri", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblheading.Location = new System.Drawing.Point(0, 0);
            this.lblheading.Margin = new System.Windows.Forms.Padding(0);
            this.lblheading.Name = "lblheading";
            this.lblheading.Size = new System.Drawing.Size(900, 32);
            this.lblheading.TabIndex = 0;
            this.lblheading.Text = "JSON EXAPMLE AND DATA REPRESENTATION";
            this.lblheading.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // lblerror
            // 
            this.lblerror.AutoSize = true;
            this.tblmain.SetColumnSpan(this.lblerror, 3);
            this.lblerror.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblerror.Location = new System.Drawing.Point(0, 464);
            this.lblerror.Margin = new System.Windows.Forms.Padding(0);
            this.lblerror.Name = "lblerror";
            this.lblerror.Size = new System.Drawing.Size(900, 32);
            this.lblerror.TabIndex = 1;
            this.lblerror.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btngetdata
            // 
            this.btngetdata.BackColor = System.Drawing.SystemColors.ButtonFace;
            this.btngetdata.Dock = System.Windows.Forms.DockStyle.Left;
            this.btngetdata.Location = new System.Drawing.Point(0, 32);
            this.btngetdata.Margin = new System.Windows.Forms.Padding(0);
            this.btngetdata.Name = "btngetdata";
            this.btngetdata.Size = new System.Drawing.Size(300, 32);
            this.btngetdata.TabIndex = 2;
            this.btngetdata.Text = "Display Data In The Grid\r\n";
            this.btngetdata.UseVisualStyleBackColor = false;
            this.btngetdata.Click += new System.EventHandler(this.btngetdataforjson_Click);
            // 
            // dgvmain
            // 
            this.dgvmain.AllowUserToDeleteRows = false;
            this.dgvmain.AllowUserToOrderColumns = true;
            this.dgvmain.AllowUserToResizeColumns = false;
            this.dgvmain.AllowUserToResizeRows = false;
            this.dgvmain.BackgroundColor = System.Drawing.SystemColors.Control;
            this.dgvmain.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.tblmain.SetColumnSpan(this.dgvmain, 3);
            this.dgvmain.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dgvmain.Location = new System.Drawing.Point(0, 64);
            this.dgvmain.Margin = new System.Windows.Forms.Padding(0);
            this.dgvmain.Name = "dgvmain";
            this.dgvmain.Size = new System.Drawing.Size(900, 400);
            this.dgvmain.TabIndex = 3;
            // 
            // btnimportdatafromfileusingjson
            // 
            this.btnimportdatafromfileusingjson.BackColor = System.Drawing.SystemColors.ButtonFace;
            this.btnimportdatafromfileusingjson.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnimportdatafromfileusingjson.Enabled = false;
            this.btnimportdatafromfileusingjson.Location = new System.Drawing.Point(300, 32);
            this.btnimportdatafromfileusingjson.Margin = new System.Windows.Forms.Padding(0);
            this.btnimportdatafromfileusingjson.Name = "btnimportdatafromfileusingjson";
            this.btnimportdatafromfileusingjson.Size = new System.Drawing.Size(300, 32);
            this.btnimportdatafromfileusingjson.TabIndex = 4;
            this.btnimportdatafromfileusingjson.Text = "Import Data From File Using Json";
            this.btnimportdatafromfileusingjson.UseVisualStyleBackColor = false;
            this.btnimportdatafromfileusingjson.Click += new System.EventHandler(this.btnimportdatafromfile_Click);
            // 
            // btnsavedatainfile
            // 
            this.btnsavedatainfile.BackColor = System.Drawing.SystemColors.ButtonFace;
            this.btnsavedatainfile.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnsavedatainfile.Location = new System.Drawing.Point(600, 32);
            this.btnsavedatainfile.Margin = new System.Windows.Forms.Padding(0);
            this.btnsavedatainfile.Name = "btnsavedatainfile";
            this.btnsavedatainfile.Size = new System.Drawing.Size(300, 32);
            this.btnsavedatainfile.TabIndex = 5;
            this.btnsavedatainfile.Text = "Save Data In File";
            this.btnsavedatainfile.UseVisualStyleBackColor = false;
            this.btnsavedatainfile.Click += new System.EventHandler(this.btnsavedatainfile_Click);
            // 
            // frmjsonextractionWinform
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(905, 501);
            this.Controls.Add(this.tblmain);
            this.Font = new System.Drawing.Font("Calibri", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "frmjsonextractionWinform";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Json Extraction";
            this.tblmain.ResumeLayout(false);
            this.tblmain.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvmain)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tblmain;
        private System.Windows.Forms.Label lblheading;
        private System.Windows.Forms.Label lblerror;
        private System.Windows.Forms.Button btngetdata;
        private System.Windows.Forms.DataGridView dgvmain;
        private System.Windows.Forms.Button btnimportdatafromfileusingjson;
        private System.Windows.Forms.Button btnsavedatainfile;
        private System.Windows.Forms.OpenFileDialog ofdgetdatafromfile;
        private System.Windows.Forms.SaveFileDialog sfdsavefilefolder;
        private System.Windows.Forms.FolderBrowserDialog fbdgetfolderforsavingfile;
    }
}

