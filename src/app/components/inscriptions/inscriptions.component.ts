import { Component, OnInit } from '@angular/core';
import { InscriptionRequest } from 'src/app/models/inscription';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  list_insc! : InscriptionRequest[];
  inscription : InscriptionRequest = new InscriptionRequest();

  constructor(private _service : InscriptionService) { }

  ngOnInit(): void {
      this._service.getInscriptions().subscribe(
        data => this.list_insc = data
      )
  }


  add()
  {
    this._service.addInscription(this.inscription).subscribe(
      data => {this.list_insc.push(data);
        this.inscription = new InscriptionRequest();
      }
    )
  }


  delete(id : number)
  {
    this._service.delete(id).subscribe(
      data => this.list_insc = this.list_insc.filter(item => item.id != id)
    )
  }
}
