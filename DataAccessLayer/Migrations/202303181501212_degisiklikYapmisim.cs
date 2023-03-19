namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class degisiklikYapmisim : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "OrderFreight", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Orders", "OrderFreight");
        }
    }
}
