import React from 'react'
import styles from './main.css';
//import {Button, OneColumn } from '@weirgroup/one-weir';

//import { connect } from 'react-redux';
import { Row, Col, Container , Button} from 'react-bootstrap';
//import * as constantMessages from './constantMessages'
//import SkillsComponent from '../../Components/SkillsComponent'
//import SkillsRatingInfoComponent from '../../Components/skillsRatingComponent'

const reportees = [
  {
    name: 'Yudishtira'
  },
  {
    name: 'Bheema'
  },
  {
    name: 'Arjuna'
  },
  {
    name: 'Nakula'
  },
  {
    name: 'Sahadeva'
  },
  {
    name: 'Duryodhana'
  }
]

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetRadioValues: false
    }
    this.onReporteeClick = this.onReporteeClick.bind(this)
  }

  onReporteeClick(reporteeName){
    this.setState(
      {
        selectedReportee: reporteeName,
        resetRadioValues: true
      }
    )
  }

  render() {
    return (
      <div>
        <Container>
          
          <div>
            <Col sm={2} className={styles.leftPanel}>
              {
                reportees.map(
                  (person, index) => {
                    return (
                      <Col key={index} className={styles.paddingVertical}>
                        <div 
                          className={
                            styles.labelStyle + ' ' + 
                            styles.normalCase + ' ' +
                            (this.state.selectedReportee === person.name ? styles.reporteeSelected : '')
                          }
                          onClick={() => this.onReporteeClick(person.name)}
                        >
                        {person.name}
                        </div>
                      </Col>
                    )
                  }
                )
              }
            </Col>
            <Col sm={10}>
              {
                this.state.selectedReportee ?
                <div>
                  {/* <SkillsComponent resetRadioValues={this.state.resetRadioValues} selectedReportee={this.state.selectedReportee} /> */}
                  <Button
                    styletypes={'primary'}
                    label='Submit'
                    onClick={()=>{}}
                    style={{ margin: 15, marginTop: 30 }}
                  />
                  <Button
                    styletypes={'secondary'}
                    label='Reset'
                    onClick={()=>{}}
                    style={{ margin: 15, marginTop: 30 }}
                  />
                </div>
                : null
              }
            </Col>
          </div>
        </Container>
      </div>
    )
  }
}

export default ListOfUsers

