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
      }
  

  componentDidMount(){
    const data=[
      {id:1, src:'One',desc:'First photo'},
      {id:1, src:'Two',desc:'Second photo'},                   
      {id:1, src:'Three',desc:'Third photo'},
      {id:1, src:'Four',desc:'Fourth photo'},
      {id:1, src:'Five',desc:'Fifth photo'},
      {id:1, src:'Six',desc:'Sixth photo'},
      {id:1, src:'Four',desc:'Eight photo'},
      {id:1, src:'Five',desc:'Ninth photo'},
      {id:1, src:'Six',desc:'Tenth photo'},
      {id:1, src:'Seven',desc:'Seventh photo'}
  ]
  this.setState({posts:data})
  }

  removePhoto=(post) =>{
    const newPost=this.state.posts.filter( item => item!==post  )
    this.setState({posts:newPost});
  }

  render() {
    

    return (
      <div className="App">

       <Title title={'Photowall'}/>
      <Route exact path="/"  render={
        ()=>(<Photowall posts={this.state.posts}  removePhoto={this.removePhoto}/>)
      }/>
       
      <Route exact path="/AddPhoto" render={ ()=><AddPhoto/>}/>
      
      </div>
    );
  }

}

export default App;
