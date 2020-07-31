import React from 'react';
import axios from 'axios';
import './PersonList.css';
import { Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
// import moment from 'moment';
//import Moment from 'react-moment';
//import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecordList from './RecordList';
import CalenderData from './CalenderData';




export default class PersonList extends React.Component {
  state = {
    persons: [],
    SelectedUserData: [],
    SelectedUserNames:'',
    MessageDisplay:"Record List Hee",
    startDate: new Date(),
    isMatchFound: false,
    SelectedUseID: '',
    FinalCalenderData:[]
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });

    console.log("handleChangeCurTime",date )
  };

  handleSubmit=(date)=> {

    if(this.state.SelectedUseID === ''){
      alert("Please Select a User in UserList First")
      return
    }
   

    let temArry =[]
    date.preventDefault();
    console.log("this.state.SelectedUseID", this.state.SelectedUseID)


    const CurDate = this.state.startDate;
    //console.log("CurDate", CurDate)

    const ConvertingDateToString = CurDate.getDate() + "-" + (CurDate.getMonth()+1) + "-" + CurDate.getFullYear() 
    console.log("CurDate", ConvertingDateToString)

    let CompanyDate = this.state.persons.map((per, index)=>{

      console.log("real_namereal_name :-", per.real_name)

      if(this.state.SelectedUseID === per.id){
        
        const act_period = per.activity_periods;
        console.log("act_period :-", act_period)
  
       
        act_period.map((d)=>{
           
         // console.log("ddd",d.start_time)
  
          const splitArry = d.start_time.split('  ')
          //console.log("splitArry",splitArry)
  
          const NewDate= new Date(splitArry[0]);
  
          //console.log("NewDate",NewDate)
  
          const NewDateString = NewDate.getDate() + "-" + (NewDate.getMonth()+1) + "-" + NewDate.getFullYear()
  
          //console.log("NewDateString",NewDateString)
  
          // console.log("isMatchFound", ConvertingDateToString)
          // console.log("NewDateString", NewDateString)
          if(ConvertingDateToString === NewDateString){
  
            console.log("Its mached!")
            // this.state.FinalCalenderData
           
            temArry.push(d)
            //this.state.FinalCalenderData.push(d)
            // this.setState({
            //   FinalCalenderData: temArry
            // })
            console.log("temArry!", this.state.FinalCalenderData)
            console.log("Its mached!")
            console.log("isMatchFound", this.state.isMatchFound)
          }
  
          else{
  
            console.log("Its not maching!!!")
          }
      
        })

      }



    })
            this.setState({
             FinalCalenderData: temArry
            })

           if(temArry.length === 0){
            alert("No data available for selected Date: " + ConvertingDateToString)
            }

  }


  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/mjroidu/Dummy-Data/master/DummyJson`)
      .then(res => {
          console.log("Checking Data", res)
        const persons = res.data.members;
        this.setState({ persons });
      })
  }

  onReportClick=(per)=>{
    this.setState({
      SelectedUserData: per.activity_periods,
      SelectedUserNames:per.real_name,
      SelectedUseID: per.id

    })
    console.log("selectedReport", per)
    
  }


  render() {
      console.log("this.state.persons", this.state.persons)

    return (

<div>
    <div className={"leftPanel"}>
      <Row>
      <Col sm={5}> 
    <h4> User List: Click to Display Records</h4> 
        
              {
                this.state.persons.map((per, index) =>{
                return (
                  <Col key={index} className ={"paddingVertical"}>
                    <div className={"labelStyle "}>
                    <li style={{ color:(this.state.SelectedUserNames=== per.real_name ? '#DC143C' : 'black'), paddingLeft: "10px"} } onClick={(e)=>this.onReportClick(per)}>
                    {per.real_name}
                    </li>
                    </div>
                    </Col>
                )
                }
                )
              }
    
      </Col>
      
  <Col sm={4} className="list">
          
          <div className = "container">
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                  <label>Select Date: </label>
                  <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleChange }
                    name="startDate"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
    
                <div className="form-group">
                  <button className="btn btn-success">Submit Date</button>
                </div>
            </form>
          </div>
    
        </Col>

      </Row>
    
       

           
    <Row>
    <Col sm={5}>
          <div>
              <RecordList  
              selectUsers={this.state.SelectedUserData}
              nameDisplay = {this.state.SelectedUserNames}
              />
          </div>
      </Col>

      <Col sm={4}>
        <div>
          <CalenderData 
           nameDisplay = {this.state.SelectedUserNames}
          caleData = {this.state.FinalCalenderData} />
        </div>
    </Col>
    
      </Row>     
    </div>
</div>
    )
  }
}