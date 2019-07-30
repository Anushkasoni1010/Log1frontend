
import React from 'react';
import { Drawer, Button } from 'antd';
import { Steps, message } from 'antd';
import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <Content1 />,
  },
  {
    title: 'Second',
    content: <Content2 />,
  },
  {
    title: 'Last',
    content: < Content3/>,
  },
];
export default class DrawerSteps extends React.Component {
  state = { visible: false };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      visible:false,
      flag:0
    };
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
Drawer.confirm({
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
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open         
        </Button>
        <Drawer 
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
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
                </div>
        </Drawer>
      </div>
    );
  }
}


          