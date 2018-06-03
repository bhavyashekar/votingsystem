using ProductManagement.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VotingSytem.Repositories
{
   public interface IVoteRepository
    {
        bool Create(Vote vote);
    }
}
