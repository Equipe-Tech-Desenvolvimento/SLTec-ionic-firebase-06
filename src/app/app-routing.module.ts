import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// 3.1) Importando dependências
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// 3.2) Se não está logado, roteia para 'login'
const toLogin = () => redirectUnauthorizedTo(['/user/login']);

// 3.3) Se está logado, roteia para a 'raiz'
const isLogged = () => redirectLoggedInTo(['/']);

const routes: Routes = [

  // Define página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // 3.4) Página acessíveis com/sem login
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },

  // 3.5) Páginas acessíveis somente se logado
  {
    path: 'test01',
    loadChildren: () => import('./pages/test01/test01.module').then(m => m.Test01PageModule),

    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'test02',
    loadChildren: () => import('./pages/test02/test02.module').then(m => m.Test02PageModule),

    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },

  // 3.6) Rotas para gestão de usuário ficam antes da rota '**'
  {
    path: 'user/login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule),

    // 3.7) Se está logado, não entra em login
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: isLogged }
  },
  {
    path: 'user/logout',
    loadChildren: () => import('./user/logout/logout.module').then(m => m.LogoutPageModule),
  },
  {
    path: 'user/new',
    loadChildren: () => import('./user/new/new.module').then(m => m.NewPageModule),

    // 3.8) Só se cadastra estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'user/profile',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule),

    // 3.9) Só vê perfil se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },

  // Página de 'erro 404' para rotas inexistentes. DEVE SER SEMPRE A ÚLTIMA ROTA!!!
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
