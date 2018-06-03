using System;

namespace ProductManagement.Data.Entity
{
    public class Build
    {
        public Build()
        { }
        public int Id { get; set; }
        public int BuildId { get; set; }                
        public bool? IsGreen { get; set; }
        /// <summary>
        /// This(Reference) column should be renamed and should be a foreign key to Failed Test table as per discussion with Bhavya
        /// </summary>
        public int? Reference { get; set; }
        public string FinishDate { get; set; }
        //public string state { get; set; }
        public string Status { get; set; }
    }
}
