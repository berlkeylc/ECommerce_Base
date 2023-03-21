namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class User_Address : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "UserAddress", c => c.String(maxLength: 50));
            DropColumn("dbo.Users", "UserAdress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "UserAdress", c => c.String(maxLength: 50));
            DropColumn("dbo.Users", "UserAddress");
        }
    }
}
