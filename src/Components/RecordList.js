import React, { Component } from 'react';

class RecordList extends Component {
    render() {
        // console.log("activity_periods-this.props.selectUsers", this.props.selectUsers)
        // console.log("activity.NameDisplay", this.props.nameDisplay)
        return (
            <div className="RecordList">

                   {
                        this.props.selectUsers.map((e, key)=>{
                            const splitArry = e.end_time.split(' ')
                           // console.log("splitArry", splitArry)
                            //const arr = splitArry[3]
                           // console.log("mmmm", arr)
                            //console.log("eeeeee", e)
                        return(
                            
                            <div style={{ marginLeft: "55px", color: "#7c795d"}}>
                                    {this.props.nameDisplay+ " : "}
                                    
                                    {e.start_time+ " - "}
                                    {/* {" " +e.end_time} */}
                                    {splitArry[3]}
                            </div>
                        )
                        })
                    }
            </div>  
        );
    }
}

export default RecordList;
