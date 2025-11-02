import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateErrors1756993238845 implements MigrationInterface {
    name = 'CreateErrors1756993238845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dateOfBirth\` \`dateOfBirth\` date NULL DEFAULT 'NULL'`);
    }

}
