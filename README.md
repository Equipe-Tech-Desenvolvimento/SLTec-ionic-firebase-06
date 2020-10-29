# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Branch "05_Formulario_de_perfil"

Vamos iniciar a criação da página de cadastro de novo perfil, acessível quando um usuário se loga pela primeira vez.

Para executar as atividades deste "branch", siga os passos abaixo:

1) Gere o componente para o formulário de perfil

    - Comande `ionic generate component components/profile`

2) Importe o componente e o *ReactiveForms* na página de novo perfil 

    - Edite 'app/user/new/new.module.ts' &rarr; 1 à 3
    - Edite 'app/user/new/new.module.html' &rarr; 1

3) Inicie a criação do formulário de cadastro de perfil

    - Edite 'app/componets/profile/profile.component.ts' &rarr; 1 à 7
    - Edite 'app/componets/profile/profile.component.html' &rarr; *

4) Exibir dados do usuário logado na view

    - Edite 'app/componets/profile/profile.component.ts' &rarr; 8 à 16
    - Edite 'app/componets/profile/profile.component.html' &rarr; 1 à 2

5) Conclusão

    - Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

No proximo "branch", vamos salvar os dados do formulário no Firebase Firestore e localmente.

*EOF*
