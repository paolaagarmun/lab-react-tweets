import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(objTweet) {
console.log("Here", objTweet);

  return (
    <div className="tweet">
      <ProfileImage image={objTweet.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userData = {objTweet.tweet.user} />
          <Timestamp time = {objTweet.tweet.timestamp} />
          
        </div>

        <Message mesg = {objTweet.tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
