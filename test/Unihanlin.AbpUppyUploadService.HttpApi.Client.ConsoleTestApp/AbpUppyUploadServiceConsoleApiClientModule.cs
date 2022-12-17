using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpUppyUploadServiceHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class AbpUppyUploadServiceConsoleApiClientModule : AbpModule
{

}
