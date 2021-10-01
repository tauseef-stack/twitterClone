import React, { useState, useEffect } from 'react';
import { Avatar, Button } from '@material-ui/core';
import axios from 'axios';
import './TweetBox.css';
export const TweetBox = ({getData}) => {

    const [postTweet, setPostTweet] = useState({});
    
    const handleChange = (e) => {
        const { value, name } = e.target;
        const data = {
            [name]: value,
            avatar:"https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Harry-Potter-2.jpg",
            displayName:"Tauseef Ansari",
            userName: "cleverTauseef",
            verified:true
        }
        setPostTweet({ ...postTweet, ...data });
    }

    const handlePost = (e) => {
        e.preventDefault();
        console.log(postTweet);
    axios.post('http://localhost:8000/post',postTweet).then((res) => {
        if (res.status === 201) {
            console.log('your post request is successfull')
            getData();
        }
       // console.log(res.data);
      }).catch((err) => {
          console.log(err)
        })
    }
   

    
    return (
        <div className="TweetBox">
            <form>
                <div className="TweetBox_Input">
                    <Avatar src="https://i.pinimg.com/236x/51/b6/90/51b6908a55dce145f45eaafac221930d--harry-potter-art-love-it.jpg?nii=t"></Avatar>
                    <input placeholder="What's happening" type="text" name="text" onChange={handleChange}></input>
                </div>
                <input placeholder="Enter image url" type="text" name="image" onChange={handleChange}></input>
                <Button className='TweetBox_Button' onClick={handlePost}>
                    Tweet
                </Button> 
           </form>
        </div>
    )
}
