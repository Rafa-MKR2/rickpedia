import { ListaContosModule } from './lista-contos.module';

describe('ListaContosModule', () => {
  let listaContosModule: ListaContosModule;

  beforeEach(() => {
    listaContosModule = new ListaContosModule();
  });

  it('should create an instance', () => {
    expect(listaContosModule).toBeTruthy();
  });
});
