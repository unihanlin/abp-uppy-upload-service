using Unihanlin.AbpUppyUploadService.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(AbpUppyUploadServiceEntityFrameworkCoreTestModule)
    )]
public class AbpUppyUploadServiceDomainTestModule : AbpModule
{

}
