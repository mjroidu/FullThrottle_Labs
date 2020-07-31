import React, { Component } from 'react';

class CalenderData extends Component {
constructor(props){
    super(props)

    this.state ={

        LoginSession:[],

    }
}


componentDidMount(){

    console.log("componet1234")

this.setState({
    LoginSession:this.props.caleData
})

}

  
    render() {
      //  console.log("calender data displaying", this.props.caleData)
       console.log("calender data displaying", this.state.LoginSession)
        return (
            <div>
                {
                    this.props.caleData.map((e)=>{

                        const splitArry = e.end_time.split(' ')
                       // const arr = splitArry[3]

                        console.log("FINALLLLLdisplaying", e.start_time)
                        return(
                            <div style={{color: "#7c795d"}}>
                                 {this.props.nameDisplay+ " : "}
                                {e.start_time+ " - "}
                                {splitArry[3]}
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default CalenderData;