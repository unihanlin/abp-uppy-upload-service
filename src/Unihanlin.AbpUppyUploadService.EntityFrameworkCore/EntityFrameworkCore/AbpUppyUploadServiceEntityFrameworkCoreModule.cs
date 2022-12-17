using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService.EntityFrameworkCore;

[DependsOn(
    typeof(AbpUppyUploadServiceDomainModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class AbpUppyUploadServiceEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<AbpUppyUploadServiceDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
        });
    }
}
