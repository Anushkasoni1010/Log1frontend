
import React from 'react';
import { Card } from 'antd';

export default class Content1 extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      value: ''
    }
 
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   console.log(this.state.value)
  //   event.preventDefault();
    
  // }
    render(){
        return(
        <div style={{ background: '#ECECEC', padding: '10px',marginTop: 30, marginBottom:30}}>
          <Card title="Name" bordered={false} style={{width: 300 }}>
          <div className="form-group">
          <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        </form>
      </div>
          {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>  */}
          </Card>
        </div>
        );
    }
}

          