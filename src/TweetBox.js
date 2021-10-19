import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/originals/a3/6f/84/a36f8418f940919690723f515f24d6b4.jpg" />
                    <input placeholder="Whats Happening?" type="text"/>
                </div>
                <input 
                    className="tweetBox__imageInput"    
                    placeholder="Enter Image URL" 
                    type="text"
                />

                
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
