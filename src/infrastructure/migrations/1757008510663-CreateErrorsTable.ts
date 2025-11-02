import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateErrorsTable1757008510663 implements MigrationInterface {
    name = 'CreateErrorsTable1757008510663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`errors\` (\`id\` varchar(36) NOT NULL, \`stack\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`errors\``);
    }

}
