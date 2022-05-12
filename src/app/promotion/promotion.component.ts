import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor() { }

  heroes: string[] = [
    "https://merkaryviajes.com/wp-content/uploads/2022/04/ANDALUCIA-CON-MADRID2-1-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/04/ITALIA-COSTA-AZUL2-1-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/04/XCARET-1-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/02/DESTINO_DUBAIYTURQUIA-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/02/DESTINO_CARTAGENA-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/02/DESTINO_PUNTACANA_1-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/02/DESTINO_ARUBA-768x768.png",
    "https://merkaryviajes.com/wp-content/uploads/2022/02/DESTINO_PUNTACANA_2-1-768x768.png"
  ];

  ngOnInit(): void {
  }

}
