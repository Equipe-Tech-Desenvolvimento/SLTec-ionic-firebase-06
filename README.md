
# SLTec-ionic-firebase-06 

__*Aplicativo base para projetos integradores dos cursos técnicos de desenvolvimento de aplicativos híbridos.*__  

## Branch "06_Novos_campos"  

Vamos criar novos tipos de campos no formulário.

Para executar as atividades deste "branch", siga os passos abaixo:

1) Cria campo "select" com valores estáticos

	- Editar 'app/componets/profile/profile.component.ts' &rarr; 1
	- Editar 'app/componets/profile/profile.component.html' &rarr; 1

2) Criar campo "select" com valures "alimentados" pelo banco de dados

	- Criar coleção "select01" no Firebase Firestore com alguns documentos
```
{
	select01: {
		*id: { option: "Opção 01" },
		*id: { option: "Opção 02" },
		*id: { option: "Opção 03" },
		*id: { option: "Opção 04" },
		*id: { option: "Opção 05" }
	}
}
```
'**id*' é o 'id' gerado automaticamente pelo Firestore.

 - Editar 'app/componets/profile/profile.component.ts' &rarr; 2 à 6
 - Editar 'app/componets/profile/profile.component.html' &rarr; 2 à 3

3) Cria campo "radio"

	- Editar 'app/componets/profile/profile.component.ts' &rarr; 7
	- Editar 'app/componets/profile/profile.component.html' &rarr; 4

4) Validando campos adicionais

	- Editar 'app/componets/profile/profile.component.ts' &rarr; 8 à 10
	- Editar 'app/componets/profile/profile.component.html' &rarr; 5 à 7

5) Opcional: remover 'caixa de alerta' do cadastro de perfil

	- Editar 'app/user/new/new.page.ts' &rarr; 1

6) Conclusão

	- Compile, teste as funcionalidades e depois, faça o "merge" com o branch "master".

Nos próximos "branches", vamos salvar os dados do formulário no Firebase Firestore e localmente. 

*EOF*