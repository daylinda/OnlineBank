import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

 private quizs:Quiz[];
  constructor(private service:QuizService,private router: Router) { }
  ngOnInit() {
  this.service.getAllQuiz().subscribe(res=>{
    this.quizs=res});

  }
back(){
this.router.navigate(['takequiz']);
}
result(){
this.router.navigate(['results']);
}
}
