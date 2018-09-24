using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ShoKartWebServicesAPI.Models
{
   
        public class ApplicationDbContext : DbContext
        {
            public DbSet<Customer> Customers { get; set; }
            //public DbSet<MembershipType> MembershipTypes { get; set; }
            //public DbSet<Product> Products { get; set; }
            //public DbSet<Order> Orders { get; set; }

            public ApplicationDbContext()
            //: base("name=DefaultConnection")
            {
                //< add name = "DefaultConnection" 
                //connectionString = "Data Source=(LocalDb)\v11.0;Initial Catalog=aspnet-eManager.Web-20140216202751;Integrated Security=SSPI;AttachDBFilename=|DataDirectory|\aspnet-eManager.Web-20140216202751.mdf" 
                //providerName = "System.Data.SqlClient" />

            }
        }
    
}