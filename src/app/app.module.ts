import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module'; // Importa tu módulo DBZ
import { TextoModule } from './texto/texto.module';

@NgModule({
  declarations: [
    AppComponent, // Componente raíz
  ],
  imports: [
    BrowserModule,
    DbzModule, // Asegúrate de incluir aquí el DbzModule
    TextoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
