import { Injectable } from '@angular/core';
import { personaje } from './../interfaces/personaje.interface'; // Importacion del objeto de character



@Injectable({providedIn: 'root'})
export class DbzService {
    titulo: string = 'Este es el título que se muestra en la página';

    public characters: personaje[] = [
        { name: 'Krillin', power: 1000 },
        { name: 'Goku', power: 9500 },
        { name: 'Vegeta', power: 7500 }
      ];

      
 // On new Character esta funcion agregara el nuevo personaje se haya agregado a la interfaz
  onNewCharacter(character:personaje): void{
    this.characters.push(character);
  }

  // On Delete Character esta funcion eliminar el personaje se haya agregado a la interfaz
  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }
}