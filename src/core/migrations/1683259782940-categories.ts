import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Categories1683259782940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.createIndex(
      "categories",
      new TableIndex({
        name: "IDX_CATEGORY_NAME",
        columnNames: ["name"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("categories", "IDX_CATEGORY_NAME");
    await queryRunner.dropTable("categories");
  }
}
