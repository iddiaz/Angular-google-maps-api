import { MapasService } from './services/mapas.service';
import { Component } from '@angular/core';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Google Maps App';
  lat: number = 40.308381;
  lng: number = -3.725336;
  zoom: number = 16;

  marcadorSel: any = null;
  draggable: string = '1';

  constructor ( public ms: MapasService ) {
    this.ms.cargarMarcadores();
  }


  clickMapa ( evento ) {

    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    }
    console.log(event);

    this.ms.insertarMarcador( nuevoMarcador );

  }


  clickMarcador( marcador: Marcador, index: number ) {
    console.log(marcador, index);
    this.marcadorSel = marcador;
    this.marcadorSel.draggable ? this.draggable = '1' : this.draggable = '0';
  }

  cambiarDragable() {
    console.log(this.draggable);
    this.draggable === '1' ? this.marcadorSel.draggable = true : this.marcadorSel.draggable = false;
  }

  dragEndMarcador( marcador: Marcador, evento ) {
    console.log(marcador, evento );
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this.ms.guardarMarcadores();
  }


}
