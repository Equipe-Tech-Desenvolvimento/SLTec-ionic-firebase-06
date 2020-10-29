# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Índice

* [SLTec-ionic-firebase-06](#sltec-ionic-firebase-06)
  + [Índice](#índice)
  + [Sobre este aplicativo](#sobre-este-aplicativo)
    - [Características e recursos:](#características-e-recursos)
  + [Aulas x Branches](#aulas-x-branches)
    - [Branches:](#branches)
  + [Versão "compilada"](#versão-compilada)
    - [Como rodar o aplicativo no meu PC](#como-rodar-o-aplicativo-no-meu-pc)
    - [Como rodar meu aplicativo na Internet](#como-rodar-meu-aplicativo-na-internet)
  + [Colabore](#colabore)
  + [Quando vai ficar pronto?](#quando-vai-ficar-pronto)

## Sobre este aplicativo

Este é uma aplicativo básico, para servir de exemplo para outros, desenvolvidos pelos estudantes das disciplinas de **desenvolvimento de aplicativos híbridos** dos cursos de T. I.

Este aplicativo não tem um objetivo específico, tendo apenas recursos genéricos que podem ser implementados na maioria dos aplicativos desenvolvidos nos projetos integradores, por exemplo.

### Características e recursos:

* Plataforma:
  + Node 12.19.0 LTS
* Front-end:
  + Ionic 6.12.0
* Angular 10.0.8
  + ionic Capacitor 6.12.0
* Template: sidemenu
* Back-end:
  + API do Firebase.com

## Aulas x Branches

Para facilitar o desenvolvimento do aplicativo durante o andamento do curso, cada etapa (ou aula) está desenvolvida em um "branch" separado que, após a conclusão e testes, deve ser concatenada (nerge) com o branch "master".

### Branches:

*  `master`  &rarr; Aplicativo funcional, até o branch mais recente e pronto para compilar para Web e mobile; 
*  `00_Aplicativo_Ionic_criado`  &rarr; Aplicativo base criado pelo comando `ionic start`; 
*  `01_Ajustes_iniciais`  &rarr; Criação de algumas páginas estáticas, definição das rotas e menu principal; 
*  `02_Conexao_com_firebase`  &rarr; Configuração de um novo App no Firebase.com e conexão com o aplicativo Ionic; 
*  `03_Autenticacao_e_guard`  &rarr; Autenticação de usuários usando *Firebase Authentication* e armazenamento local; 
*  `04_Somente_com_perfil`  &rarr; Obriga o usuário autenticado a criar um perfil no aplicativo, caso não tenha feito antes; 
* ... 

*Novos "branches" são disponibilizados à medida que são desenvolvidos e testados.*

## Versão "compilada"

Você pode ver a versão Web do aplicativo que está em desenvolvimento no endereço abaixo. Lembre-se que, por estar e desenvolvimento, nem todas as funcionalidades estão implementadas e existem riscos de segurança e privacidade dos dados armazenados.

https://luferat.github.io/SLTec-ionic-firebase-06/

*Dica: use dados "fake" para testar o aplicativo em desenvolvimento.*

### Como rodar o aplicativo no meu PC

Se você gostou da idéia, siga os passos para baixar e testar este aplicativo:

1) No GitHub.com, faça um "fork" deste repositório na sua conta; 
2) "Clone" o repositório remoto do seu GitHub.com para seu PC; 
3) Abra um "Node.js command prompt"; 
4) Mude para o diretório no seu PC, onde você clonou o repositório remoto; 
5) Comande `npm install` para baixar e instalar todas as dependências; 
6) Teste o aplicativo no navegador padrão, comandando `ionic serve` ; 

Lembre-se que, nem todas as funcionalidades estão implementadas ainda, aproveite então, para melhorar o aplicativo removendo "bugs", otimizando o código e fazendo novas implementações...

### Como rodar meu aplicativo na Internet

Esses são passos "simples" para publicar este aplicativo como um "aplicativo Web", no serviço de hospedagem "GitHub Pages":

1) Preparando o repositório remoto:

    - Vá nas configurações do repositório do aplicativo (fork) no seu GitHub.com; 
    - Localize a seção "GitHub Pages"; 
    - Em "Source", selecione o "Branch: master" e o diretório "/docs"; 
    - Clique no botão [Save]; 
    - Após a página recarregar, anote (ou copie) o URL da mensagem "Your site is published at ..."; 

2) No seu PC (localhost):

    - Se o aplicativo está rodando no servidor local (localhost), encerre-o; 
    - Edite o arquivo "angular.json" que está na raiz do projeto; 
    - Localize a chave "projects > app > architect > build > options"; 
    - Acicione no início dela, a chave `"baseHref": "endereço_github_pages",`, sem esquecer da vírgula no final; 
    - Troque "endereço_github_pages" pelo endereço do aplicativo obtido nas configurações do GtiHub.com; 
    - Localize a chave "projects > app > architect > serve > options"; 
    - Acicione no início dela, a chave `"baseHref": "/",`, sem esquecer da vírgula no final; 
    - Salve e feche todos os arquivos abertos no editor; 
    - No "Node.js command prompt" que está aberto no diretório do seu aplicativo, comande `ionic build`; 
    - Na conclusão, localize o diretório "www" na raiz do projeto e renomeie para "docs"; 
    - Faça o "push" do branch master para o repositório remoto; 

Acesse o endereço do seu aplicativo no GitHub Pages e ele já deve estar funcionando lá!

Repita os passos da etapa 2 sempre que quise publicar novas alterações no aplicativo.

_Existem outras formas de publicar um site no GitHub Pages. Pesquise!_

## Colabore

Gostaria de colaborar com este projeto ou partir para um projeto próprio com base neste? Faça seu "fork", dê um objetivo claro para o aplicativo e segue em frente!

Visite os "branches", leia os tutoriais que estão no arquivo *README.md* de cada branch, "debugue", otimize, incremente...

Só não deixe de compartilhar suas descobertas conosco, ok?

Estudantes e professores, agradecem...

## Quando vai ficar pronto?

**_Nunca!_** Este aplicativo nunca terá uma versão final, talvez apenas os "forks" e "clones" dele...

*EOF*
