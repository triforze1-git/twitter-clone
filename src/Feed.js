import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home Page</h2>
            </div>
            
            {/* Tweet Box */}
            <TweetBox />

            {/* Post */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;
