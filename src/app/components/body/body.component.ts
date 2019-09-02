import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: any = {
    mensaje: 'Un gran poder requiere responsabilidad',
    autor: 'Bencito Parker'
  };
  mostrar: boolean = true;

  personajes: string[] = ['Spiderman','Capitan','IronMan'];
  constructor() { }

  ngOnInit() {
  }
  setMostrar() {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

}
