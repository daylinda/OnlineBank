import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';
@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css']
})
export class TakequizComponent implements OnInit {
  private quizs:Quiz[];
  constructor(private service:QuizService,private router: Router) { }
  addAnswer(){
	this.router.navigate(['submit'])
	}
  ngOnInit() {
  this.service.getAllQuiz().subscribe(res=>{
    this.quizs=res});
  }

}
