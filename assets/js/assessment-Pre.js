// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see 
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page
  preamble: 'Liquibase is not vor everyone. In order to make sure this course is right for you, we want you to take this short assessment that evaluates the appropriateness of this course. This assessment is not intended to judge or grade you professionally. Its purpose is for us to determine what kind of people are taking this course and what you are taking away from the course. Please be honest with your answers. That means answer to the best of your knowledge. Any kind of research from this point forward is going to produce unrealistic results and will influence our understanding of the results.',

 
  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '',
     choices: ["A and B", "D and B", correct("A and C"), "C and D", "I don't know"]
    },

    {questionHTML: '',
     choices: [correct("True"), "False", "I don't know"]
    },

    {questionHTML: '',
     correctAnswerString: 'sunrise'
    },

    {questionHTML: '',
     correctAnswerRegex: /354\s*[+]\s*651/
    }
  ],

  assessmentName: 'precourse', // unique name submitted along with all of the answers
  checkAnswers: false          // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

