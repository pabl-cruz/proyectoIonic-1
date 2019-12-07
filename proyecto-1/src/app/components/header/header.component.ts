import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    tituloPagina: string = "Página principal";
    imagenBarra: string = "/assets/listado-01.png";

  constructor() {}

  ngOnInit() {}

}
