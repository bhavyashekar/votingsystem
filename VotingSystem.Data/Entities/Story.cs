namespace ProductManagement.Data.Entity
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Story
    {
        public Story()
        { }

        [Key]
        public int Id { get; set; }
        public int ParentId { get; set; }
        public int PersonaId { get; set; }
        public string Wants { get; set; }
        public string SoThat { get; set; }        
        public string Description { get; set; }
        public string State { get; set; }
        public int? Reference { get; set; }

    }
}
