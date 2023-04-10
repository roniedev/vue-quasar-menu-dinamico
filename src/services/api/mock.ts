export const menuList = [] = [
  {
    id: 1,
    nome: 'DTI',
    legenda: 'Tecnologia da informação',
    icone: 'keyboard',
    rota: '',
    ehMenuPai: true,
    subMenus: [
      {
        id: 100,
        nome: 'DTI0016',
        legenda: 'Helpdesk',
        icone: 'help',
        rota: '',
        ehMenuPai: true,
        subMenus: [
          {
            id: 1000,
            nome: 'Novo chamado',
            legenda: '',
            icone: 'navigate_next',
            rota: '',
            ehMenuPai: false,
            subMenus: []
          },
          {
            id: 1001,
            nome: 'Configurações',
            legenda: '',
            icone: 'navigate_next',
            rota: '',
            ehMenuPai: false,
            subMenus: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    nome: 'FIN0030',
    legenda: 'Risco sacado',
    icone: 'payments',
    ehMenuPai: true,
    rota: '',
    subMenus: [
      {
        id: 1002,
        nome: 'Novo chamado',
        legenda: '',
        icone: 'navigate_next',
        rota: '',
        ehMenuPai: false,
        subMenus: []
      },
      {
        id: 1003,
        nome: 'Configurações',
        legenda: '',
        icone: 'navigate_next',
        rota: '',
        ehMenuPai: false,
        subMenus: []
      }
    ]
  },
  {
    id: 3,
    nome: 'Arquivar fichas',
    legenda: '',
    icone: 'archive',
    ehMenuPai: false,
    rota: '/arquivar',
    subMenus: []
  }
]
