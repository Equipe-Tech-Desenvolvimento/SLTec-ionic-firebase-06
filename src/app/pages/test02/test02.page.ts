import { Component, OnInit } from '@angular/core';

//
import { Router } from '@angular/router'; // Roteamento
import { AppService } from '../../services/app.service'; // Serviços de uso geral

@Component({
  selector: 'app-test02',
  templateUrl: './test02.page.html',
  styleUrls: ['./test02.page.scss'],
})
export class Test02Page implements OnInit {

  constructor(

    //
    public router: Router,
    public app: AppService,
  ) { }

  ngOnInit() { }

  //
  ionViewWillEnter() {
    this.app.isProfile()
      .then((data) => {
        if (data) {
          console.log('bla bla bla');
        } else {
          this.router.navigate(['/user/new']);
        }
      })
      .catch((error) => console.log(error));
  }
}