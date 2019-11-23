using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NaAfere.API.Dtos;
using NaAfere.API.Helpers;
using NaAfere.API.Logger;
using NaAfere.API.Models;
using NaAfere.API.Repositories;

namespace NaAfere.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/users/{userId}/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly IRepositoryWrapper _repo;
        private readonly IMapper _mapper;
        private readonly ILoggerManager _logger;

        public MessagesController(IRepositoryWrapper repo, IMapper mapper, ILoggerManager logger)
        {
            _logger = logger;
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var messageFromRepo = await _repo.Message.GetMessage(id);

            if (messageFromRepo == null)
            {
                _logger.LogError($"Message with id: {id}, hasn't been found in db");
                return NotFound();
            }

             _logger.LogInfo($"Returned message with id: {id}");
            return Ok(messageFromRepo);
        }

        [HttpGet]
        public async Task<IActionResult> GetMessagesForUser(int userId,
            [FromQuery]MessageParams messageParams) 
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            messageParams.UserId = userId;
            
            var messagesFromRepo = await _repo.Message.GetMessagesForUser(messageParams);

            var messages = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);

            Response.AddPagination(messagesFromRepo.CurrentPage, messagesFromRepo.PageSize,
                messagesFromRepo.TotalCount, messagesFromRepo.TotalPages);

            return Ok(messages);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, MessageForCreationDto messageForCreationDto) 
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            messageForCreationDto.SenderId = userId;

            var recipient = await _repo.User.GetUserById(messageForCreationDto.RecipientId);

            if (recipient == null) {
                _logger.LogError($"User with id: {messageForCreationDto.RecipientId}, hasn't been found in db");
                return BadRequest("Could not find the user");
            }

            var message = _mapper.Map<Message>(messageForCreationDto);

            _repo.Message.Create(message);

            var messageToReturn = _mapper.Map<MessageForCreationDto>(message);

            if (await _repo.SaveAll()) {
                _logger.LogInfo($"Created Message");
                return CreatedAtRoute("GetMessage", new {id = message.Id}, messageToReturn);
            }

            _logger.LogError($"Creating message with id: {message.Id} failed");
            throw new Exception("Creating the message failed on save");

        }

        [HttpGet("thread/{recipientId}")]
        public async Task<IActionResult> GetMessageThread(int userId, int recipientId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            
            var messageFromRepo = await _repo.Message.GetMessageThread(userId, recipientId);

            var messageThread = _mapper.Map<IEnumerable<MessageToReturnDto>>(messageFromRepo);

            return Ok(messageThread);
        }
    }
}