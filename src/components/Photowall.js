import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

function Photowall(props) {
    return <div>
           <Link className="add-button" to="/AddPhoto"> Add Photo </Link>
           <div className="photogrid">
               {props.posts.sort(function(x,y){return y.id - x.id}).map( (post,index) => <Photo post={post}  key={index} 
               onRemovePhoto={props.onRemovePhoto}/> )}
           </div>
           </div>
}
export default Photowall