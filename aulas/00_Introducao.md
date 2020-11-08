# Site da Web com Angular

Este curso, tem como objetivo descrever todos os passos para a criação de um **aplicativo Web** que é um site informativo bem simples, mas com recursos úteis, usando como base o framework **[Angular](https://angular.io/)** para desenvolver o "front-end" e a **API do [Firebase.com](https://firebase.com/)** no "back-end".

## Índice

* [Formato do curso](#formato-do-curso)
* [Pré-requisitos](#pré-requisitos)
* [Sobre o Angular](#sobre-o-angular)
* [Sobre o aplicativo Web](#sobre-o-aplicativo-web)
  + [Recursos utilizados e preparação do ambiente](#recursos-utilizados-e-preparação-do-ambiente)
  + [Recursos externos](#recursos-externos)

## Formato do curso

Todo o curso está no GitHub.com. O conteúdo de cada aula fica armazenado em um "branch" diferente e o "branch master" sempre contém a versão mais recente do aplicativo Web. Neste mesmo "branch da aula", no diretório "aulas", você encontra o documento com os passos desta aula e das anteriores também.

Cada passo no documento da aula indica uma ação, por exemplo, **na aula 3**, aparece:

`` `• Edite 'app/app.component.ts' → 1 à 5` ``

Isso indica que você deve abrir o arquivo 'app/app.component.ts' e localizar os comentários. No caso, todos os comentários iniciados com ` `3.X)`  ` são relacionados à **aula 3** e neste caso, você deve localizar os comentários '` 3.1), 3.2), ..., 3.5)`' para executar as atividades desta ação específica.

Ou seja, todas as explicações necessárias estão nos comentários, nos próprios arquivos (códigos fonte) a serem editados.

## Pré-requisitos

Para fazer este curso, é importante que você tenha algum conhecimento de programação Web (HTML, CSS e JavaScript) e que tenha bastante vontade de pesquisar, tanto nas documentações oficiais dos frameworks e componentes, quanto em outras fontes, além, é claro de um computador conectado à Internet. Ter algum domínio no uso do Git e do GitHub.com, que serão muito importantes e são fundamentais para qualquer programador.

Se quiser aprender a usar o Git e o GitHub.com de forma satisfatória, recomendo o curso abaixo:

[![Curso de Git e GitHub sem usar comandos do terminal: ](https://lh5.googleusercontent.com/hImN-LhhdbiXvsM9Ed5fRLU2KW-74iGS0bH-Qqf2gkVG1OFA5IzcTM_UBgwLKh54aFCqS236OqlgjB7WaRIruBFJQAPQNByuoScHaIR-va2820P5hGp0=w1280)](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)

## Sobre o Angular

> *Angular (comumente referido como "Angular 2+" ou "Angular 2") é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu. [Wikipedia](https://pt.wikipedia.org/wiki/Angular_%28framework%29)*

Importante! Durante suas pesquisas, cuidado para não confundir *Angular* com *AngularJS*!

Para saber mais sobre o Angular:

 - [Wikipedia](https://pt.wikipedia.org/wiki/Angular_%28framework%29)
 - [Site oficial, incluindo documentação](https://angular.io/)
 - [Diversos cursos e tutoriais gratuitos no Youtube](https://www.youtube.com/results?search_query=criando%20Sites%20com%20Angular)
 - [Cursos gratuitos de Angular na Udemy](https://www.udemy.com/courses/search/?price=price-free&q=angular&sort=relevance&src=ukw)
 - [Tutoriais completos de Angular na Medium](https://medium.com/search?q=Angular)
 - ...

## Sobre o aplicativo Web

Como vimos, o objetivo é "criar" um site informativo da Web, com uma seção de artigos, notícias atualizadas e um formulário de contados simples.

Também teremos uma área restrita para assinantes cadastrados e logados, para que eles tenham acesso a conteúdos exclusivos.

### Recursos utilizados e preparação do ambiente

Assim como a maioria dos framework, o Angular tem uma série de dependências para que possamos desenvolver nossas aplicações Web. Veja abaixo a lista de dependências e aproveite para preparar seu computador.

*Nas aulas, sempre usaremos como base um computador atual com Windows 10 em português do Brasil e conectado à Internet. Caso você use outro sistema operacional, deve ter proficiência suficiente para adaptar-se!* &#128521; 

#### Node.js versão 14.15.0 ou superior 

O Node.js pode ser baixado do [site oficial](https://nodejs.org/pt-br/). Lembre-se apenas de baixar sempre uma distribuição LTS (Long Term Support). A instalação é padrão de qualquer aplicativo do sistema (*Avançar... Avançar... Concluir...*).

O instalador do Node.js já inclui o gestor de pacotes "NPM" (Node.js Package Manager) que usaremos para baixar e instalar quase tudo e o aplicativo "Node.js command prompt" onde executamos os comandos do *Angular CLI*...

#### Git versão 2.29.2 ou superior

Git é um aplicativo de versionamento, responsável pela gestão dos "banches" e outros recursos relacionados.

A versão mais recente pode ser baixada do site oficial e a instalação é padrão de qualquer aplicativo do sistema (*Avançar... Avançar... Concluir...*).

#### Visual Studio Code versão 1.50.1 ou superior

O *VSCode* é a IDE (Integrated Development Environment) do momento, então, baixe do site oficial e instale. A instalação é padrão de qualquer aplicativo do sistema (*Avançar... Avançar... Concluir...*).

#### Google Chrome

Se um site em Angular não funcionar no Chrome, não funcionará em nenhum outro lugar!

Usaremos as "Ferramentas do desenvolvedor" do Chrome, o tempo todo. Depois de funcionar no Chrome, você poderá testar outros navegadores, mas o desenvolvimento será nele.

##### Algumas dicas sobre o Chrome

O Google Chrome é o navegador mais usado na atualidade, com mais de 60% do mercado, portanto, é muito visado pelos "mau intencionados" e, se você o usa, provavelmente, ele está sobrecarregado de lixo e coisas inúteis, então, sugiro que siga os procedimentos abaixo para "otimizar" seu ambiente e minimizar a possibilidade de "bugs estranhos":

*Dica: use o checklist para ajudar nos passos...*

1) **Limpe as "entranhas" do navegador:**

	 - [ ] Com o navegador aberto, tecle (Windows) `[Ctrl]` + `[Alt]` + `[Del]` ;
	 - [ ] Em "Limpar dados de navegação" clique na guia "Avançado";
	 - [ ] Selecione em "Período", "Todo o período";
	 - [ ] Marque TODAS as caixas abaixo, sem excessão;
	 - [ ] Clique no botão `[Limpar dados]` ;
	 - [ ] Quando terminar, navegue até o endereço `chrome://settings/` ;
	 - [ ] Role a tela até o final e clique em "Avançado &#x25BC;";
	 - [ ] Role a tela até o final e clique em "Restaurar configurações para os padrões originais";
	 - [ ] Clique no botão `[Redefinir configurações]` . 

2) **Faça uma limpeza no sistema**

  + [ ] Etapa 1: baixe e instale o a versão gratuita do Ccleaner do [site oficial](https://www.ccleaner.com/pt-br/ccleaner/download/standard);

*Fique atento durante a instalação, para **não instalar** os aplicativos extra, sugeridos...*

  + [ ] Etapa 2: limpeza do sistema:

		 - [ ] Abra o Ccleaner e selecione a ferramenta "Limpeza personalizada";
		 - [ ] Na aba "Windows", marque **TODAS** as opções, **exceto a última**;
		 - [ ] Na aba "Programas", marque **TODAS** as opções, sem medo!
		 - [ ] Clique no botão `[Executar limpeza]` ;
		 - [ ] Quando concluir, repita o passo acima, mais duas vezes, pelo menos...

  + [ ] Etapa 3: limpeza do registro

		 - [ ] Selecione a ferramenta "Registro";
		 - [ ] Clique no botão `[Procurar erros]` ;
		 - [ ] Quando concluir, clique em `[Corrigir erro(s) selecionado(s)...]` ;
		 - [ ] Na questão "Quer fazer backup do registro antes de fazer alterações?", clique no botão `[Não]` ;
		 - [ ] Clique em `[Corrigir todos os erros selecionados]` ;
		 - [ ] Clique em `[Fechar]` e repita os passos acima, à partir do botão `[Procurar erros]` , até que não apareçam mais erros a serem corrigidos.

  + [ ]  Etapa 4: desinstalando programas inúteis
    - [ ] Selecione a ferramenta "Ferramentas" e a opção "Desinstalar";
    - [ ] Você pode ter muitos programas **inúteis** instalados aí, não é mesmo?
    - [ ] Encontre e remova cada um, selecionando-o na lista e clicando em `[Desinstalar]`.

3) **Desinstale, baixe e instale o navegador**
Isso mesmo! 

  + [ ] Após limpar todos os rastros do Chrome e limpar tudo, remova-o do sistema usando a ferramenta "Ferramentas &gt; Desinstalar" do "Ccleaner" ou pelo "Painel de controles", em "Adicionar ou remover programas";
  + [ ] Baixe-o novamente do [site oficial](https://www.google.com/intl/pt-BR/chrome/), usando outro navegador;
  + [ ] Instale-o novamente.

#### Angular CLI versão 10.2.0 ou superior

Para baixar e instalar a versão mais recente do Angular, localize e "rode" o aplicativo "**Node.js command prompt**". Nele, digite o comando:

` `npm install -g @angular/cli` `
 
 Este comando, instala a CLI (Command Line Interface) do Angular, com todos os comandos necessários para criar as páginas e outros elementos do site, além de tarefas como "rodar" o site no servidor local e compilar a versão de produção.

### Recursos externos

#### Firebase

Como veremos o Angular só "gera" o "front-end" da aplicação Web, assim, vamos precisar de um "back-end" que foneça um banco de dados confiável, além de outras ferramentas "serve-side". Usaremos neste projeto os serviços da plataforma [Firebase.com](https://firebase.com/) do Google que é acessível via API JavaScript e já entrega o "back-end" praticamente pronto.

Se você já tem uma conta no Gmail ou outro serviço do Google, já tem acesso ao "Console do Firebase". Se não tem, crie um Gmail...

#### GitHub

> *GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. [Wikipédia](https://pt.wikipedia.org/wiki/GitHub)*

Todos os códigos deste curso estão "depositados" no serviço GitHub.com, inclusive, o próprio "Angular CLI" e os "node-modules" usados com ele, assim, é essencial que você, se ainda não tem, crie uma conta no serviço. Além de guardar seus códigos você poderá testar o site, publicando-o no "[GitHub Pages](https://pages.github.com/)".
