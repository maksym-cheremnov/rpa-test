import { AutoIncrement, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Messages extends Model {
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.TEXT)
  message: string;
}