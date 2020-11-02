# SLTec-ionic-firebase-06

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__

## Branch "07_Salvando_perfil"

Finalmente, vamos salvar os dados do cadastro de perfil no Firestore e localmente.

Para executar as atividades deste "branch", siga os passos abaixo:

1) Crie o método para envio dos dados

  + Edite 'app/components/profile/profile.component.ts' &rarr; 1 à 9

2) Finalmente, edite as regras de segurança do Firestore para que as transações sejam seguras

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
			allow read, update, delete: if request.auth.uid == userId;

			// Somente um usuário logado pode se cadastrar
			allow create: if request.auth.uid != null;
		}

		// Quaisquer outros documentos estão bloqueados
		match /{document} {
			allow read: if false;
			allow write: if false;
		}
	}
}
```	

2) Conclusão

  + Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

*EOF*
