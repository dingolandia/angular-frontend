interface content {
  id: number;
  titulo: string;
  locale: string;
}

export interface ImainMenuItems {
  id: number;
  ordem: number;
  descricao: string;
  url: string;
  conteudo: content[];
}

