import React from 'react';
import './App.css';
class App extends React.Component{
constructor(props){
  super(props)
    this.state={
      person : {
        fullName:"mohamed salem",
        bio:"Serching for new opportunities", 
        imgSrc:<img src='photo.jprg' alt=''/>,
        profession:"it support"
      },
      show:true, 
      count:0
    };
  }
  render() {
    const count=this.state.count
    return(
      <div className='App'>
        {this.state.show ? <div>
          <h1>{this.state.person.fullName}</h1>
          <h1>{this.state.person.bio}</h1>
          <div>
              <img src={this.state.person.imgSrc} alt=''
              style={width=500}></img>

          </div>
            <h1>{this.state.person.profession}</h1>
            <h1>Current Count : {count}</h1>
      </div> :null}
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button> 
      <div/>
   
  componentDidMount() {  this.myInterval = setInterval (()=>{ 
     this.setState(prevState => 
      ({count: prevState.count + 1}))}, 10
}



export default App;