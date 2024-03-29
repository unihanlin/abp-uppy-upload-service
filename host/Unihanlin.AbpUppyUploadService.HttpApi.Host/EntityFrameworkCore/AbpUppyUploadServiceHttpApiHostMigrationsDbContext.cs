﻿using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;

namespace Unihanlin.AbpUppyUploadService.EntityFrameworkCore;

public class AbpUppyUploadServiceHttpApiHostMigrationsDbContext : AbpDbContext<AbpUppyUploadServiceHttpApiHostMigrationsDbContext>
{
    public AbpUppyUploadServiceHttpApiHostMigrationsDbContext(DbContextOptions<AbpUppyUploadServiceHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureAbpUppyUploadService();
        modelBuilder.ConfigureAuditLogging();
        modelBuilder.ConfigurePermissionManagement();
        modelBuilder.ConfigureSettingManagement();
    }
}
