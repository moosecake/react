import React from 'react';

function AddPhoto(props){
    function addPost(evt){
        props.addPhoto({
             id:Number(new Date()), 
             src: evt.target.elements.namedItem("imageLink").value,
             desc:evt.target.elements.namedItem("ImageDesc").value
            });
        evt.stopPropagation();
    }
    return <div className="addPhoto">
     <form onSubmit={(evt) => addPost(evt)}>
     <input type="text" name="imageLink" placeholder="Source"/><br/>
     <input type="text" name="ImageDesc" placeholder="Description"/><br/>
     <button type="submit" name="SubmitBtn">Post</button>
     </form>

    </div>
}
export default AddPhoto