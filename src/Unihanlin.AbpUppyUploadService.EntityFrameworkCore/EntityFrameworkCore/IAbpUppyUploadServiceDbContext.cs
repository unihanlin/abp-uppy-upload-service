using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace Unihanlin.AbpUppyUploadService.EntityFrameworkCore;

[ConnectionStringName(AbpUppyUploadServiceDbProperties.ConnectionStringName)]
public interface IAbpUppyUploadServiceDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
