export const FULL_URL = "http://localhost:1337";
export const SETTINGS_ENDPOINT = "/api/configuracaos/1";
export const MENU_ITEMS_ENDPOINT = "/api/menu-items?filters[ativo][$eq]=true&populate[tipo_link][fields]=descricao&populate[conteudo][fields]=titulo&populate[conteudo][fields]=locale&sort[0]=ordem";
export const PAGE_CONTENT_ENDPOINT = "/api/conteudos/";
export const ALL_STORE_ITEMS_ENDPOINT = "/api/lojas?populate=*";
export const ONE_STORE_ITEM_ENDPOINT = "/api/lojas/";
export const ALL_CAR_PARTS_ENDPOINT = "/api/loja-pecas";
export const ALL_BRANDS_ENDPOINT = "/api/loja-marcas";
