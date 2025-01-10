import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { textoComponent } from "./components/texto.component"; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    textoComponent // Declara el componente
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    textoComponent // Exporta el componente
  ]
})
export class TextoModule { }
