import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    salutation: 'Hola!',
    name: (
      <span>
        This is <span style={{ color: 'orange' }}>Naman Manchanda</span>.
      </span>
    ),
  };
  handleSalutationEnter = (event) => {
    this.setState({ salutation: 'नमस्कार।' });
  };
  handleSalutationLeave = (event) => {
    this.setState({ salutation: 'Hola!' });
  };
  handleTextEnter = (event) => {
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    this.setState({
      name: (
        <span style={{ color: '#87CEFA' }}>
          नाम तो सुना ही होगा।
          <span role="img" aria-label="face">
            😜
          </span>
        </span>
      ),
    });
  };
  handleTextLeave = (event) => {
    this.setState({
      name: (
        <span>
          This is <span style={{ color: 'orange' }}>Naman Manchanda</span>.
        </span>
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1
            onMouseEnter={this.handleSalutationEnter}
            onMouseLeave={this.handleSalutationLeave}
          >
            {this.state.salutation}
          </h1>
          <h1
            onMouseEnter={this.handleTextEnter}
            onMouseLeave={this.handleTextLeave}
          >
            {this.state.name}
          </h1>
          <a href={'https://namanmanchanda.substack.com'}>Subscribe to my Newsletter</a>
          <div>
            <br />
            <a href={'http://namanmanchanda.netlify.com/'}>
              <img
                src="https://img.icons8.com/bubbles/64/000000/about.png"
                alt={'About'}
              />
            </a>
            <a href={'https://www.linkedin.com/in/naman-manchanda-1b0948144/'}>
              <img
                src="https://img.icons8.com/dusk/64/000000/linkedin.png"
                alt={'Linkedin'}
              />
            </a>
            <a href={'https://github.com/namanmanchanda09'}>
              <img
                src="https://img.icons8.com/nolan/64/github.png"
                alt={'Github'}
              />
            </a>
            {/* <a href={'https://www.instagram.com/namanmanchanda1/'}>
              <img
                src="https://img.icons8.com/dusk/64/000000/instagram-new.png"
                alt={'Instagram'}
              />
            </a> */}
            <a href={'http://roads-country.com'}>
              <img
                src="https://img.icons8.com/color/64/000000/beach.png"
                alt={'Blog'}
              />
            </a>
          </div>
          <br />
          <em>
            building{' '}
            <span style={{ color: 'yellow' }}>
              <a href={'https://limen.live'}>Limen</a>
            </span>{' '}
            at <a href={'https://github.com/LimenLabs'}>@LimenLabs</a>
          </em>

          <br />
          <br />
          <br />
          <div>
            <h3>Anything Urgent?</h3>
            Send a DM at <br />
            <a href={'https://twitter.com/NamanManchanda2'}>
              <img
                src="https://img.icons8.com/cotton/64/000000/twitter.png"
                alt={'Twitter'}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
