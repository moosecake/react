import React from 'react';

function Photo(props){
    const post=props.post;
    return <div className="photo">
              <span>{props.post.desc}</span>
              <button onClick= {  () => props.onRemovePhoto(post)}>Remove</button>
           </div>
}

export default Photo