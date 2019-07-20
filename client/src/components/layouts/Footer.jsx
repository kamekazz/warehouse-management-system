import React, { Component } from 'react';

class Footer extends Component {
  state = {
    ano: ''
  };

  componentDidMount() {
    this.setState({ ano: Date().getFullYear });
  }

  render() {
    return (
      <div>
        <div className='bg-dark text-white mt-5 p-4 text-center'>
          Copyright &copy; {this.state.ano} DevConnector
        </div>
      </div>
    );
  }
}

export default Footer;
