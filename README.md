<h1 align="center">Portfolio Back-Node - Thiago</h1>
<p align="center"><i>Repositório para versionamento e documentação do projeto Portfolio Back-Node - Thiago.</i></p>

## Migration

Para que a Migration possa ser feita utilizando a biblioteca **TYPEORM** primeiro devemos criar a entidade dentro de src/domain/entities, em seguida devemos ir até o arquivo data-source.ts que se encontra dentro de src/infrastructure/database/config e dentro da const AppDataSource teremos a linha com as entidades, '*entities: [User, ErrorLog, Progress]*', nesta linha devemos trazer a nova entidade.

Após fazer esse processo vamos fazer os seguintes comando:

- **npx typeorm-ts-node-commonjs migration:generate src/infrastructure/migrations/CreateProgressTable -d src/infrastructure/database/config/data-source.ts** - neste comando vamos passar o comando do typeorm, com o caminho da pasta migration e o nome da migration que será criada e o caminho do data-source.

- **npx typeorm-ts-node-commonjs migration:run -d src/infrastructure/database/config/data-source.ts** - assim que a migration for criada vamos rodar esse comando para rodar a migration, neste comando vamos rodar o comando do typeorm mais a rota para o data-source.