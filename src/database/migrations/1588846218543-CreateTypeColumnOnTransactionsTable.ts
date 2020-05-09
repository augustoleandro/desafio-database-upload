import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateTypeColumnOnTransactionsTable1588846218543
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'type',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('transactions', 'type');
  }
}
