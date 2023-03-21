namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserCollectionUpdate : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Users", "User_UserID", "dbo.Users");
            DropIndex("dbo.Users", new[] { "User_UserID" });
            DropColumn("dbo.Users", "User_UserID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "User_UserID", c => c.Int());
            CreateIndex("dbo.Users", "User_UserID");
            AddForeignKey("dbo.Users", "User_UserID", "dbo.Users", "UserID");
        }
    }
}
