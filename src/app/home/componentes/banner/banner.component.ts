import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-banner',
  templateUrl:'./banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{

  imagenes:string[] = [

    'assets/fondos/imagen15.jpeg',
    'assets/fondos/fondo3.jpg'
    

  ]

}
