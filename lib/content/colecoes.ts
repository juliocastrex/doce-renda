export interface Video {
  youtubeId: string;
  titulo: string;
  duracao?: string;
}

export interface Colecao {
  slug: string;
  nome: string;
  descricao: string;
  icone: 'Cookie' | 'Cake' | 'CakeSlice' | 'Candy' | 'IceCream' | 'CupSoda';
  totalReceitas: number;
  totalVideos: number;
  pdfPath: string;
  videos: Video[];
}

export const colecoes: Colecao[] = [
  {
    slug: 'brigadeiros-sem-fogo',
    nome: 'Brigadeiros sem fogo',
    descricao:
      'Os melhores brigadeiros que voce faz sem ligar o fogão. Práticos, lucrativos e que rendem muito.',
    icone: 'Cookie',
    totalReceitas: 32,
    totalVideos: 5,
    pdfPath: '/ebooks/brigadeiros-sem-fogo.pdf',
    videos: [
      { youtubeId: '43zn44zfnU0', titulo: 'Brigadeiro tradicional sem fogo passo a passo', duracao: '3:17' },
      { youtubeId: 'XkC8zm6FNvo', titulo: 'Brigadeiro de leite ninho cremoso', duracao: '8:02' },
      { youtubeId: 'cqqdwho5mrI', titulo: 'Brigadeiro de morango com chocolate branco', duracao: '3:55' },
      { youtubeId: 'fo8k4MJsDgM', titulo: 'Brigadeiro de Nutella', duracao: '5:07' },
      { youtubeId: '8rjTc36knaI', titulo: 'Brigadeiro de Pistache', duracao: '7:45' },
    ],
  },
  {
    slug: 'brigadeiros-gourmet',
    nome: 'Brigadeiros gourmet tradicionais',
    descricao:
      'Brigadeiros sofisticados pra quem quer cobrar mais caro e vender pra festas.',
    icone: 'Candy',
    totalReceitas: 28,
    totalVideos: 8,
    pdfPath: '/ebooks/brigadeiros-gourmet.pdf',
    videos: [
      { youtubeId: 'N9GZe_6QW0E', titulo: 'Brigadeiro Gourmet de Kinder Bueno', duracao: '2:55' },
      { youtubeId: 'InybhM5Q-Rc', titulo: 'Brigadeiro de Maracujá Gourmet', duracao: '6:33' },
      { youtubeId: 'JPGOzbVF1cY', titulo: 'Brigadeiro de Ferrero Rocher', duracao: '7:27' },
      { youtubeId: 'M6wt5Rxq3RY', titulo: 'Brigadeiro de Banoffe', duracao: '3:55' },
      { youtubeId: '_Xc0RKL1ai4', titulo: 'Brigadeiro de Crème Brûlée', duracao: '10:56' },
      { youtubeId: 'rYoSZ4dtHds', titulo: 'Brigadeiro de Paçoca', duracao: '8:10' },
      { youtubeId: 'bqEtQUFAGKo', titulo: 'Brigadeiro de Óreo', duracao: '9:08' },
      { youtubeId: 'hXQHzD5CS4E', titulo: 'Brigadeiro de Milho', duracao: '5:37' },
    ],
  },
  {
    slug: 'recheios-cremosos',
    nome: 'Recheios cremosos sem fogo',
    descricao:
      'Recheios que dao vida pros seus doces e bolos no pote. Tudo sem precisar do fogao.',
    icone: 'IceCream',
    totalReceitas: 25,
    totalVideos: 5,
    pdfPath: '/ebooks/recheios-cremosos.pdf',
    videos: [
      { youtubeId: 'VCzNMN88Pd4', titulo: 'Creme de ninho rapidinho', duracao: '4:12' },
      { youtubeId: 'Pxa1jer4zGw', titulo: 'Creme de Amarula', duracao: '8:42' },
      { youtubeId: 'N5OZE6D_SIg', titulo: 'Creme de Ouro Branco', duracao: '5:11' },
      { youtubeId: 'l6jshDkb2mU', titulo: 'Creme de Café fácil', duracao: '4:17' },
      { youtubeId: '_gP3pv-gpUI', titulo: 'Creme de Chocolate com Whiskey', duracao: '8:47' },
    ],
  },
  {
    slug: 'recheios-lucrativos',
    nome: 'Recheios lucrativos para vender',
    descricao:
      'Os recheios que mais saem nas vendas e que tem o melhor custo-beneficio.',
    icone: 'CupSoda',
    totalReceitas: 20,
    totalVideos: 5,
    pdfPath: '/ebooks/recheios-lucrativos.pdf',
    videos: [
      { youtubeId: '469iB3hAtkQ', titulo: 'Recheios Cremosos e Super Fáceis de Fazer', duracao: '16:05' },
      { youtubeId: 'gApyG0cO01s', titulo: 'Top 5 Recheios de Bolos e Tortas', duracao: '19:50' },
      { youtubeId: 'U3c7lffYUdA', titulo: '3 tipos de Recheios Cremosos que não vão ao fogo', duracao: '13:36' },
      { youtubeId: 'QGt4oGmUI7s', titulo: 'Ganache de Chantilly firme e cremoso', duracao: '4:04' },
      { youtubeId: 'uZpTAGKI1so', titulo: 'Recheio Trufado de Ovomaltine', duracao: '6:29' },
    ],
  },
  {
    slug: 'bolos-no-pote',
    nome: 'Bolos no pote',
    descricao:
      'Bolos no pote praticos, bonitos e que vendem como agua. Receitas testadas e aprovadas.',
    icone: 'Cake',
    totalReceitas: 28,
    totalVideos: 5,
    pdfPath: '/ebooks/bolos-no-pote.pdf',
    videos: [
      { youtubeId: 'bToPV1k7SwE', titulo: 'Bolo no pote prestigio', duracao: '9:11' },
      { youtubeId: '1JDNBT4OsJ8', titulo: 'Bolo no pote ninho com nutella', duracao: '5:28' },
      { youtubeId: 'Nsn6MWZaPfo', titulo: 'Bolo no pote cenoura', duracao: '11:28' },
      { youtubeId: 'k-dO97UA2Bs', titulo: 'Bolo no pote sensação', duracao: '8:22' },
      { youtubeId: '5C6rtGd-E9I', titulo: 'Bolo no pote maracujá', duracao: '7:57' },
    ],
  },
  {
    slug: 'pudim-sem-forno',
    nome: 'Pudim sem Forno',
    descricao:
      'Pudins cremosos e irresistíveis sem precisar ligar o forno. Receitas práticas e lucrativas.',
    icone: 'CakeSlice',
    totalReceitas: 17,
    totalVideos: 5,
    pdfPath: '/ebooks/pudim-sem-forno.pdf',
    videos: [
      { youtubeId: 'dsTyBCI8z2I', titulo: 'Pudim sem forno passo a passo', duracao: '9:44' },
      { youtubeId: '05gYgv_IXTk', titulo: 'Pudim de leite ninho cremoso', duracao: '10:02' },
      { youtubeId: 'iGML7nUbFHE', titulo: 'Pudim de chocolate sem forno', duracao: '7:30' },
      { youtubeId: 'VqO-oYozL7c', titulo: 'Pudim de maracujá gelado', duracao: '10:53' },
      { youtubeId: 'xjQb6BkWy6c', titulo: 'Pudim de morango com calda especial', duracao: '4:51' },
    ],
  },
];

export function getColecao(slug: string) {
  return colecoes.find((c) => c.slug === slug);
}
