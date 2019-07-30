import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {
    Form, Input, Select, Tag, Tooltip,Drawer
} from 'antd';
import Steps1 from './Steps';


const {TextArea} = Input;

const skillList = [
    {id: 1, value: 'Java'},
    {id: 2, value: 'Python'},
    {id: 3, value: 'AWS'},
    {id: 4, value: 'DevOps'},
    {id: 5, value: 'Others'},
]

class AddLead extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            error: null,
            vendor: '',
            status: 0,
            companyId: 0,
            leadId: 0,
            vendorList: [],
            job_desc: '',
            location: '',
            company: '',
            addCompany: false,
            addVendor: false,
            companyList: [],
            vendorId: null,
            skill: '',
            job_title: '',
            cityList: [],
            parseCityList: [],
            skill: '',
            selected: [false],
            companyValid:false,
            jdValid:false,
            locationValid:false,
            skillValid:false,
            jtValid:false,
            companyValid:false,
        };
        this.handleChange = this.handleChange.bind(this);
        //this.getCompanySuggestions = this.getCompanySuggestions.bind(this);
        //this.getCitySuggestions = this.getCitySuggestions.bind(this);
        this.onSelectCompany = this.onSelectCompany.bind(this);
        this.selectCompany = this.selectCompany.bind(this);
        this.onSelectSkill = this.onSelectSkill.bind(this);
        this.onSelectCity = this.onSelectCity.bind(this);
        this.selectVendor = this.selectVendor.bind(this);
       // this.parser = this.parser.bind(this);
    }


    componentWillMount() {
       // this.getCompanySuggestions("")
    }

    
    onSelectCompany(data) {
        this.setState({
            company: data.split(",")[1],
            companyId: data.split(",")[0],
            companyValid:false
        })
        //this.setState({companyId:id})
       
    }

    onSelectCity(data) {
        console.log(data)
        this.setState({
            location: data,
            locationValid:false
        })

    }

    onSelectSkill(data, i) {
        console.log(data)
        let selected = [];
        selected[i] = true
        this.setState({
            skill: data,
            selected: selected,
            skillValid:false,
        })

    }

    handleChange(event) {
        console.log("handle change", event.target.value)

        this.setState({
            [event.target.name]: event.target.value,
            companyValid:false,
            jdValid:false,
            skillValid:false,
            locationValid:false,
            jtValid:false,
        })
    };

    handleClose = () => {
        this.setState({open: false, addCompany: false, addVendor: false});

    };

    addLead(company, id, flag) {
        console.log(company)
        const body = {
            'job_desc': this.state.job_desc,
            'location': this.state.location,
            'skill': this.state.skill,
            'job_title': this.state.job_title,
            'vendor_company': company,
            "status": 'new'
        };
        console.log("----------------------------",this.props.current)
        // if (company && this.state.job_desc && this.state.location && this.state.skill && this.state.job_title) {
        //   console.log("success")
        // } else {
        //     if (company === 0) {
        //         this.setState({companyValid:true})
        //     }
        //      if (this.state.job_desc === '') {
        //         this.setState({jdValid:true})
        //     }
        //      if (this.state.skill === '') {
        //         this.setState({skillValid:true})
        //     }
        //      if (this.state.location === '') {
        //         this.setState({locationValid:true})
        //     }
        //      if (this.state.job_title === '') {
        //         this.setState({jtValid:true})
        //     }
        // }

    }

    selectCompany(obj) {
        console.log("obj", obj)
        this.state.companyList.push(obj)
        this.setState({
            company: obj.name,
            companyId: obj.id,
            companyValid:false

        })
    }

    selectVendor(obj) {
        console.log("--------------", obj)
        //this.state.vendorList.push(obj)
    }

    render() {
        console.log(this.state.job_desc)
        return (

            <div className="addleadform">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="testform">

                        <Form layout='vertical'>
                            <Button style={{
                                backgroundColor: this.state.job_desc !== undefined && this.state.job_desc !== '' ?
                                    'green' : 'gray',
                                zIndex: 10
                             }}
                                    onClick={() => {
                                        console.log(this.state.job_desc)

                                        if (this.state.job_desc !== undefined && this.state.job_desc !== '') {
                                            this.parser(this.state.job_desc)
                                        }
                                    }
                                    }>Parse</Button>

                            <Form.Item label={<span><span style={{color:'red',fontSize:9}}>*</span> Job Description</span>}>

                                    <div>
                                    <TextArea
                                        onChange={this.handleChange}
                                        name="job_desc"
                                        value={this.state.job_desc}
                                        placeholder="Job Description" className="nweleadjd"
                                              style={{width: '100%'}}
                                              autosize={{minRows: 10, maxRows: 25}}/>
                                    </div>
                                {this.state.jdValid && <label><span style={{color:'red',fontSize:11}}>Job Description cannot be null</span></label>}
                            </Form.Item>

                        </Form>

                    </div>
<div>
                    <label><span style={{color:'red',fontSize:9}}>*</span> Skills:</label>
                    <div style={{borderWidth: 1, borderColor: 'black'}}>

                        {skillList.map((tag, index) => {
                            const isLongTag = tag.value > 20;
                            const tagElem = (
                                <div onClick={() => this.onSelectSkill(tag.value, index)}>
                                    <Tag
                                        style={{
                                            width: '20%',
                                            fontSize: 13,
                                            marginTop:'8px',
                                            color: this.state.selected[index] ? 'white' : '#007ae2',
                                            backgroundColor: this.state.selected[index] ? '#007ae2' : 'white'
                                        }}
                                        key={tag.value} closable={false}>
                                        {isLongTag ? `${tag.value.slice(0, 20)}...` : tag.value}
                                    </Tag>
                                </div>
                            );

                            return isLongTag ? (
                                <Tooltip title={tag.value} key={tag}>
                                    {tagElem}
                                </Tooltip>
                            ) : (
                                tagElem
                            );
                        })}

                    </div>
                    
                     {this.state.skillValid && <label style={{ width:'100%' }}> <span style={{color:'red',fontSize:11}}>Select a skill</span> </label>}

                  </div>

                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div className="testform testformright">
                        <div class="row">
                            <div class="col-md-12">
                                <Form.Item label={<span><span style={{color:'red',fontSize:9}}>*</span> Job Location</span>}>
                                    
                                <Input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                                </Form.Item>

                                <br/>

                                <label>
                                    <span style={{color:'red',fontSize:9}}>*</span> Job Title:
                                    <input
                                        required
                                        id="outlined-required"
                                        className="form-control"
                                        placeholder="Job Title"
                                        name="job_title"
                                        value={this.state.job_title}
                                        onChange={this.handleChange}/>
                                    {this.state.jtValid && <label><span style={{color:'red',fontSize:11}}>Job Title Cannot be empty</span></label>}
                                </label>

                                <div className="row">

                                    <div class="col-md-12 col-sm-6 col-xs-12">

                                        <div className="VCompany">
                                            <label> <span style={{color:'red',fontSize:9}}>*</span> Vendor Company: </label>
                                            <Input type="text" name="company" value={this.state.company} onChange={this.handleChange}/>

                                    </div>



                                </div>

                                <div>
                                </div>


                            </div>


                        </div>
                    </div>

                </div>

                <br/>

                    <div className="col-md-12">
                        <div className="savenextbutton">
                            <Button variant="outlined" color="primary"
                                    onClick={() => this.addLead(this.state.companyId, this.state.vendorId, false)}>
                                Save and Exit
                            </Button>
                            <Button className="rightbutton" variant="outlined" color="primary"
                                    onClick={() => this.addLead(this.state.companyId, this.state.vendorId, true)}>
                                Save and Submit Resume
                            </Button>
                        </div>
                    </div>
            </div>
</div>
        );
    }
}

const AddLeadForm = Form.create({name:'dynamic_rule'})(AddLead);

export default class ViewLead extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return <AddLeadForm getLead={this.props.getLead} handleClose={this.props.handleClose}
                            changeStepCount={this.props.changeStepCount}/>
    }
}
