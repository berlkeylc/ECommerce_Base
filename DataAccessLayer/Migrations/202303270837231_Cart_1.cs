namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Cart_1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CartItems",
                c => new
                    {
                        CartItemID = c.Int(nullable: false, identity: true),
                        CartItemQuantity = c.Int(nullable: false),
                        CartID = c.Int(nullable: false),
                        ProductID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.CartItemID)
                .ForeignKey("dbo.Carts", t => t.CartID, cascadeDelete: true)
                .ForeignKey("dbo.Products", t => t.ProductID, cascadeDelete: true)
                .Index(t => t.CartID)
                .Index(t => t.ProductID);
            
            CreateTable(
                "dbo.Carts",
                c => new
                    {
                        CartID = c.Int(nullable: false, identity: true),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.CartID)
                .ForeignKey("dbo.Users", t => t.UserID, cascadeDelete: true)
                .Index(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CartItems", "ProductID", "dbo.Products");
            DropForeignKey("dbo.Carts", "UserID", "dbo.Users");
            DropForeignKey("dbo.CartItems", "CartID", "dbo.Carts");
            DropIndex("dbo.Carts", new[] { "UserID" });
            DropIndex("dbo.CartItems", new[] { "ProductID" });
            DropIndex("dbo.CartItems", new[] { "CartID" });
            DropTable("dbo.Carts");
            DropTable("dbo.CartItems");
        }
    }
}
