export type CategoriaScript = 'divulgacao' | 'fechamento' | 'posvenda' | 'recuperacao';

export interface Script {
  categoria: CategoriaScript;
  titulo: string;
  mensagem: string;
}

export const categorias: { id: CategoriaScript; nome: string; descricao: string }[] = [
  { id: 'divulgacao', nome: 'Divulgação', descricao: 'Pra anunciar pra amigas, grupos e status' },
  { id: 'fechamento', nome: 'Fechamento de pedido', descricao: 'Pra responder cliente e fechar venda' },
  { id: 'posvenda', nome: 'Pós-venda', descricao: 'Pra agradecer e pedir indicação' },
  { id: 'recuperacao', nome: 'Recuperação', descricao: 'Pra trazer de volta cliente que sumiu' },
];

export const scripts: Script[] = [
  {
    categoria: 'divulgacao',
    titulo: 'Anúncio de inauguração para amigas',
    mensagem:
      'Oi, querida! Eu comecei a fazer uns doces caseiros aqui em casa pra ajudar nas contas, e tô fazendo uma promoção especial pra inaugurar. Caixinha com 6 brigadeiros gourmet por R$ 15. Posso te mandar o cardápio?',
  },
  {
    categoria: 'divulgacao',
    titulo: 'Divulgação pra grupo de WhatsApp',
    mensagem:
      'Pessoal, boa tarde! Acabei de fazer um lote fresquinho de brigadeiros gourmet. Caixinha com 6 por R$ 15 e com 12 por R$ 28. Quem quiser, me chama no privado. Entrego hoje ainda!',
  },
  {
    categoria: 'divulgacao',
    titulo: 'Status do WhatsApp',
    mensagem:
      'Doces fresquinhos saindo do forno (sem forno na verdade rs). Caixinhas a partir de R$ 15. Me chama aqui!',
  },
  {
    categoria: 'fechamento',
    titulo: 'Resposta ao "quanto custa"',
    mensagem:
      'Oi, amor! Tenho 3 tamanhos: caixinha com 6 por R$ 15, com 12 por R$ 28 e com 20 por R$ 45. Todos os sabores estão no cardápio que te mando aqui. Qual te interessa mais?',
  },
  {
    categoria: 'fechamento',
    titulo: 'Confirmação de pedido',
    mensagem:
      'Confirmado então, querida: 1 caixinha com 12 brigadeiros sortidos por R$ 28. Faço hoje à tarde e te entrego até às 19h. Pagamento na entrega ou pix antes, como preferir.',
  },
  {
    categoria: 'fechamento',
    titulo: 'Combinar entrega',
    mensagem:
      'Posso entregar amanhã entre 14h e 17h. Me confirma o endereço completinho com ponto de referência por favor?',
  },
  {
    categoria: 'posvenda',
    titulo: 'Agradecimento após entrega',
    mensagem:
      'Oi, querida! Muito obrigada pela compra. Espero que goste muito dos doces. Qualquer coisa me avisa, tá? Beijo!',
  },
  {
    categoria: 'posvenda',
    titulo: 'Pedir indicação',
    mensagem:
      'Amor, fico feliz que gostou! Se puder me indicar pra uma amiga ou postar um story marcando, me ajuda demais. Conta comigo sempre que precisar de docinho!',
  },
  {
    categoria: 'posvenda',
    titulo: 'Oferecer próxima caixinha',
    mensagem:
      'Oi! Tô fazendo um lote novo amanhã com sabores especiais. Quer que eu separe uma caixinha pra você?',
  },
  {
    categoria: 'recuperacao',
    titulo: 'Cliente sumiu',
    mensagem:
      'Oi, querida! Faz tempo que não falo com você. Tô com saudade. Tô fazendo uma promoção essa semana, caixinha com 6 por R$ 12. Quer aproveitar?',
  },
  {
    categoria: 'recuperacao',
    titulo: 'Promoção pra trazer de volta',
    mensagem:
      'Amor, só hoje: caixinha com 12 brigadeiros gourmet por R$ 22 (preço normal R$ 28). Vagas limitadas porque tô fazendo poucos lotes. Posso reservar uma pra você?',
  },
];
