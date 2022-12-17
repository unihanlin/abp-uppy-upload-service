using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpUppyUploadServiceDomainModule),
    typeof(AbpUppyUploadServiceApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule)
    )]
public class AbpUppyUploadServiceApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<AbpUppyUploadServiceApplicationModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<AbpUppyUploadServiceApplicationModule>(validate: true);
        });
    }
}
