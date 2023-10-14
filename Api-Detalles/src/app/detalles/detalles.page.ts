import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
public detalles:any
  constructor(
    private stateService:StateService
  ) { }

  ngOnInit() {

    this.stateService.getPersonaje().subscribe((pj)=>{
      this.detalles=pj;
    });
  }

}
