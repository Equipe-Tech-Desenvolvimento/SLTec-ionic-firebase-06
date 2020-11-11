import { Component, OnInit } from '@angular/core';

// 11)
import { AngularFirestore } from '@angular/fire/firestore';

// 10.1) Importa dependências
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  // 10.3) Armazena dados do usuário
  userData: any;
  userProfile: any;

  // 11)
  inboxList: any;

  constructor(

    // 10.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,

    // 11)
    public fbStore: AngularFirestore,
  ) { }

  ngOnInit() { }

  // 10.4) Se tem perfil, obtém dados.
  //       Se não tem, vai para "novo perfil"
  ionViewWillEnter() {

    // Testa o perfil local (true e false)
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {

          // Obtém dados do login local e armazena em 'userData'
          this.storage.get('userData', { type: 'string' }).subscribe(
            (uData) => {
              this.userData = JSON.parse(uData);

              // Obtém dados do perfil local e armazena em 'userProfile'
              this.storage.get('userProfile', { type: 'string' }).subscribe(
                (pData) => {
                  this.userProfile = JSON.parse(pData);

                  // 11)
                  this.listInbox();
                }
              );
            }
          );

          // Se não existe perfil, vai para o cadastro de perfil
        } else {
          this.router.navigate(['/user/new']);
        }
      });
  }

  // 11)
  listInbox() {

    // 11) Lê mesangens do banco de dados
    this.fbStore.collection(`messages/${this.userData.uid}/inbox`, ref => ref.orderBy('date')).valueChanges().subscribe(
      (mData) => {
        this.inboxList = mData;
      });
  }

  // 11)
  getShowUserName(uid: string) {

    this.fbStore.collection('users').doc(uid).valueChanges().subscribe(

      (uData) => {
        console.log(uData);
      }

    );

    return uid;
  }
}
