# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Brach "13_Sistema_de_mensagens_04"

Neste 'branch', vamos implementar [Apagar] da mensagem.

Instruções para executar as atividades deste 'branch':

1) Vamos melhorar a visualização das mensagens

	- Edite "app/msg/inbox/inbox.page.html" &rarr; 1 
	- Edite "app/msg/inbox/inbox.page.scss" &rarr; 1 
	- Edite "app/msg/view/view.page.html" &rarr; 1 
	- Edite "app/msg/view/view.page.ts" &rarr; 1 à 2

2) Vamos implementar o botão "Apagar"

	- Edite "app/msg/inbox/inbox.page.ts" &rarr; 1
	- Edite "app/services/app.service.ts" &rarr; 1 à 3
	- Edite "app/msg/view/view.page.html" &rarr; 2

3) Edite as regras do "Cloud Firestore" para permitir alterações nas mensagens

Edite as regras do Cloud Firestore:

```
	•••

	// Mensagens
    match /messages/{userMessages}/{messages=**} {
        allow read, update: if request.auth.uid == userMessages;
        allow write: if false;
    }

	•••
```

4) Conclusão

    - Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

*EOF*