import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  rightAnswer:number=0;
  private quizs:Quiz[];
  constructor(private service:QuizService,private router: Router) { }

  ngOnInit() {
  this.service.getAllQuiz().subscribe(res=>{
    this.quizs=res});
  }
  Score() {
		this.rightAnswer = 0;
 
			if (this.quizs[0]["answer"] == "Null obj") {
					this.rightAnswer++;
				}
      	if (this.quizs[1]["answer"] == "16-bit") {
					this.rightAnswer++;
				}
        	if (this.quizs[2]["answer"] == "StringBuffer") {
					this.rightAnswer++;
				if (this.quizs[3]["answer"] == "Class") {
					this.rightAnswer++;
				}
      	if (this.quizs[4]["answer"] == "List") {
					this.rightAnswer++;
				}

			}

		}


  }