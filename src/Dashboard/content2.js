
import React from 'react';
import { Card } from 'antd';

export default class Content2 extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={
      value1: '',
      value2:''
    }

  }
 
    render(){
        return(
        <div style={{ background: '#ECECEC', padding: '10px',marginTop: 30, marginBottom:30}}>
          <Card title="Name" bordered={false} style={{width: 300 }}>
          <div className="form-group">
          <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter Username"
          value1={this.props.username} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        /><br></br>
        <label htmlFor="password">User Name</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="text"
          placeholder="Enter Password"
          value2={this.props.password} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        </form>
        Email : {this.props.email}
      </div>
          </Card>
        </div>
        );
    }
}

          