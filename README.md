
# SLTec-ionic-firebase-06
__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Visão Geral
O objetivo deste aplicativo é servir de base para os aplicativos híbridos dos projetos integradores das disciplinas de criação de aplicativos híbridos dos cursos de TI.
  
### Objetivos do Aplicativo
Esse aplicativo não tem uma funcionalidade final definida. Use-o como base para desenvolver aplicativos específicos que usam as mesmas funcionalidades propostas.

Outra aplicação é usar partes, recursos e conceitos no seu aplicativo final.

### Características
* Plataforma:
	+ Node.js 12.19.0 LTS
	+ Ionic Capacitor
* Front-end:
	+ Ionic 6.12.0
	+ Angular 10.0.8
* Back-end:
	+ Social Login &rarr; Firebase Authentication 8.13.1
	+ Database &rarr; Firebase Cloud Firestore 8.13.1

## Como Funciona
O aplicativo está sendo desenvolvido na forma de "aulas", onde cada aula implementa um conjunto de recursos inter-relacionados.  

Cada aula fica em um "branch" separado e as instruções do "branch/aula" estão no arquivo **README.md** do "branch".  

### Lista de Branches
- `master` &rarr; Versão mais recente do aplicativo com os "branches" já validados, integrados. Também inclui a versão funcional do aplicativo para a Web;
- `00_Aplicativo_Ionic_criado` &rarr; Aplicativo Ionic recém criado;
- `01_Ajustes_iniciais` &rarr; Estrutura básica do aplicativo com páginas estáticas;
- `02_Conexao_com_Firebase` &rarr; Configuração do aplicativo no Firebase e conexão com o aplicativo híbrido;
- `03_Autenticacao_e_guard` &rarr; Implementa autenticação usando "Login Social" e Firebase Authentication;
- `04_Somente_com_perfil` &rarr; Evita que o usuário "apenas logado" acesse páginas sem que seu perfil esteja completo;
- `05_Formulario_de_perfil` &rarr; Criação da página de cadastro de novo perfil, acessível quando um usuário se loga pela primeira vez;
- `06_Novos_campos` &rarr; Criação de novos tipos de campos no formulário;
- `07_Salvando_perfil` &rarr; Salva perfil já validado no Firestore e no armazenamento local.
- `08_Obter_perfil` &rarr; Exibe perfil do usuário logado.
- `09_Formulario_editar_perfil` &rarr; Permite que o usuário edite seu perfil.
- `10_Sistema_de_mensagens_01` &rarr; Preparação para implementar o sistema de mensagens.
- `11_Sistema_de_mensagens_02` &rarr; Lista de mensagens recebidas do sistema de mensagens.

**Novos branches serão incluídos conforme novas aulas estejam prontas.*

## Obtendo e Testando

*Você pode ver a versão Web mais recente do aplicativo rodando no endereço https://luferat.github.io/SLTec-ionic-firebase-06/.*

Para baixar o aplicativo, instalar e testar no seu PC, siga estes passos, levando em conta que você já tem algum conhecimento dos pré-requisitos como *[Node.js](https://nodejs.org/pt-br/)*, *[Git](https://git-scm.com/)*, *[Ionic](https://ionicframework.com/)*, *[Firebase](https://firebase.google.com/)*, *[Android Studio](https://developer.android.com/studio)*,  *[Xcode](https://apps.apple.com/br/app/xcode/id497799835?mt=12)*, etc:
- Acesse o repositório "master" do aplicativo;
- Faça um "fork" do repositório na sua conta do "GitHub.com";
- "Clone" seu repositório em seu PC local;
- Em um "Node.js command prompt", acesse o diretório onde clonou o aplicativo;
- Comande `npm install` para baixar e instalar todas as dependências;
- Após a instalação, comande `ionic serve` para compilar e rodar o aplicativo no PC local (*http://localhost:8100*).

### Testando no Android ou iOS
O aplicativo já tem suporte nativo ao [Ionic Capacitor](https://capacitorjs.com/), permitindo a execução direta em um dispositivo Android ou iOS compatível. 

Para isso, encerre o aplicativo no “Node.js command prompt” e comande:
```
ionic capacitor build
ionic capacitor build android
ionic capacitor build ios
```
A instalação no Android será feita pelo "[Android Studio](https://developer.android.com/studio)" e no iOS pelo "[Xcode](https://apps.apple.com/br/app/xcode/id497799835?mt=12)" que, em cada plataforma, deve estar previamente configurado e conectado ao dispositivo mobile.

Para mais informações sobre o *Capacitor*, consulte a [documentação](https://ionicframework.com/docs/cli/commands/build).

### Publicando na Web
Se quiser, você pode publicar a versão Web. Os procedimentos abaixo são para publicação no *[GitHub Pages](https://pages.github.com/)*:

1) Prepare o repositório no GitHub.com:
	- Acesse o repositório do aplicativo no seu GitHub.com;
	- Clique em "Settings" para entrar nas configurações do repositório;
	- Localize a seção "GitHub Pages";
	- Em "Source", selecione "branch: master" &rarr; "/docs" e clique em [Save];
	- Quando a página recarregar, retorne à seção "GitHub Pages" e **anote** o URL do aplicativo que está após "Your site is published at...";

2) Prepare o aplicativo local:
	- Encerre o aplicativo no “Node.js command prompt”, se necessário;
	- Troque para o "branch master" no Git;
	- Abra o arquivo "angular.json" que está na raiz do projeto, no editor;
	- Localize a chave ``"projects" > "app" > "architect" > "build" > "options"``;
	- Altere o valor da chave ``"baseHref"`` para o endereço fornecido pelas configurações do repositório no GitHub Pages;
	- Salve e feche o arquivo;
	- Gere o "build" do aplicativo, comandando ``ionic build``;
	- Após gerar o "build", na raiz do projeto, renomeie o diretório "www" para "docs";

3) Publicando:
   - Faça o "push" do "branch master" para o repositório remoto;
   - No navegador, acesse o endereço do GitHub Pages configurado.

*Existem diversas formas de publicar seu aplicativo Web, esta é apenas uma delas...*

## Contribuindo
Existem várias formas de contribuir, mas, a principal é fazendo um "fork", clonando no seu PC local e testando o aplicativo. Corrija bugs, otimize o código e a documentação, implemente novos recursos...

Melhor ainda se você der um objetivo mais específico para o aplicativo, mostrando que ele tem aplicação prática.

Só não esqueça de compartilhar sua evolução conosco!

*EOF*