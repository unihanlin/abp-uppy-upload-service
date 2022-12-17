using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpUppyUploadServiceApplicationModule),
    typeof(AbpUppyUploadServiceDomainTestModule)
    )]
public class AbpUppyUploadServiceApplicationTestModule : AbpModule
{

}
