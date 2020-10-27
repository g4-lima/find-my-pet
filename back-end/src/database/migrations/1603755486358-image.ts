import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class images1603487102278 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'image',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'report_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'ReportImage',
            columnNames: ['report_id'],
            referencedTableName: 'reports',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('image');
  }
}
