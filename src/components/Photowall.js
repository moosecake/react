import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

function Photowall(props) {
    return <div>
           <Link to="/AddPhoto"> Add Photo </Link>
           <div className="photogrid">
               {props.posts.map( (post,index) => <Photo post={post}  removePhoto={props.removePhoto}/> )}
           </div>
           </div>
}
export default Photowall