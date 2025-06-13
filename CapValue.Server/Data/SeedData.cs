using CapValue.Server.Models;
using Microsoft.Extensions.Options;

namespace CapValue.Server.Data
{
    public static class SeedData
    {
        public static void Initialize(ApplicationDbContext context, IOptions<List<User>> userOptions)
        {
            if (!context.Users.Any())
            {
                context.Users.AddRange(userOptions.Value);
                context.SaveChanges();
            }
        }
    }
}
