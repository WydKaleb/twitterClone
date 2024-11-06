// Tweet.js
import React, { useState } from 'react';

type Tweet = {id: number, username: string, content: string, likes: number, timestamp: string};

function Tweet({id, username, content, likes, timestamp}: Tweet) {
    
    const [likeCount, updateCount] = useState(likes);
    const [isLiked, updateState] = useState(false);

    function handleLike() {
        if (!isLiked) {
            updateCount(likeCount + 1);
            updateState(!isLiked);
        } else {
            updateCount(likeCount - 1);
            updateState(!isLiked);
        }
    }
    
    return (
        <div className='tweet'>
            <h3>@{username}</h3>
            <p>{content}</p>
            <p>{timestamp}</p>
            <div className='button'>
                <button onClick={handleLike}>{isLiked ? '❤️' : '🤍'} {likeCount} Likes</button>
            </div>
        </div>
    )


    


}
/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/


export default Tweet;
