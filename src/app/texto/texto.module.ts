import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule, // Módulo base de Angular
      FormsModule
    ],
    exports: [
        // Exporta los componentes que usarás fuera de este módulo
    ]
  })

  export class TextoModule { }