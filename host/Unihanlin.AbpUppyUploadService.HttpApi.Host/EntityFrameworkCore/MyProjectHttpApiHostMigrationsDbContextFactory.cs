using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Unihanlin.AbpUppyUploadService.EntityFrameworkCore;

public class AbpUppyUploadServiceHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<AbpUppyUploadServiceHttpApiHostMigrationsDbContext>
{
    public AbpUppyUploadServiceHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<AbpUppyUploadServiceHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("AbpUppyUploadService"));

        return new AbpUppyUploadServiceHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
