namespace ProductManagement.Data.Entity
{
    using System.Collections.Generic;

    public partial class TestCase
    {
        public TestCase()
        { }
        public int Id { get; set; }
        public int? Reference { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string MethodName { get; set; }
        public int AcceptanceId { get; set; }
        public bool IsInline { get; set; }

        public virtual Acceptance Acceptance { get; set; }
        public virtual ICollection<TestSuiteCases> TestSuiteCases { get; set; }
    }
}
