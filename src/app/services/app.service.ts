/**
 * Serviços de uso geral
 *    Aqui estão alguns serviços usados em toda ou parte do aplicativo
 * @author Por Luferat
 */

import { Injectable } from '@angular/core';

// 3.1) Importa dependências
import { Router } from '@angular/router'; // Roteamento
import { AlertController } from '@ionic/angular'; // Caixa de alerta

// 4.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(

    // 3.2) Injeção das dependências
    public router: Router, // Roteamento
    public alertController: AlertController, // Caixa de alerta

    // 4.2) Injeção das dependências
    private storage: StorageMap, // Armazenamento local
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

  // 4.3) Método que detecta a presença do perfil local
  async isProfile() {

    // Constrói a promise
    return new Promise<any>((resolve, reject) => {

      // Lê o armazenamento local
      this.storage.get('userProfile', { type: 'string' }).subscribe({
        next: (data) => {

          // Se perfil, retorna 'true'
          if (data) resolve(true);

          // Se não tem perfil, retorna 'false'
          else resolve(false);
        },

        // Em caso de erro ao tentar acessar 'storage'
        error: (error) => console.error(error)
      });
    });
  }
}
