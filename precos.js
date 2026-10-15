// TABELA DE PREÇOS — edite só este arquivo.
// Faixa = [mínimo, máximo] em reais. Serviço sem preço no modelo aparece como "Sob consulta".
// Em SERVICOS, "preco" (opcional) vale para todos os modelos, inclusive os fora da lista.
// [0, 0] aparece como "Grátis".

window.SERVICOS = [
  { id: "tela",        nome: "Troca de tela/display",               prazo: "1 a 2 horas",  desc: "Display novo com touch para tela trincada, manchada ou sem imagem." },
  { id: "bateria",     nome: "Troca de bateria",                    prazo: "40 min a 1 hora", desc: "Para bateria que descarrega rápido, estufada ou desligando sozinho." },
  { id: "conector",    nome: "Conector de carga",                   prazo: "1 a 2 horas",  desc: "Quando não carrega, carrega só em uma posição ou com mau contato." },
  { id: "traseira",    nome: "Tampa traseira / vidro traseiro",     prazo: "1 a 3 horas",  desc: "Troca da tampa ou do vidro traseiro quebrado." },
  { id: "camera",      nome: "Câmera traseira / frontal",           prazo: "1 a 2 horas",  desc: "Câmera embaçada, tremendo, com mancha ou sem abrir." },
  { id: "audio",       nome: "Alto-falante / microfone",            prazo: "1 a 2 horas",  desc: "Som baixo, chiando, ou a outra pessoa não te ouve nas ligações." },
  { id: "botoes",      nome: "Botões (power/volume)",               prazo: "1 a 2 horas",  desc: "Botão afundado, travado ou que não responde." },
  { id: "molhado",     nome: "Recuperação de aparelho molhado",     prazo: "1 a 3 dias",   desc: "Limpeza química e tratamento da placa após contato com líquido." },
  { id: "software",    nome: "Desbloqueio / formatação / sistema",  prazo: "1 a 3 horas",  desc: "Formatação, atualização e travas de software (com nota fiscal ou prova de posse).", preco: [80, 150] },
  { id: "acessorios",  nome: "Película e capinha",                  prazo: "Na hora",      desc: "Película de vidro ou 3D e capinha para o seu modelo.", preco: [30, 90] },
  { id: "diagnostico", nome: "Diagnóstico",                         prazo: "30 min a 1 hora", desc: "Avaliação completa do aparelho. Descontado se o reparo for feito na loja.", preco: [0, 0] }
];

window.PRECOS = [
  // Apple
  { marca: "Apple", modelo: "iPhone 11", servicos: { tela: [350, 550], bateria: [180, 280], conector: [180, 280], traseira: [250, 400], camera: [250, 450], audio: [150, 250], botoes: [150, 250], molhado: [150, 350] } },
  { marca: "Apple", modelo: "iPhone 12", servicos: { tela: [500, 900], bateria: [220, 320], conector: [200, 320], traseira: [300, 500], camera: [300, 550], audio: [160, 280], botoes: [160, 280], molhado: [180, 400] } },
  { marca: "Apple", modelo: "iPhone 13", servicos: { tela: [600, 1100], bateria: [250, 380], conector: [220, 350], traseira: [350, 550], camera: [350, 650], audio: [180, 300], botoes: [180, 300], molhado: [200, 450] } },
  { marca: "Apple", modelo: "iPhone 14", servicos: { tela: [700, 1300], bateria: [280, 420], conector: [250, 380], traseira: [400, 650], camera: [400, 750], audio: [200, 320], botoes: [200, 320] } },
  { marca: "Apple", modelo: "iPhone 15", servicos: { tela: [900, 1600], bateria: [320, 480], conector: [280, 420], traseira: [450, 750], camera: [450, 850], audio: [220, 350], botoes: [220, 350] } },

  // Samsung
  { marca: "Samsung", modelo: "Galaxy A15", servicos: { tela: [250, 380], bateria: [130, 200], conector: [100, 160], traseira: [80, 150], camera: [150, 250], audio: [100, 160], botoes: [100, 160], molhado: [120, 250] } },
  { marca: "Samsung", modelo: "Galaxy A35", servicos: { tela: [400, 650], bateria: [160, 240], conector: [120, 180], traseira: [120, 200], camera: [200, 350], audio: [120, 180], botoes: [120, 180], molhado: [150, 300] } },
  { marca: "Samsung", modelo: "Galaxy A55", servicos: { tela: [500, 800], bateria: [180, 260], conector: [130, 200], traseira: [150, 250], camera: [250, 400], audio: [130, 200], botoes: [130, 200], molhado: [150, 320] } },
  { marca: "Samsung", modelo: "Galaxy S23", servicos: { tela: [900, 1400], bateria: [250, 380], conector: [200, 300], traseira: [250, 400], camera: [350, 650], audio: [180, 280], botoes: [180, 280], molhado: [200, 450] } },
  { marca: "Samsung", modelo: "Galaxy S24", servicos: { tela: [1100, 1700], bateria: [280, 420], conector: [220, 330], traseira: [280, 450], camera: [400, 750], audio: [200, 300], botoes: [200, 300] } },

  // Motorola
  { marca: "Motorola", modelo: "Moto G24",  servicos: { tela: [220, 350], bateria: [120, 190], conector: [90, 150],  traseira: [80, 140],  camera: [130, 220], audio: [90, 150],  botoes: [90, 150],  molhado: [120, 250] } },
  { marca: "Motorola", modelo: "Moto G54",  servicos: { tela: [280, 420], bateria: [140, 210], conector: [100, 160], traseira: [90, 160],  camera: [150, 260], audio: [100, 160], botoes: [100, 160], molhado: [130, 260] } },
  { marca: "Motorola", modelo: "Moto G84",  servicos: { tela: [350, 550], bateria: [150, 230], conector: [110, 170], traseira: [100, 180], camera: [180, 300], audio: [110, 170], botoes: [110, 170], molhado: [140, 280] } },
  { marca: "Motorola", modelo: "Edge 40",   servicos: { tela: [600, 950], bateria: [180, 280], conector: [140, 220], traseira: [150, 260], camera: [250, 450], audio: [130, 200], botoes: [130, 200], molhado: [160, 330] } },
  { marca: "Motorola", modelo: "Edge 50",   servicos: { tela: [700, 1100], bateria: [200, 300], conector: [150, 230], traseira: [160, 280], camera: [280, 500], audio: [140, 220], botoes: [140, 220] } },

  // Xiaomi
  { marca: "Xiaomi", modelo: "Redmi 13C",       servicos: { tela: [200, 320], bateria: [110, 180], conector: [80, 140],  traseira: [70, 130],  camera: [120, 200], audio: [80, 140],  botoes: [80, 140],  molhado: [110, 230] } },
  { marca: "Xiaomi", modelo: "Redmi Note 12",   servicos: { tela: [300, 480], bateria: [130, 200], conector: [100, 160], traseira: [90, 160],  camera: [150, 260], audio: [100, 160], botoes: [100, 160], molhado: [130, 260] } },
  { marca: "Xiaomi", modelo: "Redmi Note 13",   servicos: { tela: [350, 560], bateria: [140, 220], conector: [110, 170], traseira: [100, 170], camera: [170, 290], audio: [110, 170], botoes: [110, 170], molhado: [140, 280] } },
  { marca: "Xiaomi", modelo: "Poco X6",         servicos: { tela: [450, 700], bateria: [160, 240], conector: [120, 180], traseira: [120, 200], camera: [200, 350], audio: [120, 180], botoes: [120, 180], molhado: [150, 300] } },
  { marca: "Xiaomi", modelo: "Xiaomi 13T",      servicos: { tela: [700, 1100], bateria: [200, 300], conector: [150, 230], traseira: [180, 300], camera: [300, 550], audio: [140, 220], botoes: [140, 220] } }
];
