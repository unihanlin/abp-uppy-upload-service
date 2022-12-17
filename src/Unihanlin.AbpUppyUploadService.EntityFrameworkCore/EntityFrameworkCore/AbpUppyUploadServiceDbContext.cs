using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace Unihanlin.AbpUppyUploadService.EntityFrameworkCore;

[ConnectionStringName(AbpUppyUploadServiceDbProperties.ConnectionStringName)]
public class AbpUppyUploadServiceDbContext : AbpDbContext<AbpUppyUploadServiceDbContext>, IAbpUppyUploadServiceDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public AbpUppyUploadServiceDbContext(DbContextOptions<AbpUppyUploadServiceDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureAbpUppyUploadService();
    }
}
