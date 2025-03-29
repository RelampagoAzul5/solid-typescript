import { PersistencyProtocol } from '../classes/interfaces/persistensy-protocol';
export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
