using Microsoft.Extensions.Logging;
using ProductManagement.Data.Entities;
using ProductManagement.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace VotingSystem.Repositories
{
    public class VotingSystem:IVoteRepository
    {

        private readonly DataBaseContext _dbcontext;
        private readonly ILogger _logger;
        public VoteRepository(DataBaseContext dbContext, ILogger<VoteRepository> logger)
        {
            _dbcontext = dbContext;
            _logger = logger;
        }
        public bool Create(Vote vote)
        {

            bool success = false;
            try
            {
                _dbcontext.Vote.Add(vote);
                _dbcontext.SaveChanges();
                success = true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                success = false;
            }

            return success;
        }
    }
}
