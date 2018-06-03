namespace VotingSystem.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using VotingSystem.Data.Entity;
    using VotingSystem.Data.Repositories;
    using VotingSystem.Web.Common;

    [Route("api")]
    public class VoteController : Controller
    {
        private IVoteRepository _repository;
        private readonly ILogger _logger;


        public VoteController(IVoteRepository repository, ILogger<PersonaController> logger)
        {
            _repository = repository;
            _logger = logger;
        }


        [Route("[controller]")]
        [HttpPost]
        public IActionResult Create([FromBody]Vote vote)
        {
            if (vote == null || string.IsNullOrEmpty(vote.contestantid)) { return BadRequest("Invalid Vote"); }

            try
            {
                return Ok(_repository.Create(vote));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError, ErrorMessages.InternalServerError);
            }
        }

        [Route("[controller]")]
        [HttpPost]
        public IActionResult Create([FromBody]VoteAudit voteaudit)
        {
            if (voteaudit == null || string.IsNullOrEmpty(voteaudit.aadharnumber)) { return BadRequest("Invalid Voter"); }

            try
            {
                return Ok(_repository.Create(voteaudit));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError, ErrorMessages.InternalServerError);
            }
        }

  
    }
}