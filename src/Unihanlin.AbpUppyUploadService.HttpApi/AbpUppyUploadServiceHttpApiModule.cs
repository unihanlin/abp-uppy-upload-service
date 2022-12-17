using Localization.Resources.AbpUi;
using Unihanlin.AbpUppyUploadService.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpUppyUploadServiceApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class AbpUppyUploadServiceHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpUppyUploadServiceHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<AbpUppyUploadServiceResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
