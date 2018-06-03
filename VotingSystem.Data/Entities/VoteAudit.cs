using System;

namespace ProductManagement.Data.Entities
{
    public class VoteAudit
    {
        public int AadhaarNumber { get; set; }
        public int ElectionId { get; set; }
        public DateTime VotedTime{get;set;}

    }
}