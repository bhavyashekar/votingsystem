namespace ProductManagement.Data.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using ProductManagement.Data.Entity;

    public class Product
    {
        public int Id { get; set; }
        public int Parent { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte Grade { get; set; }
        public int? Reference { get; set; }
        public bool IsActive { get; set; }
        
        //[ForeignKey("Parent")]
        //public virtual Product ProductHierarchy { get; set; }

        public virtual ICollection<TestSuite> TestSuite { get; set; }
    }
}
