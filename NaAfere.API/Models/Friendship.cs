using System;

namespace NaAfere.API.Models
{
    public class Friendship
    {
        public enum FriendshipStatus
        {
            Accepted,
            Rejected,
            Pending
        }
        
        public int Id { get; set; }
        public DateTime Since { get; set; }
        public int ActionUserId { get; set; }
        public FriendshipStatus Status { get; set; }
        public int FriendId { get; set; }
        public User Friend { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}