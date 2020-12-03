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

  // 9.1) Rota para edição de perfil
  {
    path: 'user/edit',
    loadChildren: () => import('./user/edit/edit.module').then(m => m.EditPageModule),

    // 9.2) Só vê perfil se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },

  // 10.1) Sistema de mensagens (somente logado)
  {
    // 12.1) Rota para exibir uma mensagem única
    path: 'msg/view/:msgBox/:msgId',
    loadChildren: () => import('./msg/view/view.module').then(m => m.ViewPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'msg/send',
    loadChildren: () => import('./msg/send/send.module').then(m => m.SendPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'msg/inbox',
    loadChildren: () => import('./msg/inbox/inbox.module').then(m => m.InboxPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'msg/outbox',
    loadChildren: () => import('./msg/outbox/outbox.module').then(m => m.OutboxPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },


  {
    path: 'residuo',
    loadChildren: () => import('./residuos/residuo/residuo.module').then( m => m.ResiduoPageModule),

    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  
  {
    path: 'config',
    loadChildren: () => import('./user/config/config.module').then( m => m.ConfigPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },

  {
    // 16.1) Rota para apagar conta
    path: 'user/delete',
    loadChildren: () => import('./user/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },

  {
    path: 'metais',
    loadChildren: () => import('./residuos/metais/metais.module').then( m => m.MetaisPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'madeira',
    loadChildren: () => import('./residuos/madeira/madeira.module').then( m => m.MadeiraPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'tecidos',
    loadChildren: () => import('./residuos/tecidos/tecidos.module').then( m => m.TecidosPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'papelao',
    loadChildren: () => import('./residuos/papelao/papelao.module').then( m => m.PapelaoPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    path: 'couro',
    loadChildren: () => import('./residuos/couro/couro.module').then( m => m.CouroPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },



// horário de Couro

{
  path: 'segundacouro',
  loadChildren: () => import('./horarios/couro/segundacouro/segundacouro.module').then( m => m.SegundacouroPageModule)
},
{
  path: 'tercacouro',
  loadChildren: () => import('./horarios/couro/tercacouro/tercacouro.module').then( m => m.TercacouroPageModule)
},
{
  path: 'quartacouro',
  loadChildren: () => import('./horarios/couro/quartacouro/quartacouro.module').then( m => m.QuartacouroPageModule)
},
{
  path: 'quintacouro',
  loadChildren: () => import('./horarios/couro/quintacouro/quintacouro.module').then( m => m.QuintacouroPageModule)
},
{
  path: 'sextacouro',
  loadChildren: () => import('./horarios/couro/sextacouro/sextacouro.module').then( m => m.SextacouroPageModule)
},

// horário de Madeira

{
  path: 'segundamadeira',
  loadChildren: () => import('./horarios/madeira/segundamadeira/segundamadeira.module').then( m => m.SegundamadeiraPageModule)
},
{
  path: 'tercamadeira',
  loadChildren: () => import('./horarios/madeira/tercamadeira/tercamadeira.module').then( m => m.TercamadeiraPageModule)
},
{
  path: 'quartamadeira',
  loadChildren: () => import('./horarios/madeira/quartamadeira/quartamadeira.module').then( m => m.QuartamadeiraPageModule)
},
{
  path: 'quintamadeira',
  loadChildren: () => import('./horarios/madeira/quintamadeira/quintamadeira.module').then( m => m.QuintamadeiraPageModule)
},
{
  path: 'sextamadeira',
  loadChildren: () => import('./horarios/madeira/sextamadeira/sextamadeira.module').then( m => m.SextamadeiraPageModule)
},



// horário de Metais


{
  path: 'segundametal',
  loadChildren: () => import('./horarios/metal/segundametal/segundametal.module').then( m => m.SegundametalPageModule)
},
{
  path: 'tercametal',
  loadChildren: () => import('./horarios/metal/tercametal/tercametal.module').then( m => m.TercametalPageModule)
},
{
  path: 'quartametal',
  loadChildren: () => import('./horarios/metal/quartametal/quartametal.module').then( m => m.QuartametalPageModule)
},
{
  path: 'quintametal',
  loadChildren: () => import('./horarios/metal/quintametal/quintametal.module').then( m => m.QuintametalPageModule)
},
{
  path: 'sextametal',
  loadChildren: () => import('./horarios/metal/sextametal/sextametal.module').then( m => m.SextametalPageModule)
},




// horário de Papelão


{
  path: 'segundap',
  loadChildren: () => import('./horarios/papelao/segundap/segundap.module').then( m => m.SegundapPageModule)
},
{
  path: 'tercap',
  loadChildren: () => import('./horarios/papelao/tercap/tercap.module').then( m => m.TercapPageModule)
},
{
  path: 'quartap',
  loadChildren: () => import('./horarios/papelao/quartap/quartap.module').then( m => m.QuartapPageModule)
},
{
  path: 'quintap',
  loadChildren: () => import('./horarios/papelao/quintap/quintap.module').then( m => m.QuintapPageModule)
},
{
  path: 'sextap',
  loadChildren: () => import('./horarios/papelao/sextap/sextap.module').then( m => m.SextapPageModule)
},




// horário de Tecidos


{
  path: 'segundat',
  loadChildren: () => import('./horarios/tecido/segundat/segundat.module').then( m => m.SegundatPageModule)
},
{
  path: 'tercat',
  loadChildren: () => import('./horarios/tecido/tercat/tercat.module').then( m => m.TercatPageModule)
},
{
  path: 'quartat',
  loadChildren: () => import('./horarios/tecido/quartat/quartat.module').then( m => m.QuartatPageModule)
},
{
  path: 'quintat',
  loadChildren: () => import('./horarios/tecido/quintat/quintat.module').then( m => m.QuintatPageModule)
},
{
  path: 'sextat',
  loadChildren: () => import('./horarios/tecido/sextat/sextat.module').then( m => m.SextatPageModule)
},


  // Página de 'erro 404' para rotas inexistentes. DEVE SER SEMPRE A ÚLTIMA ROTA!!!
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },

 

  
  

  
 

  

 


  


 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
