
import React from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { Steps, Button, message } from 'antd';
import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';
import AddLeads from './addLead';



export default class Steps1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
          visible:false,
          flag:0,
          email:'',
          username:'',
          password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

      }
  
      handleChange(event) {
        const {value,value1,value2} = event.target
        this.setState({
          email: value,
          username: value1,
          password: value2
        })  ;
        console.log(value) 
      }

      handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
          Email: ${email} \n 
          Username: ${username} \n
          Password: ${password}`)
      }
      
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    const flag=this.state.flag+1;
    this.setState({ current ,flag});
  }

  confirm() {
    let self=this
    Modal.confirm({
      title: 'Confirm',
      content: 'Previous Information Will Be Deleted',
      okText: 'Ok',
      cancelText: 'Cancel',
onOk(){
  self.done();
}
    });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      flag:0
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      flag:0
    });
  };

  done=()=>{
    message.success('Done');
   
    this.setState({
      visible: false,
      flag:0
    });
  };

  render() {
    const { current ,flag} = this.state;
    const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content:<AddLeads current={this.state.current} flag={this.state.flag}/>
  },
  {
    title: 'Second',
    content: <Content2 handleChange={this.handleChange} username={this.state.username} password={this.state.password}/>,
  },
  {
    title: 'Last',
    content: < Content3 handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>,
  },
];
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal 
          title="Fill Requirnments"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
                    <div>
                    <form onSubmit={this.handleSubmit}>
  
                    <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                    </Steps>
                   
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                    {current < 1 && (
                        <Button  style={{ marginLeft: 8 }} type="primary" onClick={() => this.next()}>
                        Save and Add Resume
                        </Button>
                    )}
                    {current===0 && flag==0 && (
                        <Button type="primary" onClick={() =>this.done()} style={{marginLeft:8}}>
                         Save And Exit
                        </Button>
                    )}
                    {flag!==0 && current===0 && (
                        <Button type="primary" onClick={() =>this.confirm()} style={{marginLeft:8}}>
                         Save And Exit
                        </Button>
                    )}
                    {current===1 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    )}
                    {current===2 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    )}
                     {current===1 && (
                        <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.next()}>
                        Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.done()}>
                        Done
                        </Button>
                    )}
                    </div>
                    </form>
                </div>
        </Modal>
      </div>
    );
  }
}


          