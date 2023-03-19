namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_Order_Mig : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        OrderID = c.Int(nullable: false, identity: true),
                        OrderDate = c.DateTime(nullable: false),
                        OrderRequiredDate = c.DateTime(nullable: false),
                        OrderShippedDate = c.DateTime(nullable: false),
                        OrderIsDelivered = c.Boolean(nullable: false),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.OrderID)
                .ForeignKey("dbo.Users", t => t.UserID, cascadeDelete: true)
                .Index(t => t.UserID);
            
            AddColumn("dbo.Users", "User_UserID", c => c.Int());
            CreateIndex("dbo.Users", "User_UserID");
            AddForeignKey("dbo.Users", "User_UserID", "dbo.Users", "UserID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "UserID", "dbo.Users");
            DropForeignKey("dbo.Users", "User_UserID", "dbo.Users");
            DropIndex("dbo.Users", new[] { "User_UserID" });
            DropIndex("dbo.Orders", new[] { "UserID" });
            DropColumn("dbo.Users", "User_UserID");
            DropTable("dbo.Orders");
        }
    }
}
