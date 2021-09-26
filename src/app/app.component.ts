import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 buttonName = "Start the Quiz";
 begin = false;
 complete = false;
 questions: any;
 currentQuestion: any;
 currentIndex: number;
 score: any;
 noAnswer: any;

 constructor(){
   this.questions = [
     {
       id: 1,
       question: 'Q1 - Who is sometimes called as father of Angularjs?',
       option: [
         {optionid: 1, name: 'Brad Green'},
         {optionid: 2, name: ' Misko Hevery'},
         {optionid: 3, name: 'Brad Richardson '},
         {optionid: 4, name: 'Chuck Jazdzewski'}
       ],
       answer: 2,
       selected: 0
     },
     {
       id: 2,
       question: 'Q2 -  Which of the following is correct about TypeScript?',
       option: [
         {optionid: 1, name: 'Angular is based on TypeScript'},
         {optionid: 2, name: 'This is a superset of JavaScript'},
         {optionid: 3, name: 'TypeScript is maintained by Microsoft.'},
         {optionid: 4, name: 'All of the above. '}
       ],
       answer: 2,
       selected: 0
     },
     {
       id: 3,
       question: 'What is the decorator used for configuring your module class?',
       option: [
         {optionid: 1, name: '@NgModule'},
         {optionid: 2, name: '@NgApp'},
         {optionid: 3, name: 'Both'},
         {optionid: 4, name: ' None of above '}
       ],
       answer: 1,
       selected: 0
     },
     {
       id: 4,
       question: 'Q4 - Which angular decorator allows us to define the pipe name that is globally available for use in any template in the across application?',
       option: [
         {optionid: 1, name: 'pipeName '},
         {optionid: 2, name: 'pipeDeco'},
         {optionid: 3, name: 'Pipe'},
         {optionid: 4, name: 'None of the above'}
       ],
       answer: 3,
       selected: 0
     },
     {
       id: 5,
       question: 'Q5 -  Which character is used for chaining multiple pipes?',
       option: [
         {optionid: 1, name: '|'},
         {optionid: 2, name: ':'},
         {optionid: 3, name: 'Both '},
         {optionid: 4, name: ' None of the above '}
       ],
       answer: 2,
       selected: 0
     }
   ];

   this.currentIndex = 0;
   this.currentQuestion = this.questions[this.currentIndex];
  }
  
  next(){
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];
  }

  submit(){
    this.buttonName = "Play Again?";
    if (this.currentIndex + 1 == this.questions.length){
      this.complete = true;
      this.begin = false;
      this.score = 0;
      this.noAnswer = 0;
      this.questions.map(x => {
        if (x.selected != 0){
          if (x.selected == x.answer) {
            this.score++;
          }
        }
        else {
          this.noAnswer++;
        }

        x.selected = 0;
      });
    } 
  }

  start(){
    this.complete = false;
    this.currentIndex = 0;
    this.currentQuestion = this.questions[this.currentIndex];
    this.begin = true;
  }

}
