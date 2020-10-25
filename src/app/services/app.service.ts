/**
 * Serviços de uso geral
 *    Aqui estão alguns serviços usados em toda ou parte do aplicativo
 * @author Por Luferat
 */

import { Injectable } from '@angular/core';

// 3.1) Importa dependências
import { Router } from '@angular/router'; // Roteamento
import { AlertController } from '@ionic/angular'; // Caixa de alerta

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(

    // 3.2) Injeção das dependências
    public router: Router, // Roteamento
    public alertController: AlertController, // Caixa de alerta
  ) { }

  // 3.3) Caixa de alerta para feedback (https://ionicframework.com/docs/api/alert)
  async myAlert(title: string, text: string) {
    const alert = await this.alertController.create({
      header: title,
      message: text,
      buttons: [{
        text: 'Ok',
        handler: () => { return true; }
      }]
    });
    await alert.present();
  }
}
