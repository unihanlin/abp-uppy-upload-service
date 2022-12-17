using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace Unihanlin.AbpUppyUploadService.Seed;

public class AbpUppyUploadServiceAuthServerDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly AbpUppyUploadServiceSampleIdentityDataSeeder _abpUppyUploadServiceSampleIdentityDataSeeder;
    private readonly AbpUppyUploadServiceAuthServerDataSeeder _abpUppyUploadServiceAuthServerDataSeeder;
    private readonly ICurrentTenant _currentTenant;

    public AbpUppyUploadServiceAuthServerDataSeedContributor(
        AbpUppyUploadServiceAuthServerDataSeeder abpUppyUploadServiceAuthServerDataSeeder,
        AbpUppyUploadServiceSampleIdentityDataSeeder abpUppyUploadServiceSampleIdentityDataSeeder,
        ICurrentTenant currentTenant)
    {
        _abpUppyUploadServiceAuthServerDataSeeder = abpUppyUploadServiceAuthServerDataSeeder;
        _abpUppyUploadServiceSampleIdentityDataSeeder = abpUppyUploadServiceSampleIdentityDataSeeder;
        _currentTenant = currentTenant;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        using (_currentTenant.Change(context?.TenantId))
        {
            await _abpUppyUploadServiceSampleIdentityDataSeeder.SeedAsync(context);
            await _abpUppyUploadServiceAuthServerDataSeeder.SeedAsync(context);
        }
    }
}
