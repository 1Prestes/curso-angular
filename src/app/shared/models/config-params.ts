import { CampoGenerico } from "./campo-generico";

export interface ConfigParams {
  pagina?: number;
  limit?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
