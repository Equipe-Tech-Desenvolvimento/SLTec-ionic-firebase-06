# SLTec-ionic-firebase-06

Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.

## Branch '04_Somente_com_perfil'

Essas modificações evitam que o usuário (apenas) logado acesse páginas sem que seu perfil esteja completo.

Instruções para executar as atividades deste 'branch':

1) Crie o service que detecta se existe perfil

    - Edite 'app/services/app.service.ts' &rarr; 1 à 3

2) Para "proteger" a página 'profile' de acessos sem perfil

    - Edite 'app/user/profile/profile.page.ts' &rarr; 1 à 3

3) Para proteger outras páginas, por exemplo, 'test01'

    - Edite 'app/pages/test01/test01.page.ts' &rarr; 1 à 3

4) Como sugestão, remova o botão do menu do cadastro de perfil

    - Edite 'app/user/new/new.page.html' &rarr; 1

5) Troque a chamada do 'popup' de cadastro de perfil para o 'cadastro de perfil'

    - Edite 'app/user/login/login.page.ts' &rarr; 1
    - Edite 'app/user/new/new.page.ts' &rarr; 1 à 4

*EOF*
