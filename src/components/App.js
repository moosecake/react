import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
class App extends Component {
    constructor(){
      super();
      this.state = {
        posts :[]
       }
       this.removePhoto=this.removePhoto.bind(this);
       this.addPhoto=this.addPhoto.bind(this);
      }
  

  componentDidMount(){
    const data=[
      
      {id:Number(new Date()), src:'One',desc:'First photo'},
      {id:Number(new Date()), src:'Two',desc:'Second photo'},                   
      {id:Number(new Date()), src:'Three',desc:'Third photo'},
      {id:Number(new Date()), src:'Four',desc:'Fourth photo'},
      {id:Number(new Date()), src:'Five',desc:'Fifth photo'},
      {id:Number(new Date()), src:'Six',desc:'Sixth photo'},
      {id:Number(new Date()), src:'Seven',desc:'Seventh photo'},
      {id:Number(new Date()), src:'Eight',desc:'Eighth photo'},
      {id:Number(new Date()), src:'Nine',desc:'Ninth photo'},
      {id:Number(new Date()), src:'Ten',desc:'Tenth photo'}
  ]
  this.setState({posts:data})
  }
  

  addPhoto=(post)=>{
    console.log('add photo for ',post);
    this.setState({posts:this.state.posts.concat([post])});
  }

  removePhoto=(removedPost) =>{
    //const newPost=this.state.posts.filter( item => item!==post  )
    console.log(`remove ${removedPost}`);
    this.setState(  (state) =>({
        posts: state.posts.filter( post => post !==removedPost  )
    }))
   // this.setState({posts:newPost});
  }

  render() {
    

    return (
      <div className="App">

       <Title title={'Photowall'}/>
      <Route exact path="/"  render={
        ()=>(<Photowall posts={this.state.posts}  onRemovePhoto={this.removePhoto}/>)
      }/>
       
      <Route exact path="/AddPhoto" render={ ({history})=><AddPhoto addPhoto={ (addedPost)=>{
        this.addPhoto(addedPost);
        history.push("/");  
      }}
         />}/>
      
      </div>
    );
  }

}

export default App;
