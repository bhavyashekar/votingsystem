namespace ProductManagement.Data.Entity
{
    using System.ComponentModel.DataAnnotations;
    public partial class FailedTest
    {
        [Key]
        public int BuildID { get; set; }
        [Key]
        public string Test { get; set; }
        public string Reason { get; set; }
    }
}