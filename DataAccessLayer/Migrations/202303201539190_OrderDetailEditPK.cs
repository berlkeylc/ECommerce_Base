namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class OrderDetailEditPK : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.OrderDetails");
            AddColumn("dbo.OrderDetails", "OrderDetailID", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.OrderDetails", "OrderDetailID");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.OrderDetails");
            DropColumn("dbo.OrderDetails", "OrderDetailID");
            AddPrimaryKey("dbo.OrderDetails", new[] { "OrderID", "ProductID" });
        }
    }
}
