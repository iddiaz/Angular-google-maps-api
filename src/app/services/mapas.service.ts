import { Injectable } from '@angular/core';
import { Marcador } from './../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {

    let nuevoMarcador: Marcador = {
      lat: 40.308381,
      lng: -3.725336,
      titulo: 'Empresa DigitalDesk',
      draggable: true
    };

    this.marcadores.push ( nuevoMarcador );

  }

  insertarMarcador(  marcador: Marcador ) {
    this.marcadores.push( marcador );
    this.guardarMarcadores();
  }

  borrarMarcador( index: number ) {
    this.marcadores.splice (index, 1 );
    this.guardarMarcadores();

  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores ) );
  }

  cargarMarcadores() {
    if(localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem(`marcadores`));
    } else {
      this.marcadores = [];
    }
  }
}
