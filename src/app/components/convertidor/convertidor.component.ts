import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD'
  quiero = 'EUR'
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'MX']

  constructor(){}

  ngOnInit(): void {    
  }

  convertir(){
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.93
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 17.31
        }
        break;
      case 'EUR' :
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.08
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 18.69
        }
        break;
      case 'MX' :
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.058
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.054
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad
        }
        break;  
    }
  }
}
