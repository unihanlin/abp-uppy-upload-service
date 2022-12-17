using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpUppyUploadServiceDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationAbstractionsModule)
    )]
public class AbpUppyUploadServiceApplicationContractsModule : AbpModule
{

}
