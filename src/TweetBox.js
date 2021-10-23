import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {

        // Stops refresh 
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Bryan Stephen',
            username: 'triforze1',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.pinimg.com/originals/a3/6f/84/a36f8418f940919690723f515f24d6b4.jpg'
        });

        setTweetMessage("");
        setTweetImage("");
    };



    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/originals/a3/6f/84/a36f8418f940919690723f515f24d6b4.jpg" />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="Whats Happening?" 
                        type="text"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)} 
                    className="tweetBox__imageInput"    
                    placeholder="Enter Image URL" 
                    type="text"
                />

                
                <Button 
                    onClick={sendTweet} 
                    type="sumbit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
