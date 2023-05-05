import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Posts1683259760067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "content",
            type: "text",
          },
        ],
      }),
      true
    );

    await queryRunner.createIndex(
      "posts",
      new TableIndex({
        name: "IDX_TITLE_NAME",
        columnNames: ["title"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("posts", "IDX_TITLE_NAME");
    await queryRunner.dropTable("posts");
  }
}
