import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  expressao: any;
  resultado: any;

  constructor() {
    this.expressao = '0';
    this.resultado = '';
  }

  limpar() {
    this.expressao = '0';
    this.resultado = '';
  }

  addValue(value: any) {
    if (this.expressao === '0') {
      this.expressao = value;
    }else {
      this.expressao += value;
    }
  }

  bck() {
    if (this.expressao.length === 1) {
      this.expressao = '0';
    } else if (this.expressao !== '' && this.calcular() === this.expressao) {
      this.limpar();
    } else {
      let novaExpressao = this.expressao.split('');
      novaExpressao.pop();
      this.expressao = novaExpressao.join('');
    }
  };

  calcular() {
    if (this.expressao !== '' && this.expressao !== '0') {
      this.expressao = eval(this.expressao);
      return this.expressao;
    }
  }
};
