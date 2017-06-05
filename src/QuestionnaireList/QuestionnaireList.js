import React, { Component } from 'react';
import { Checkbox, Radio, Col, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import SubmitForm from '../SubmitForm/SubmitForm';
import axios from 'axios';


class QuestionnaireList extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: props.questions,
      answers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps);
    let answers = [];
    nextProps.questions.map(q => {
      answers.push({
        qa_key: q.qa_key,             //answerにqa_keyとnameとuserAnswerというkey, valueを持たせる
        name: q.name,
        userAnswer: ""
      })
    })

    this.setState({answers: answers});    //answerは上の[]からくる
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    console.log(e.target)
    let newObj = {qa_key: e.target.name, value: e.target.value}
    this.setState({
      answers: this.state.answers[newObj.qa_key]
    })
  };   //fYR


  focus() {
    //  this.nameInput.focus();
     console.log("this.state.answers", this.state.answers);
     //console.log(this.nameInput.value);
  };

  newSubmit() {
    const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
     axios.post(URL + '&name=' + this.nameInput.value)
       .then((response) => {
         console.log(response);
        this.nameInput.value = ' '; //reset value of input
        //  this.props.getQuestionnaireList();
      {/*}   this.props.getQnswerListforTest(); */}
       })
       .catch(function(error) {
         console.log(error)
       });
  };




  render(){
    return(
      <div>
        <button onClick={this.focus.bind(this)}>focus</button>
        <Col md={4} mdPull={6} className="list_of_questions">
      <Well>
        {this.props.questions.map((question, i) =>
          <div>
            {question.qa_key} {question.name}
              <br />
              {question.question_type === "defoinfo" ? (
                <div>
                 <input type="text"
                 name={question.qa_key}
                 //ref={(input) => { this.questions[question.qa_key] = input; }}
                //  ref={(input => {this.answers[] = input;})}
                // ref={(input) => { this.nameInput = input; }}//
                 onChange={(e) => this.handleInputChange(e)}
                 />
                </div>


               ) : question.question_type === "checkbox" ? (
                <div>

                 <Radio
                 //name="checkboxanswer1"
                  name={question.qa_key}
                  //ref={(input) => { this.questions[question.qa_key] = input; }}
                  // ref={(input => {this.answers[] = input;})}
                  //ref={(input) => { this.nameInput = input; }}//
                  onChange={(e) => this.handleInputChange(e)}
                  inline>
                  1
                 </Radio>

                 <Radio
                 //name="checkboxanswer2"
                  name={question.qa_key}
                  //ref={(input) => { this.questions[question.qa_key] = input; }}
                  // ref={(input => {this.answers[] = input;})}
                  //ref={(input) => { this.nameInput = input; }}//
                  onChange={(e) => this.handleInputChange(e)}
                  inline>
                   2
                 </Radio>

                  <Radio
                  //name="checkboxanswer3"
                  name={question.qa_key}
                  //ref={(input) => { this.questions[question.qa_key] = input; }}
                  // ref={(input => {this.answers[] = input;})}
                  //ref={(input) => { this.nameInput = input; }}//
                  onChange={(e) => this.handleInputChange(e)}
                  inline>
                   3
                 </Radio>

                 <Radio
                  //name="checkboxanswer4"
                   name={question.qa_key}
                  //ref={(input) => { this.questions[question.qa_key] = input; }}
                  // ref={(input => {this.answers[] = input;})}
                  //ref={(input) => { this.nameInput = input; }}//
                  onChange={(e) => this.handleInputChange(e)}
                  inline>
                   4
                 </Radio>

                 <Radio
                  //name="checkboxanswer5"
                   name={question.qa_key}
                  //ref={(input) => { this.questions[question.qa_key] = input; }}
                  // ref={(input => {this.answers[] = input;})}
                  //ref={(input) => { this.nameInput = input; }}//
                   onChange={(e) => this.handleInputChange(e)}
                  inline>
                   5
                 </Radio>

                </div>

               ) : question.question_type === "string" ? (
                <div>
                   <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea"
                     name={question.qa_key}
                    // ref={(input) => { this.questions[question.qa_key] = input; }}
                    //  ref={(input => {this.answers[] = input;})}
                     //ref={(input) => { this.nameInput = input; }}//
                     onChange={(e) => this.handleInputChange(e)}
                    />
                   </FormGroup>
                </div>
               ) :  (
                <div>
                   <Radio
                    //name="yesno1"
                    name={question.qa_key}
                    //ref={(input) => { this.questions[question.qa_key] = input; }}
                    // ref={(input => {this.answers[] = input;})}
                  //  ref={(input) => { this.nameInput = input; }}//
                    onChange={(e) => this.handleInputChange(e)}
                    inline>
                     Yes
                   </Radio>

                   <Radio
                    //name="yesno2"
                    name={question.qa_key}
                    //ref={(input) => { this.questions[question.qa_key] = input; }}
                    // ref={(input => {this.answers[] = input;})}
                  //  ref={(input) => { this.nameInput = input; }}//
                    onChange={(e) => this.handleInputChange(e)}
                    inline>
                      No
                   </Radio>
                </div>
               )
               }
              <br />
              <br />
          </div>
        )}
        <button onClick = {this.focus.bind(this)}>Submit Answer-提出する-</button>

        {/*}<input
         type="button"
         value="提出する"
         onClick={this.focus}
         />*/}
        {/* <button onClick={() => this.focus()}>提出する</button>*/}
        </Well>
        </Col>
      </div>
    )
  }
}

export default QuestionnaireList;

//############################################################
// import React, { Component } from 'react';
// import { Checkbox, Radio, Col, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
//
// class QuestionnaireList extends Component {
//   constructor(props) {
// 		super(props);
// 		 this.state = {
// 			answers: props.answers
// 		};
// 	}
//
//   addAnswer(event) {
//   	event.predefault();
//   	let defoanswer = this.refs.defoanswer.value; // ref="name", "phone" => "defoanswer"
//   	let checkboxanswer1 = this.refs.checkboxanswer1.value;
//   	let checkboxanswer2 = this.refs.checkboxanswer2.value;
//   	let checkboxanswer3 = this.refs.checkboxanswer3.value;
//   	let checkboxanswer4 = this.refs.checkboxanswer4.value;
//   	let checkboxanswer5 = this.refs.checkboxanswer5.value;
//     let stringanswer = this.refs.stringanswer.value;
//     let id = Math.floor((Math.random() * 100) + 1);
//   	console.log(this.refs.stringanswer)
//   	this.setState({
//   		answers: this.state.answers.concat({id, defoanswer, checkboxanswer1, checkboxanswer2, checkboxanswer3, checkboxanswer4, checkboxanswer5, stringanswer})
//       //answers: this.state.answers.push({id, defoanswer, checkboxanswer1, checkboxanswer2, checkboxanswer3, checkboxanswer4, checkboxanswer5, stringanswer})
//   	})
//     this.refs.defoanswer.value = '';
//     this.refs.checkboxanswer1.value = '';
//     this.refs.checkboxanswer2.value = '';
//     this.refs.checkboxanswer3.value = '';
//     this.refs.checkboxanswer4.value = '';
//     this.refs.checkboxanswer5.value = '';
//     this.refs.stringanswer.value = '';
//    }
//
//   render(){
//     return(
//       <div>
//         <Col md={4} mdPull={6} className="list_of_questions">
//           <Well>
//             {this.props.questions.map((question, i) =>
//               <div>
//                 {question.name}
//                   <br />
//                   <div>
//                     <form onSubmit={this.addAnswer.bind(this)}>
//                       {question.question_type === "defoinfo" ? (
//                         <div>
//                           <input type="text"　name="defoanswer" ref="defoanswer" />
//                         </div>
//                        ) : question.question_type === "checkbox" ? (
//                          <div>
//                            <Radio name="checkboxanswer1" ref="checkboxanswer1" inline> 1 </Radio>
//                            <Radio name="checkboxanswer2" ref="checkboxanswer2" inline> 2 </Radio>
//                            <Radio name="checkboxanswer3" ref="checkboxanswer3" inline> 3 </Radio>
//                            <Radio name="checkboxanswer4" ref="checkboxanswer4" inline> 4 </Radio>
//                            <Radio name="checkboxanswer5" ref="checkboxanswer5" inline> 5 </Radio>
//                          </div>
//                        ) : (
//                          <div>
//                            <FormGroup controlId="formControlsTextarea">
//                              <FormControl componentClass="textarea" name="stringanswer" ref="stringanswer" />
//                            </FormGroup>
//                          </div>
//                         )
//                        }
//                       <br />
//                       <br />
//                     </form>
//                  </div>
//               </div>
//             )}
//             <button type="submit">提出</button>
//           </Well>
//         </Col>
//       </div>
//     )
//   }
// }
//
// export default QuestionnaireList;
