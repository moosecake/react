import React from 'react';

function AddPhoto(props){
    function addPost(evt){
        console.log('hello');
        if(evt.target.elements.namedItem("imageLink").value && evt.target.elements.namedItem("ImageDesc").value)
   {props.addPhoto({
             id:Number(new Date()), 
             src: evt.target.elements.namedItem("imageLink").value,
             desc:evt.target.elements.namedItem("ImageDesc").value
            });
        }
        evt.preventDefault();
    }
    return <div className="addPhoto">
     <form onSubmit={(evt) => addPost(evt)}>
     <input type="text" name="imageLink" placeholder="Source" required/><br/>
     <input type="text" name="ImageDesc" placeholder="Description" required/><br/>
     <button  name="SubmitBtn">Post</button>
     </form>

    </div>
}
export default AddPhoto