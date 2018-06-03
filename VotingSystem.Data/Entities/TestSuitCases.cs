namespace ProductManagement.Data.Entity
{
    using System.ComponentModel.DataAnnotations;

    public partial class TestSuiteCases
    {

        public TestSuiteCases()
        { }
        [Key]
        public int caseId { get; set; }
        [Key]
        public int suiteId { get; set; }        
        
        public virtual TestSuite TestSuite { get; set; }
        
        public virtual TestCase TestCase { get; set; }

    }
}
