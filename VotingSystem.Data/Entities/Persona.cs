namespace ProductManagement.Data.Entity
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Persona
    {
        public Persona()
        { }
        [Key]
        [Range(0, int.MaxValue, ErrorMessage = "Invalid Persona id")]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string PrimaryRole { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

    }
}