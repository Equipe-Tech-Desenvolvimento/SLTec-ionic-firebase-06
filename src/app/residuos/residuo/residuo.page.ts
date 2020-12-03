import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residuo',
  templateUrl: './residuo.page.html',
  styleUrls: ['./residuo.page.scss'],
})
export class ResiduoPage implements OnInit {

  constructor(
    public app: AppService,
    public router: Router,
  ) { }

  ngOnInit() {  }

  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se não existe, faz as ações da página
        if (!data) {
          this.router.navigate(['/user/new']);
        }

      });
  }

}
