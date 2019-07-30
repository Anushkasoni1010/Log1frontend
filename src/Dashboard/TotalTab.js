import React from 'react';
import { Card, Icon } from 'antd';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';

export default class TotalTab extends React.Component{
    constructor(props){ 
        super(props)
        this.state = {
     };
   
   }
   
  render(){
      return(
        <div>
          <Row gutter={25} style={{marginLeft:30, marginRight:20, marginTop: 20}}>
            <Col className="gutter-row" span={5} style={{boxShadow:'3px 3px 5px 6px #ccc',marginLeft: 30}}>
             <div className="gutter-box" style={{height:90}}>
               <h5 
               style={{
                 fontFamily:"ModernEra",
                  fontSize:43, paddingTop:12
                  }}> 
              <Icon type="check-circle" 
              style={{
                color:"#0ED015",
                alignItems:'left'
                }}/>   Total
              </h5> 
             </div>
           </Col>
            <Col className="gutter-row" span={5} style={{boxShadow:'3px 3px 5px 6px #ccc',marginLeft: 30}}>
               <div className="gutter-box" 
               style={{
                 fontFamily:"ModernEra",
                  fontSize:25,height:90}}>
                  <h4 
                  style={{fontFamily:"ModernEra", 
                  fontSize:25}}>
                    Interview
                  </h4>
                   <Icon type="user" 
                   style={{
                     fontSize:30,
                     color:"#0B95D9"}} />  456
                </div>
             </Col>
             <Col className="gutter-row" span={5} style={{boxShadow:'3px 3px 5px 6px #ccc',marginLeft: 30}}>
                <div className="gutter-box" style={{fontFamily:"ModernEra", fontSize:25,height:90}}><h4 style={{fontFamily:"ModernEra", fontSize:25}}>
                  Projects
                  </h4>
                <Icon type="project" style={{fontSize:30,color:"#0B95D9"} }/>  891
                </div>
              </Col>
              <Col className="gutter-row" span={5} style={{boxShadow:'3px 3px 5px 6px #ccc',marginLeft: 30}}>
                <div className="gutter-box" style={{fontFamily:"ModernEra", fontSize:25,height:90}}><h4 style={{fontFamily:"ModernEra", fontSize:25}}>PO</h4>
                <Icon type="unordered-list"  style={{fontSize:30,color:"#0B95D9"}} />  654
                </div>
              </Col>
          </Row>
      
      </div>
      )
  }

}