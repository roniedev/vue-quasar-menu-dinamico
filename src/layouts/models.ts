export interface IMenuLateral {
  id: number;
  nome: string;
  legenda: string;
  icone: string;
  rota: string;
  ehMenuPai: boolean;
  subMenus: Array<IMenuLateral>;
}
