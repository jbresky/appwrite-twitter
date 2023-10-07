'use client'

import { Models } from "appwrite";
import { useState } from "react";
import CreateTweetForm from "./CreateTweetForm";
import Tweet from "./Tweet";

interface FeedProps {
    tweets: any
}

const Feed: React.FC<FeedProps> = ({ tweets: tweetsProp }) => {
    const [tweets, setTweets] = useState(tweetsProp);

    const onTweetCreated = (newTweet: any) => {
      setTweets((currTweets: any) => [newTweet, ...currTweets]);
      console.log(newTweet);
      
    }
    
    const onTweetRemoved = (tweetToRemove: string) => {
      setTweets((currTweets: any) => // try Models.Document
      currTweets.filter((tweet: any) => tweet.$id !== tweetToRemove)
      )
    }
    
    const tweetsSortedByCreatedDate = tweets.sort((a: any, b: any) => {
        return Number(new Date(b.$createdAt)) - Number(new Date(b.$createdAt));
    })
    
    return ( 
        <div className="w-1/2 border border-gray-600 h-auto  border-t-0">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl font-medium rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
  
        <hr className="border-gray-600" />
  
        <CreateTweetForm onTweetCreated={onTweetCreated} />
  
        <hr className="border-gray-800 border-2" />
  
        <div></div>
  
        {tweetsSortedByCreatedDate?.map((tweet: any) => (
          <Tweet
            // onLikeTweetCallback={onLikeTweetCallback}
            onTweetRemoved={onTweetRemoved}
            key={tweet.$id}
            tweet={tweet}
          />
        ))}
  
        <hr className="border-gray-600" />
      </div>
     );
}
 
export default Feed;