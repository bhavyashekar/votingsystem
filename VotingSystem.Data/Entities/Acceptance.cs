namespace ProductManagement.Data.Entity
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Acceptance
    {
        public Acceptance()
        { }
        [Key]
        [Range(0, int.MaxValue, ErrorMessage = "Invalid Acceptance id")]        
        public int Id { get; set; }
        public string GivenCondition { get; set; }
        public string WhenDone { get; set; }
        public string ThenExpects { get; set; }

        public int StoryId { get; set; }

        public virtual Story Story { get; set; }

    }
}
