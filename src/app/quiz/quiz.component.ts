import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent  implements OnInit{
  resultgroup=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    // results:['']
  })
  result:Number=0
  questions: any[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue Whale'
    },
    
    {
      question: 'What is the capital of india?',
      options: ['mumbai', 'delhi', 'kerala', 'karnataka'],
      answer: 'delhi'
    },
    
    {
      question: 'What is the largest social media platform in the world?',
      options: ['facebook', 'instagram', 'telegram', 'netflix'],
      answer: 'facebook'
    },
    
    {
      question: 'What is the main purpose of a web browser?',
      options: ['To access and view websites and webpages on the internet.', 'delete data', 'for gaming only', 'for entertainment'],
      answer: 'To access and view websites and webpages on the internet.'
    },
    
    {
      question: 'What is the purpose of a firewall in computer security?',
      options: ['To protect against viruses', ' To store data securely', 'To prevent unauthorized access', 'To improve computer performance'],
      answer: 'To prevent unauthorized access'
    },
    
    {
      question: 'What does the acronym "HTTP" stand for?',
      options: ['Hypertext Transfer Protocol', 'Hypertext data Protocol', 'Hypertext Traslate Protocol', 'Hypertext Transfer Programming'],
      answer: 'Hypertext Transfer Protocol'
    },
    
    {
      question: 'What is the most widely used programming language for web development??',
      options: ['python', 'javascript', 'C', 'php'],
      answer: 'javascript'
    },
    
    {
      question: 'What is the purpose of a "cache" in a computer system? ',
      options: ['To store frequently accessed data', 'To store user credentials', 'To block malware', 'To encrypt data'],
      answer: 'To store frequently accessed data'
    },
    
    {
      question: 'What is the purpose of a "cookie" in web browsing?',
      options: ['To store website passwords', 'To block pop-up ads', 'To improve website performance', 'To store user browsing preferences'],
      answer: 'To store user browsing preferences'
    },
    
    {
      question: 'Choose the correct conjunction to complete the sentence: "I wanted to go to the party, _____ I was feeling tired',
      options: ['And', 'But', ' Or', ' So'],
      answer: 'But'
    },
    
    {
      question: 'What is the correct comparative form of the adjective "good"?',
      options: ['Better', 'Gooder', 'Goodest', 'Goods'],
      answer: 'Better'
    },
    
    {
      question: 'Identify the adjective in the following sentence: "The big red ball rolled down the hill."',
      options: ['Big', 'Red', 'The', 'Hill'],
      answer: 'Red'
    },
    
    {
      question: 'Choose the correct word to complete the sentence: "I have _____ finished my homework."',
      options: ['Already', 'All ready', 'All right', 'All most'],
      answer: 'Already'
    },
    
    {
      question: 'Identify the noun in the following sentence: "The cat chased the mouse."',
      options: ['Chased', 'Mouse', 'Cat', ''],
      answer: 'Blue Whale'
    },
  ];

  selectedOption: string = '';
  currentQuestionIndex: number = 0;
  quizCompleted: boolean = false;
  score: number = 0; // New property to track score

  constructor(private api:ApiserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    
    if(!localStorage.getItem("token")){
      alert("please login")
      this.router.navigateByUrl('')

    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  submitAnswer() {
    if (this.selectedOption === this.questions[this.currentQuestionIndex].answer) {
      // Correct answer
      this.score++; // Increment score
      // You can implement your own logic here, e.g., show feedback, etc.
    } else {
      // Incorrect answer
      // You can implement your own logic here, e.g., show feedback, etc.
    }

    // Move to the next question or complete the quiz
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizCompleted = true;
    }

    this.selectedOption = '';
  }

  fscore(){
    const userid=this.resultgroup.value.userid
    this.result=this.score
    // const result=this.resultgroup.value.results
    if(this.resultgroup.valid){
      this.api.test(userid,this.result).subscribe((data:any)=>{
        alert(data)
      },(data:any)=>{
        alert(data.error)
      })

    }
    else{
      alert('invalid form')
    }
  }

  

 }


