import { Component, OnInit } from '@angular/core';

//
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
