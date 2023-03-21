namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductAddImage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "ProductImage", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "ProductImage");
        }
    }
}
