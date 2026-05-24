export interface Bonus {
  slug: string;
  nome: string;
  descricao: string;
  icone: 'FileSpreadsheet' | 'Store' | 'Instagram' | 'Package' | 'Tag' | 'Mic';
  tipo: 'download' | 'link-externo' | 'pagina-interna';
  url: string;
  cta: string;
}

export const bonus: Bonus[] = [
  {
    slug: 'planilha-pedidos',
    nome: 'Planilha de controle de pedidos',
    descricao: 'Template pronto pra anotar quem pediu, quanto pagou e quando entregar.',
    icone: 'FileSpreadsheet',
    tipo: 'download',
    url: '/bonus/planilha-pedidos.xlsx',
    cta: 'Baixar planilha',
  },
  {
    slug: 'fornecedores',
    nome: 'Lista de fornecedores baratos',
    descricao: 'Onde comprar leite condensado, chocolate e embalagens pelo menor preço.',
    icone: 'Store',
    tipo: 'download',
    url: '/bonus/fornecedores.pdf',
    cta: 'Abrir PDF',
  },
  {
    slug: 'identidade-instagram',
    nome: 'Identidade visual pro Instagram',
    descricao: 'Posts e stories prontos pra usar no seu perfil de doceira.',
    icone: 'Instagram',
    tipo: 'download',
    url: '/bonus/identidade-instagram.png',
    cta: 'Baixar pacote',
  },
  {
    slug: 'embalagens',
    nome: '10 ideias de embalagem criativas',
    descricao: 'Embalagens bonitas que valorizam seu doce e justificam preço maior.',
    icone: 'Package',
    tipo: 'download',
    url: '/bonus/embalagem.png',
    cta: 'Acessar Embalagens',
  },
  {
    slug: 'precificacao',
    nome: 'Tabela de precificação por região',
    descricao: 'Quanto cobrar dependendo da sua cidade pra não vender barato demais.',
    icone: 'Tag',
    tipo: 'download',
    url: '/bonus/precificacao.pdf',
    cta: 'Abrir PDF',
  },
  {
    slug: 'audio-whatsapp',
    nome: 'Script de áudio pro WhatsApp',
    descricao: 'Texto pronto pra gravar áudio que converte cliente em compra.',
    icone: 'Mic',
    tipo: 'download',
    url: '/bonus/audio-whatsapp.docx',
    cta: 'Abrir Documento',
  },
];
