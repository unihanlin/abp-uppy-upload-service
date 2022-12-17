using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Unihanlin.AbpUppyUploadService;

[DependsOn(
    typeof(AbpUppyUploadServiceApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class AbpUppyUploadServiceHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(AbpUppyUploadServiceApplicationContractsModule).Assembly,
            AbpUppyUploadServiceRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AbpUppyUploadServiceHttpApiClientModule>();
        });
    }
}
