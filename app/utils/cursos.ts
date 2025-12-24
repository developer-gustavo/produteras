const cursos = [
  {
    id: 1,
    titulo: 'Product Presence',
    descricao:
    'Posicionamento, narrativa e liderança para Product Managers que precisam influenciar decisões — não apenas apresentar ideias.',
    subDescricao:
    'Aprenda a se comunicar com clareza, conduzir conflitos e criar narrativas que geram alinhamento, confiança e decisão em produto.',
    image:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    problema:
    'Explica muito e decide pouco. Sai de reuniões sem alinhamento. Entra em conflito com stakeholders por falta de clareza. Sente que produto “não tem voz”. O problema não é técnico. É posicionamento e comunicação estratégica.',
    solucao:
    'O Product Presence ensina PMs a se posicionar com autoridade, sem cargo; construir narrativas que conectam dados à decisão; liderar squads e stakeholders pela comunicação; e resolver conflitos sem desgaste político. Comunicação aqui não é soft skill. É ferramenta de liderança em produto.',
    aprendizado:
    'Posicionamento estratégico do PM, storytelling aplicado a produto, oratória para reuniões e apresentações, negociação e resolução de conflitos, narrativas para roadmap, métricas e decisões difíceis.',
    alvo:
    'PMs Pleno e Sênior, Product Owners em transição, PMs técnicos que precisam ganhar influência, PMs que lideram sem autoridade formal. Não é para quem busca apenas técnicas de apresentação. É para quem quer liderar decisões.',
    categorias: ['carreira', 'produto'],
    aoVivo: true,
    tempo: '15h de conteúdo',
    encontros: '3 encontros',
    data: '14 de janeiro de 2026',
    preco: '10x R$58,00 ou R$522,00 no PIX',
    inscricaoHabilitada: true,
    iframe: true,
    ementa: [],
    instrutora: {
      nome: 'Fernanda Carvalho',
      cargo: 'Product Manager',
      foto: '/Fernanda.jpeg',
      experiencia: '8+ anos em produtos digitais (backend, web e mobile)',
      especialidades: ['Produtos financeiros', 'Pagamentos', 'BaaS', 'SaaS', 'B2B2C', 'B2B'],
      formacao: 'Pós-graduação em Gestão Estratégica de Negócios – Mackenzie',
      bio: 'Atua na interseção entre tecnologia, negócio e produto, conectando decisões técnicas a impacto real.',
    },
  },
  {
    id: 2,
    titulo: 'Fundamentos de Gestão de Produtos',
    descricao:
      'Para quem quer parar de “estudar produto” e começar a pensar e agir como PM na prática.',
    subDescricao:
      'Em 4 encontros ao vivo, você aprende o básico bem feito para atuar no dia a dia, tomar decisões com clareza e conversar com stakeholders com mais estratégia, mesmo no caos.',
    image:
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=800&h=500&fit=crop',
    problema:
      'Dificuldade de começar quando o problema é grande e confuso, transformar achismo em hipótese, priorizar com critério e traduzir decisões em planos executáveis com métricas. O caos não é o problema — a falta de método é.',
    solucao:
      'O curso ensina método para enquadrar problemas, criar hipóteses testáveis, priorizar com critério e transformar decisão em execução clara, com comunicação objetiva e alinhamento.',
    aprendizado:
      'Pensar como PM (problema → hipótese → aposta → entrega → impacto), uso correto de frameworks, priorização e trade-offs, PRD enxuto, rollout e métricas.',
    alvo:
      'Mulheres PMs e POs em início de carreira, pessoas em transição para Produto e PMs que querem ganhar segurança no método e melhorar a comunicação com stakeholders e Tech.',
    categorias: ['produto', 'fundamentos', 'carreira'],
    aoVivo: true,
    tempo: '8h de conteúdo',
    encontros: '4 encontros',
    data: '17 de janeiro a 21 de fevereiro de 2026',
    preco: '10x R$39,00 ou R$351,00 no PIX',
    inscricaoHabilitada: true,
    iframe: true,
    ementa: [
      {
        data: '17/01',
        tema: 'Papel do PM e ciclo de produto',
        entrega: 'PM Canvas (usuário, problema, valor, métrica)',
      },
      {
        data: '24/01',
        tema: 'Discovery básico (perguntas + hipóteses)',
        entrega: 'Roteiro de entrevista + 3 hipóteses com critério de sucesso',
      },
      {
        data: '07/02',
        tema: 'Priorização e trade-offs',
        entrega:
          'Matriz de apostas (impacto × esforço × risco) + 1 decisão tomada',
      },
      {
        data: '21/02',
        tema: 'Execução e comunicação',
        entrega:
          'PRD 1 página + plano de rollout + métrica primária + 2 guardrails',
      },
    ],
    instrutora: {
      nome: 'Djenane Santos',
      cargo: 'Co-founder da ProduterasBR Academy',
      foto: '/Djenane.png',
    },
  },
  {
    id: 3,
    titulo: 'IA Hands-on',
    descricao:
      'Para quem quer usar inteligência artificial como ferramenta de produto no dia a dia.',
    subDescricao:
      'Em 4 encontros ao vivo, você aplica IA como copiloto para acelerar discovery, prototipação, PRD, backlog e rollout — com método e critério.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop',
    problema:
      'Uso pontual de IA sem fluxo repetível, dificuldade de transformar insights em entregáveis claros e falta de método para acelerar sem perder qualidade.',
    solucao:
      'O curso ensina como usar IA para organizar, sintetizar, estruturar e acelerar entregas reais de produto, sem alucinação e sem perder o senso crítico.',
    aprendizado:
      'IA aplicada a discovery, hipóteses, protótipos, PRD, backlog, smart release, rollout e leitura de métricas pós-lançamento.',
    alvo:
      'Mulheres PMs e POs (ou em transição) que querem aplicar IA com método, ganhar eficiência e construir entregáveis reais.',
    categorias: ['produto', 'ia', 'hands-on'],
    aoVivo: true,
    tempo: '8h de conteúdo',
    encontros: '4 encontros',
    data: '31 de janeiro a 07 de março de 2026',
    preco: '10x R$58,00 ou R$522,00 no PIX',
    inscricaoHabilitada: true,
    iframe: true,
    ementa: [
      {
        data: '31/01',
        tema: 'IA no discovery',
        entrega:
          'Synthesis sheet + hipóteses refinadas + prompt pack (3 prompts)',
      },
      {
        data: '14/02',
        tema: 'IA para protótipos e validação rápida',
        entrega:
          'Wireflow simples + roteiro de teste (5 perguntas) + critério de decisão',
      },
      {
        data: '28/02',
        tema: 'IA em PRD, backlog e smart release',
        entrega: 'PRD 1 página + backlog inicial + plano de smart release',
      },
      {
        data: '07/03',
        tema: 'IA no delivery e pós-lançamento',
        entrega:
          'Plano de rollout + checklist de QA/risco + leitura de métricas D1–D7',
      },
    ],
    instrutora: {
      nome: 'Djenane Santos',
      cargo: 'Co-founder da ProduterasBR Academy',
      foto: '/Djenane.png',
      experiencia: '8+ anos em produtos digitais (backend, web e mobile)',
      especialidades: ['Produtos financeiros', 'Pagamentos', 'BaaS', 'SaaS', 'B2B2C', 'B2B'],
      formacao: 'Pós-graduação em Gestão Estratégica de Negócios – Mackenzie',
      bio: 'Atua na interseção entre tecnologia, negócio e produto, conectando decisões técnicas a impacto real.',
    },
  },
  {
    id: 4,
    titulo: 'OKRs na Prática',
    descricao:
    'Aprenda a definir, acompanhar e negociar OKRs de verdade — do jeito que times de produto usam para transformar estratégia em execução mensurável.',
    subDescricao:
    'Em 4 encontros ao vivo, você vai dominar o método completo de OKRs: escrever objetivos fortes, criar Key Results de impacto, rodar check-ins produtivos e fechar ciclos com aprendizado real.',
    image:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
    problema:
    'Confunde OKR com KPI, escreve metas genéricas, transforma Key Results em tarefas e participa de check-ins que viram status report sem aprendizado. O problema não é falta de meta — é falta de clareza e governança para definir, acompanhar e ajustar OKRs sem cair no caos.',
    solucao:
    'Nesta trilha você aprende a diferenciar OKRs de KPIs, escrever Objetivos claros e Key Results de impacto, definir baseline e meta, conduzir check-ins sem microgerenciar e alinhar OKRs à estratégia do negócio com negociação e critério.',
    aprendizado:
    'Fundamentos de OKRs, escrita de Objetivos fortes, Key Results orientados a outcome, definição de baseline e metas, condução de check-ins produtivos, alinhamento estratégico e retrospectiva do ciclo.',
    alvo:
    'PMs e POs em início de carreira, analistas e júniores, líderes de squad e pessoas entrando em Produto que precisam alinhar roadmap, métricas e prioridades com objetivos claros. Não é para quem busca modelo pronto sem adaptar ou usar OKR como ferramenta de cobrança.',
    categorias: ['produto', 'estratégia', 'carreira'],
    aoVivo: true,
    tempo: '8h de conteúdo',
    encontros: '4 encontros',
    data: '15 de janeiro de 2026',
    preco: '10x R$42,00 ou R$378,00 no PIX',
    inscricaoHabilitada: true,
    iframe: true,
    ementa: [
      {
        data: '15/01',
        tema: 'Fundamentos e Mentalidade de OKRs',
        entrega: 'Análise crítica de objetivos e identificação de bons OKRs',
      },
      {
        data: '22/01',
        tema: 'A Arte de Escrever Bons Key Results',
        entrega: 'Transformação de tarefas em KRs de impacto (outcome)',
      },
      {
        data: '29/01',
        tema: 'O Ciclo de Vida do OKR',
        entrega: 'Simulação de check-in e acompanhamento de progresso',
      },
      {
        data: '05/02',
        tema: 'Estratégia, Alinhamento e Closing',
        entrega: 'Projeto final: conjunto completo de OKRs para um produto fictício',
      },
    ],
    instrutora: {
      nome: 'Melina Nobrega',
      cargo: 'Co-founder da ProduterasBR Academy | Product Manager',
      foto: '/melina.jpeg',
      experiencia: '8+ anos em produtos digitais (backend, web e mobile)',
      especialidades: ['Produtos financeiros', 'Pagamentos', 'BaaS', 'SaaS', 'B2B2C', 'B2B'],
      formacao: 'Pós-graduação em Gestão Estratégica de Negócios – Mackenzie',
      bio: 'Atua na interseção entre tecnologia, negócio e produto, conectando decisões técnicas a impacto real.',
    },
  },

]

export default cursos
