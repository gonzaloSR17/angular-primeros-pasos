import { Component } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [],
  templateUrl: './texto.component.html'
})

export class MensajeComponent {
mensaje: string = '¡Hola Goku!';

cambiarMensaje(){
  this.mensaje = 'La funcion se ejecuto, ¡Se cambio el mensaje!'
}
}