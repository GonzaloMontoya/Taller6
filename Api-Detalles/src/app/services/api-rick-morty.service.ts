import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Personajes } from '../interface/interface.Personajes';

@Injectable({
  providedIn: 'root'
})
export class ApiRickMortyService {

  constructor(private http: HttpClient) { }
  // private personajes: Personajes= {id: 0 ,name: "", status: "", species: "", type: "", gender: "", image:"" }

  obtenerPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

}
