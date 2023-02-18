import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreI: string = '';
  apellidoI: string = '';


  agregarPersona() {
    let personan = new Persona( this.nombreI, this.apellidoI )

    this.personaCreada.emit(personan);
  }

}
