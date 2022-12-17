using Volo.Abp.Caching;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(AbpCachingModule),
    typeof(AbpUppyUploadServiceDomainSharedModule)
)]
public class AbpUppyUploadServiceDomainModule : AbpModule
{

}
