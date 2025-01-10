import { Component } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})

export class textoComponent {
mensaje: string = '¡Hola Goku!';

cambiarMensaje(){
  this.mensaje = 'La funcion se ejecuto, ¡Se cambio el mensaje!'
}

}