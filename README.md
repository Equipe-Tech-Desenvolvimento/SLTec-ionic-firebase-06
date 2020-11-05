
# SLTec-ionic-firebase-06
__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Brach "08_Formulario_editar_perfil"

Neste 'branch', vamos exibir o formulário para editar o perfil do usuário, com os campos já preenhidos:

Instruções para executar as atividades deste 'branch':

1) Gere a página para exibir o formulário

	Comande `ionic generate page user/edit`

2) Instale as devidas dependências

	Comande ``npm install rxjs@6 rxjs-compat@6 --save``

&nbsp;&nbsp;&nbsp;&nbsp;Referência: https://github.com/angular/angularfire/issues/1748

3) Ajuste as rotas

	Edite 'app/app-routing.module.ts' &rarr; 1 à 2

4) Ao clicar no botão de editar, acessa a página para editar

	Edite 'app/user/profile/profile.page.html' &rarr; 1 

5) Importe o componente e o *ReactiveForms* na página de editar perfil 

    - Edite 'app/user/edit/edit.module.ts' &rarr; 1 à 3
    - Edite 'app/user/edit/edit.page.html' &rarr; 1 à 2

5) Edite o formulário para obter os dados do perfil quando houver

	- Edite 'app/components/profile/profile.component.ts' &rarr; 1 à 8
	- Edite 'app/components/profile/profile.component.html' &rarr; 1 à 