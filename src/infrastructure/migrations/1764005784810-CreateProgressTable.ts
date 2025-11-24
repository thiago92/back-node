import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProgressTable1764005784810 implements MigrationInterface {
    name = 'CreateProgressTable1764005784810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`progress\` (\`id\` varchar(36) NOT NULL, \`value\` int NOT NULL, \`label\` varchar(100) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`progress\``);
    }

}
