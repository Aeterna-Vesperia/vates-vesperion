export const promotions = [
  // {
  //   id: 'black-friday',
  //   name: 'Black Friday',
  //   type: 'percentage',
  //   value: 20,
  //   appliesTo: {
  //     categories: ['Tiragens Especiais'], // Array válido
  //     subcategories: [], // Array vazio
  //     products: [], // Array vazio
  //   },
  //   exceptions: ['Pergunta Detalhada 10x'], // Array válido
  //   validUntil: '2025-12-01',
  // }
  // {
  //   id: 'new-year',
  //   name: 'Ano Novo',
  //   type: 'fixed',
  //   value: 10,
  //   appliesTo: {
  //     categories: [], // Array vazio
  //     subcategories: [], // Array vazio
  //     products: [], // Array vazio
  //   },
  //   exceptions: [], // Array vazio
  //   validUntil: '2026-01-10',
  // },
  {
    id: 'sim-ou-nao-3x',
    name: 'Desconto Sim ou Não 3x',
    type: 'fixed',
    value: 2,
    appliesTo: {
      categories: ['Respostas Rápidas'],
      subcategories: ['Sim ou Não'],
      products: ['Sim ou Não 3x'],
    },
    exceptions: [],
    validUntil: '2025-12-31',
  },
  {
    id: 'pergunta-detalhada-3x',
    name: 'Desconto Pergunta Detalhada 3x',
    type: 'fixed',
    value: 2,
    appliesTo: {
      categories: ['Respostas Rápidas'],
      subcategories: ['Pergunta Detalhada'],
      products: ['Pergunta Detalhada 3x'],
    },
    exceptions: [],
    validUntil: '2025-12-31',
  },
  {
    id: 'pergunta-detalhada-5x',
    name: 'Desconto Pergunta Detalhada 5x',
    type: 'fixed',
    value: 6,
    appliesTo: {
      categories: ['Respostas Rápidas'],
      subcategories: ['Pergunta Detalhada'],
      products: ['Pergunta Detalhada 5x'],
    },
    exceptions: [],
    validUntil: '2025-12-31',
  },
  {
    id: 'pergunta-detalhada-10x',
    name: 'Desconto Pergunta Detalhada 10x',
    type: 'fixed',
    value: 11,
    appliesTo: {
      categories: ['Respostas Rápidas'],
      subcategories: ['Pergunta Detalhada'],
      products: ['Pergunta Detalhada 10x'],
    },
    exceptions: [],
    validUntil: '2025-12-31',
  },
];