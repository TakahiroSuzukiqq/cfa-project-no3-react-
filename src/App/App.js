import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import QuestionnaireList from '../QuestionnaireList/QuestionnaireList';
// import SubmitForm from '../SubmitForm/SubmitForm';
import Result from '../Result/Result';
// import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';



class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    questions: [],
    answers: []
  };
};

   componentDidMount() {
     this.getQuestionnaireList();
};

  getQuestionnaireList() {
    // console.log('componentDidMount()');
    const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
    axios.get(URL)
    .then((response) => {
      this.setState({ questions: response.data });
      console.log(this.state.questions)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

//getQnswerListforTest(){}


  render() {
    return (
      <div>
       <div className="questionnaire_header">
        <h1>Questionnaire-アンケート-</h1>
       </div>
          <QuestionnaireList questions={ this.state.questions } />
          {/*}<div className="submit_questions">
            <SubmitForm
          　　getQuestionnaireList={ () => this.getQuestionnaireList() }/>
          </div> */}
          <Result />
      </div>
    );
  }
}

export default App;
