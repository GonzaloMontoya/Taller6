
import { Component, OnInit } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public personajes:any
  constructor(
    private ApiRickMortyService:ApiRickMortyService,
    private router: Router,
    private stateService: StateService
    ) {}
  
  
  
   ngOnInit(){
    this.ApiRickMortyService.obtenerPersonajes().subscribe((data)=>{
      this.personajes = data;
      console.log(data);
    });
  };

  irADetalle(personaje:any){
    //almacena información en estado y redirecciona
    debugger;
    this.stateService.setPersonaje(personaje);
    this.router.navigateByUrl("/detalles")
  }
}
