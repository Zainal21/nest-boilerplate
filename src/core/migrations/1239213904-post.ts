import { MigrationInterface, QueryRunner } from "typeorm";

export class PostMigtation1239213904 implements MigrationInterface {
  name = "PostMigtation1239213904";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" (
        "id" SERIAL NOT NULL, 
        "title" character varying NOT NULL, 
        "content" character varying NOT NULL, 
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), C
        ONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" 
        UNIQUE ("title"),
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" 
        PRIMARY KEY ("id"))`
    );

    await queryRunner.query(
      `CREATE TABLE "categories" (
          "id" SERIAL NOT NULL, 
          "category_name" character varying NOT NULL, 
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), C
          ONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" 
          UNIQUE ("category_name"),
          CONSTRAINT "PK_cace4a159ff9f2512dd42373760" 
          PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
