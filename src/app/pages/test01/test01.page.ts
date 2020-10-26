import { Component, OnInit } from '@angular/core';

// 
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router'; // Roteamento

@Component({
  selector: 'app-test01',
  templateUrl: './test01.page.html',
  styleUrls: ['./test01.page.scss'],
})
export class Test01Page implements OnInit {

  constructor(
    public storage: StorageMap,
    public router: Router,
  ) { }

  ngOnInit() {

    const st = this.storage.get('userProfile', { type: 'string' }).subscribe(
      (data) => {
        if (!data) {
          this.router.navigate(['/user/new']);
          st.unsubscribe();
        };
      }
    );
  }
}
