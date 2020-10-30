import { Component, OnInit } from '@angular/core';

// 5.1) Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

// 5.8) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

// 6.2) Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  // 5.2) Cria formulário
  public profileForm: FormGroup;

  // 5.9) Variável com dados do usuário logado
  userData: any;

  // 6.3) Variável com a lista "select01"
  select01Data: any;

  constructor(

    // 5.3) Injeta dependências
    private formBuilder: FormBuilder,

    // 5.10) Injeta dependências
    public storage: StorageMap,
    public router: Router,

    // 6.4) Injeta dependências
    public fbStore: AngularFirestore,
  ) {

    // 5.11) Obtém dados do usuário logado
    this.storage.get('userData', { type: 'string' }).subscribe((data) => {

      // 5.12) Se não logou, vai para a raiz
      if (!data) this.router.navigate(['/']);

      // 5.13) Dados do usuário logado
      this.userData = JSON.parse(data);

      // 6.5) Obtém lista "select01" do Firestore de forma assíncrona
      this.select01Data = this.fbStore.collection('select01', ref => ref.orderBy('option')).valueChanges();

      // 5.4) Cria formulário
      this.profileFormCreate();
    });
  }

  ngOnInit() { }

  // 5.6) Define campos do formulário e validações
  profileFormCreate() {
    this.profileForm = this.formBuilder.group({

      id: [

        // 5.14) Preenche o uid do perfil em 'id'
        this.userData.uid
      ],

      name: [

        // 5.15) Preenche o nome do perfil em 'name'
        this.userData.displayName,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      birth: [
        null,
        Validators.compose([
          Validators.required,
          this.over14Years
        ])
      ],
      cpf: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\b\d{11}\b/g)
        ])
      ],

      // 6.7) Cria campo tipo 'radio'
      gender: [
        null,

        // 6.8) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      email: [

        // 5.16) Preenche o email do perfil em 'email'
        this.userData.email,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      homePhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|8[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      cellPhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      whatsApp: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],

      // 6.1) Cria campo tipo 'select'
      selectStatic: [
        'Opção 2',

        // 6.9) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      // 6.6) Cria campo tipo 'select'
      selectDynamic: [
        null,

        // 6.10) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      type: ['user'],
      status: ['active']

    });
  }

  // 5.6) Método que trata envio do formulário
  profileSubmit() {
    console.log('foi');
  }

  // 5.7) Método que valida data de nascimento
  over14Years(control: AbstractControl) {
    const birth = control.value;
    if (birth) {
      const [year, month, day] = birth.split('-');
      const today = new Date();
      const dateBirth = new Date(year, month, day, 0, 0, 0);
      const timeToTest = 1000 * 60 * 60 * 24 * 365 * 14; // 14 anos em milissegundos...
      if (today.getTime() - dateBirth.getTime() >= timeToTest) return null;
    }
    return { under14years: true };
  }
}
