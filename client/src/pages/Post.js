import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function Post() {
    let {id} = useParams();
    const [postObject,setPostObject] = useState({});
    const [comments,setComments] = useState([]);
    const [newComments,setNewComments] =useState("");
    
    useEffect(()=>{ 
      axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
      axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
     });
     },[]);

     const addComment = () =>{
      axios.post("http://localhost:3001/comments",{commentBody:newComments ,PostId: id}).then((response) => {
      const commentToAdd = {commentBody:newComments};
      setComments([...comments,commentToAdd]);
      setNewComments("");      
      });
    }

  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className="post" id='individual'>
        <div className="title">{postObject.title}</div>
        <div className="body">{postObject.postText}</div>
        <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type = "text" placeholder='Comment....' value={newComments} onChange={(event)=>{setNewComments(event.target.value);}}/>
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment,key) => {
            return(
            <div className="comment" key={key}>
              {comment.commentBody}
            </div>
            );
          }) }
        </div>
      </div>      
    </div>
  )
}

export default Post;
