# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Brach "10_Sistema_de_mensagens_01"

Neste 'branch', vamos iniciar a criação de um sistema de troca de mensagens entre os usuários do aplicativo. Inicialmente, vamos incluir os componentes e protegê-los contra acessos indevidos. Também faremos "ajustes" menores na "view" e otimizações do código.

Instruções para executar as atividades deste 'branch':

1) Crie as páginas e o componente de mensagens

	- Comande ``ionic generate page msg/inbox``
	- Comande ``ionic generate page msg/outbox``
	- Comande ``ionic generate page msg/send``
	- Comande ``ionic generate page msg/view``
	- Comande ``ionic generate component components/message``

2) Adicione o ícone do menu principal e edite o título das páginas nas 'views'

	- Edite "app/msg/inbox/inbox.page.html" &rarr; 1
	- Edite "app/msg/outbox/outbox.page.html" &rarr; 1
	- Edite "app/msg/send/send.page.html" &rarr; 1
	- Edite "app/msg/view/view.page.html" &rarr; 1

3) O menu principal mostra links para mensagens, mas, apenas para usuarios com perfil cadastrado

	- Edite "app/app.component.html" &rarr; 1
	- Edite "app/app.component.ts" &rarr; 1 à 2

4) Proteja as páginas de mensagem contra usuários sem perfil

	- Edite "app/msg/inbox/inbox.page.ts" &rarr; 1 à 4
	- Edite "app/msg/outbox/outbox.page.ts" &rarr; 1 à 4
	- Edite "app/msg/send/send.page.ts" &rarr; 1 à 4
	- Edite "app/msg/view/view.page.ts" &rarr; 1 à 4

5) Configure "login" para atualizar o menu principal com o perfil

	- Edite "app/user/login.page.ts" &rarr; 1
	- Edite "app/user/logout.page.ts" &rarr; 1
	- Edite "app/app.component.ts" &rarr; 3
	- Edite "app/components/profile.component.ts" &rarr; 1 à 3
	- Edite "app/components/profile.component.html" &rarr; 1 à 2

6) Exibindo um botão de login em 'home' para usuários não logados

	- Edite "app/pages/home/home.page.html" &rarr; 1 
	- Edite "app/pages/home/home.page.ts" &rarr; 1 à 5

7) Conclusão

    - Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

*EOF*
