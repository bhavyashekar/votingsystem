namespace ProductManagement.Data.Entity
{
    using System.Collections.Generic;
    using ProductManagement.Data.Entities;

    public partial class TestSuite
    {
        public TestSuite()
        { }
        public int Id { get; set; }
        public int ProductId{ get; set; }
        public string Name { get; set; }
        public bool IsSystem { get; set; }        
        public string TestType { get; set; }
        public virtual Product ProductTable { get; set; }
        public virtual ICollection<TestSuiteCases> TestSuiteCases { get; set; }
    }
}
