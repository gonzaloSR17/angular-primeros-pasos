import { Component } from '@angular/core';
import { personaje } from './../interfaces/personaje.interface';
import { DbzService } from './../services/dbz.services'

@Component({
    selector: 'app-main-page', // Nombre del selector para usar este componente
    templateUrl: './main-page.component.html'
})


export class MainPage {
   
  constructor( public dbzService: DbzService) {
    // Inyeccion
  } 

 }