import React from 'react';
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { Layout, Card,Button } from 'antd';
const ButtonGroup = Button.Group;

export default class Graph extends React.Component{
    constructor(props){ 
        super(props)
        this.state = {
     };
    }
     render(){
        return(
            <div style={{marginLeft:20, marginRight:20}}>
                <Layout style={{ marginLeft:60, marginRight: 80}}>
                <Card>
                    <ButtonGroup  value="small" style={{position: 'absolute', right:30 }}>
                        <Button>Weekly</Button>
                        <Button>Monthly</Button>
                        <Button>3 Month</Button>
                        <Button>6 Month</Button>
                    </ButtonGroup>
                    <div style={{marginTop:40}}>
                    <LineChart data={{"2017-05-13": 2,
                 "2017-05-14": 5 ,"2017-05-15": 8,
                 "2017-05-16": 1,"2017-05-17": 9,
                 "2017-05-18": 2,"2017-05-19": 10,
                 "2017-05-20": 0,"2017-05-21": 3,
                 "2017-05-22": 2,"2017-05-23": 4,
                 "2017-05-24": 5}}/>
                    </div>
                 </Card>
                 </Layout>
            </div>
        )
     }
}