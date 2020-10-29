import { Component, OnInit } from '@angular/core';

// 4.1) Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(

    // 4.2) Injeta dependências
    public router: Router,
    public app: AppService,
  ) { }

  ngOnInit() { }

  // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
  //      https://ionicframework.com/blog/navigating-lifecycle-events/
  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {
          console.log('bla bla bla');

          // Se não existe, vai para o cadastro de perfil
        } else {
          this.router.navigate(['/user/new']);
        }
      });
  }

}
