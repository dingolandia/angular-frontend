export interface IThumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IMedia {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: IThumbnail };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
}

export interface IRefOptions {
  id: number;
  descricao: string;
}

export interface IItem {
  id: number;
  tituloProduto?: string;
  preco: number;
  quantidadeMinima: number;
  descricao?: string;
  media?: IMedia[];
  loja_categoria_aplicacao?: IRefOptions;
  loja_marca?: IRefOptions;
  loja_peca?: IRefOptions;
  opcional?: IRefOptions;
}

export interface IShoppingItemProps {
  preco: number;
  itemTitle?: string;
  idCategoria: number;
  idProduto: number;
  media?: IMedia[];
}
