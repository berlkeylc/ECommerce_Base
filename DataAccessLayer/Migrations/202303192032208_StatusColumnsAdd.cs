namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class StatusColumnsAdd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.OrderDetails", "OrderDetailStatus", c => c.Boolean(nullable: false));
            AddColumn("dbo.Orders", "OrderStatus", c => c.Boolean(nullable: false));
            AddColumn("dbo.Users", "UserStatus", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "UserStatus");
            DropColumn("dbo.Orders", "OrderStatus");
            DropColumn("dbo.OrderDetails", "OrderDetailStatus");
        }
    }
}
