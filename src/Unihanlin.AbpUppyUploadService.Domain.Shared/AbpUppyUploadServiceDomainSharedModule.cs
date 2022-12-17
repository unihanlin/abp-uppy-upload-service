using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Unihanlin.AbpUppyUploadService.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpValidationModule)
)]
public class AbpUppyUploadServiceDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AbpUppyUploadServiceDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<AbpUppyUploadServiceResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/AbpUppyUploadService");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("AbpUppyUploadService", typeof(AbpUppyUploadServiceResource));
        });
    }
}
