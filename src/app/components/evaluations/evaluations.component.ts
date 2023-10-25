import { Component, OnInit } from '@angular/core';
import { evaluation } from 'src/app/models/evaluation';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  list_eval! : evaluation[];
  evaluation : evaluation = new evaluation();

  constructor(private _service : EvaluationService) { }

  ngOnInit(): void {
      this._service.getEvaluations().subscribe(
        data => this.list_eval = data
      )
  }


  add()
  {
    this._service.addEvaluations(this.evaluation).subscribe(
      data => {this.list_eval.push(data);
        this.evaluation = new evaluation();
      }
    )
  }
}
