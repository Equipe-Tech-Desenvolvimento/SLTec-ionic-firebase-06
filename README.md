# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Branch '01_Ajustes_iniciais'

Neste 'branch' vamos criar a estrutura básica do aplicativo, com algumas páginas genéricas.

Instruções para executar as atividades deste 'branch':

1) Criar as páginas de uso geral e para alguns testes

    - Execute ``ionic generate page pages/home``
    - Execute ``ionic generate page pages/e404``
    - Execute ``ionic generate page pages/info``
    - Execute ``ionic generate page pages/contacts``
    - Execute ``ionic generate page pages/test01``
    - Execute ``ionic generate page pages/test02``

2) Editar rotas e definir a 'página inicial' e a 'página 404'

    - Edite 'app/app-routing.module.ts' &rarr; Organizar rotas iniciais

3) Editar 'index.html'

    - Edite 'index.html' &rarr; 'lang' e '&lt;title&gt;'

4) Editar páginas criadas para melhorar o visual

    - Edite 'app/pages/contacts/contacts.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'app/pages/e404/e404.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'app/pages/home/home.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'app/pages/info/info.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'app/pages/test01/test01.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'app/pages/test02/test02.page.html' &rarr; botão 'menu', '&lt;ion-title&gt;' e '&lt;ion-content&gt;'
    - Edite 'global.scss' &rarr; 'Remove margin do primeiro elemento de bloco'

5) Editar menu principal

    - Edite 'app/app.component.ts' &rarr; Remover variáveis 'selectedIndex', 'appPages' e 'labels'
    - Edite 'app/app.component.ts' &rarr; Remover conteúdo de ngOnInit(){}
    - Edite 'app/app.component.html' &rarr; *
    - Edite 'app/app.component.scss' &rarr; 1 à 4

6) Conclusão

    - Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

*EOF*
