namespace ProductManagement.Data.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class BuildDefinition
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public string Name { get; set; }

        public string Reference { get; set; }

        public int? TestSuiteId { get; set; }

        public virtual TestSuite TestSuite { get; set; }

    }
}
