import { Component, OnInit } from '@angular/core';

// 3.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // 3.2) Dados do login do usuário
  userData: any;

  constructor(

    // 3.3) Injeção de dependências
    private storage: StorageMap, // Armazenamento local
  ) { }

  ngOnInit() {

    // 3.4) Obtém dados do usuário
    this.storage.get('userData', { type: 'string' }).subscribe(
      (data) => this.userData = JSON.parse(data)
    );
  }

}
