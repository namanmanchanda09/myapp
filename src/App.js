import React from 'react';
import './App.css';

class App extends React.Component {
    state={
        salutation:'Hola!',
        name:<span>This is <span style={{color:'orange'}}>Naman Manchanda</span>.</span>
    }
    handleSalutationEnter = (event) =>{
        this.setState({salutation:'नमस्कार।'})
    }
    handleSalutationLeave = (event) =>{
        this.setState({salutation:'Hola!'})
    }
    handleTextEnter = (event) =>{
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        this.setState({name: <span style={{color:'#87CEFA'}}>नाम तो सुना ही होगा। 😜</span>})
    }
    handleTextLeave = (event) =>{
        this.setState({name:<span>This is <span style={{color:'orange'}}>Naman Manchanda</span>.</span>})
    }

  render(){
    return (
        <div className="App App-header">
            <h1 onMouseEnter={this.handleSalutationEnter} onMouseLeave={this.handleSalutationLeave}>{this.state.salutation}</h1>
            <h1 onMouseEnter={this.handleTextEnter} onMouseLeave={this.handleTextLeave}>{this.state.name}</h1>

            <div>
                <a href={'https://twitter.com/NamanManchanda2'} target="_blank"><img src="https://img.icons8.com/cotton/64/000000/twitter.png"/></a>
                <a href={'https://www.linkedin.com/in/naman-manchanda-1b0948144/'} target="_blank"><img src="https://img.icons8.com/dusk/64/000000/linkedin.png"/></a>
                <a href={'https://www.instagram.com/namanmanchanda1/'} target="_blank"><img src="https://img.icons8.com/dusk/64/000000/instagram-new.png"/></a>
                <a href={'https://github.com/namanmanchanda09'} target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/></a>
                <a href={'http://roads-country.com'} target="_blank"><img src="https://img.icons8.com/color/64/000000/beach.png"/></a>






            </div>

        </div>
    );
  }
}

export default App;











