import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// 3.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local
import { EventsService } from './services/events.service'; // Dispara eventos globais

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  // 3.2) Variável com dados do usuário logado
  userData: any;

  // 10.1) Variável com perfil do usuário
  userProfile: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    // 3.3) Injeta dependências
    public events: EventsService, // Dispara eventos globais
    public storage: StorageMap, // Armazenamento local
  ) {
    this.initializeApp();
  }

  // Quando componente estiver pronto...
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // 3.4) Lê login no armazenamento local
    this.storage.get('userData', { type: 'string' }).subscribe({
      next: ((uData) => {

        // Se esta logago
        if (uData) {

          // Atualiza view
          this.userData = JSON.parse(uData);

          // 10.2) Testa se tem perfil (true ou false)
          this.storage.get('userProfile', { type: 'string' }).subscribe(
            (sData) => {
              this.userProfile = sData;
            }
          );
        }
      })
    });

    // 3.5) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (uData: any) => {
      this.userData = uData;
    });

    // 10.1) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userProfile', (pData: any) => {
      this.userProfile = pData;
    });
  }

  ngOnInit() { }
}
