# SLTec-ionic-firebase-06

Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.

## Branch '03_Autenticacao_e_guard'

Neste 'branch' veremos como implementar o login usando com o login social do 'Firebase Authentication'.

Instruções para executar as atividades deste 'branch':

1) Instalar dependências

    - Comande ``ng add @ngx-pwa/local-storage``
        - Fonte: https://github.com/cyrilletuzi/angular-async-local-storage

2) Criar páginas de gestão de usuários

    - Comande ``ionic generate page user/login``
    - Comande ``ionic generate page user/logout``
    - Comande ``ionic generate page user/new``
    - Comande ``ionic generate page user/profile``
    - Comande ``ionic generate service services/app``

3) Implementando o Guards

    - Edite 'app/app-routing.module.ts' &rarr; 1 à 9

4) Adicionar 'login' no menu principal

    - Edite 'app/app.component.html' &rarr; 1

5) Editar view de gestão de usuários

    - Edite 'app/user/login/login.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;' 
    - Edite 'app/user/logout/logout.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;' 
    - Edite 'app/user/new/new.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;' 
    - Edite 'app/user/profile/profile.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'

6) Criar funcionalidades de login

    - Editar 'app/service/app.service.ts' &rarr; 1 à 3
    - Editar 'app/user/login/login.page.ts' &rarr; 1 à 5
    - Editar 'app/user/login/login.page.html' &rarr; 1
    - Editar 'app/user/login/login.page.scss' &rarr; 1

7) Criar funcionalidades de logout

    - Editar 'app/user/logout/logout.page.ts' &rarr; 1 à 3
    - Editar 'app/user/logout/logout.page.html' &rarr; 1

8) Exibir opções corretas no menu

    - Comande ``ionic generate service services/events``
    - Editar 'app/services/events.service' &rarr; 1 à 4
    - Editar 'app/app.component.ts' &rarr; 1 à 5
    - Editar 'app/user/login/login.page.ts' &rarr; 6
    - Editar 'app/user/logout/logout.page.ts' &rarr; 4

EOF
