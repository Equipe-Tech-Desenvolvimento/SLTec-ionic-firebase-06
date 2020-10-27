import { Component, OnInit } from '@angular/core';

//
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.page.html',
  styleUrls: ['./test01.page.scss'],
})
export class Test01Page implements OnInit {

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
