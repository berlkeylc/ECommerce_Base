namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        UserEmail = c.String(maxLength: 50),
                        UserName = c.String(maxLength: 15),
                        UserFirstName = c.String(maxLength: 15),
                        UserLastName = c.String(maxLength: 15),
                        UserPassword = c.String(maxLength: 15),
                        UserAdress = c.String(maxLength: 50),
                        UserPostalCode = c.String(maxLength: 5),
                        UserCity = c.String(maxLength: 25),
                        UserCountry = c.String(maxLength: 25),
                        UserGender = c.String(maxLength: 10),
                        UserPhone = c.String(maxLength: 11),
                    })
                .PrimaryKey(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
