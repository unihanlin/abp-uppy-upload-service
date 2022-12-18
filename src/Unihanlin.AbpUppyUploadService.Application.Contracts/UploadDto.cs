using System.ComponentModel.DataAnnotations;
using Volo.Abp.Content;

namespace Unihanlin.AbpUppyUploadService
{
    public class UploadDto
    {
        public string Text { get; set; }

        [Required]
        public IRemoteStreamContent File { get; set; }
    }
}