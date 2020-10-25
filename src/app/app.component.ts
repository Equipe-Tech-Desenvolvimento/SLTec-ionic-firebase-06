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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // 3.4) Lê login no armazenamento local
    this.storage.get('userData', { type: 'string' }).subscribe({
      next: ((data) => {

        // Se esta logago
        if (data) {

          // Atualiza view
          this.userData = JSON.parse(data);
        }
      })
    });

    // 3.5) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (data: any) => {
      this.userData = data;
    });
  }

  ngOnInit() { }
}
