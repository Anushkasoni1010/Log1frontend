import React from 'react';
import 'antd/dist/antd.css';
import { Layout} from "antd";
import TotalTab from './TotalTab';
import Graph from './Graph';
import Dmain from './Dmain';
import Steps1 from './Steps';
import DrawerSteps from './DrawerSteps';


const { Content} = Layout;


export default class Dashboard extends React.Component{
    constructor(props){ 
        super(props)
        this.state = {
     };
   
   }

  
  render(){
      return(
        <Layout className="layout">
        <Content >
        <TotalTab/>
        <Dmain/>
        <Graph />
        {/* <DrawerSteps /> */}
        <Steps1 />
        {/* <Dtable /> */}
        </Content>
      </Layout>
      )
  }

}