# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Brach "11_Sistema_de_mensagens_02"

Neste 'branch', listar as mensagens da caixa de entrada do sistema de mensagens.

Instruções para executar as atividades deste 'branch':

1) Prepare o banco de dados com dados de teste e as devidas regras de acesso:

    - Acesse o console do "Cloud Firestore" e adicione a estrutra de dados abaixo:

```
messages: {
    "id_usuario_1": {
        "inbox": {
            "id_mensagem_1": {
                "date": "2020-11-10 12:14:00",
                "from": "id_usuario_2",
                "message": "Corpo da mensagem 1",
                "status": "Não lida",
                "subject": "Assunto da mensagem 1"
            },
            "id_mensagem_2": {
                "date": "2020-11-10 13:22:03",
                "from": "id_usuario_2",
                "message": "Corpo da mensagem 2",
                "status": "Não lida",
                "subject": "Assunto da mensagem 2"
            },
        },
        "outbox": {
            "id_mensagem_3": {
                "date": "2020-11-10 20:56:18",
                "to": "id_usuario_2",
                "message": "Corpo da mensagem 3",
                "status": "Não lida",
                "subject": "Assunto da mensagem 3"
            },
            "id_mensagem_4": {
                "date": "2020-11-11 10:08:09",
                "to": "id_usuario_2",
                "message": "Corpo da mensagem 4",
                "status": "Não lida",
                "subject": "Assunto da mensagem 4"
            }
        }
    },
    "id_usuario_2": {
        "inbox": {
            "id_mensagem_3": {
                "date": "2020-11-10 20:56:18",
                "from": "id_usuario_1",
                "message": "Corpo da mensagem 3",
                "status": "Não lida",
                "subject": "Assunto da mensagem 3"
            },
            "id_mensagem_4": {
                "date": "2020-11-11 10:08:09",
                "from": "id_usuario_1",
                "message": "Corpo da mensagem 4",
                "status": "Não lida",
                "subject": "Assunto da mensagem 4"
            }
        },
        "outbox": {
            "id_mensagem_1": {
                "date": "2020-11-10 12:14:00",
                "to": "id_usuario_1",
                "message": "Corpo da mensagem 1",
                "status": "Não lida",
                "subject": "Assunto da mensagem 1"
            },
            "id_mensagem_2": {
                "date": "2020-11-10 13:22:03",
                "to": "id_usuario_1",
                "message": "Corpo da mensagem 2",
                "status": "Não lida",
                "subject": "Assunto da mensagem 2"
            },
        }
    },
    }
}

```

Onde:
 - `id_usuario_1` &rarr; ID de login do usuário de teste 1 no Authentication
 - `id_usuario_2` &rarr; ID de login do usuário de teste 2 no Authentication
 - `id_mensagem_1` à `id_mensagem_4` &rarr; ID das mensagens gerados na criação da mensagem (outbox)


    - Ainda no "Cloud Firestore", edite / adicione as regras abaixo:

```
rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {

        // Lista de itens para 'select dinâmico'
        match /select01/{select} {
            // Só pode ser lido se um usuário está logado
            allow read: if request.auth.uid != null;

            // Não pode ser alterado
            allow write: if false;
        }

        // Perfil de usuário
        match /users/{userId} {
            // Somente o proprietário pode ler e editar
            allow update, delete: if request.auth.uid == userId;
            allow read: if request.auth.uid != null;

            // Somente um usuário logado pode se cadastrar
            allow create: if request.auth.uid != null;
        }

        // Mensagens
        match /messages/{userMessages}/{messages=**} {
            allow read: if request.auth.uid == userMessages;
            allow write: if false;
        }

        // Quaisquer outros documentos estão bloqueados
        match /{document} {
            allow read: if false;
            allow write: if false;
        }
    }
}
```

2) Liste as mensagens recebidas:

    - Edite "app/msg/inbox.page.ts" &rarr; 1 à 5
    - Edite "app/msg/inbox.page.html" &rarr; 1

3) Conclusão

    - Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

*EOF*