import Restaurant from '../models/restaurantModel'

const images = 'images/restaurants/'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: `${images}/hiokisushi/hiokisushi.png`,
    highlight: true,
    infos: 'Japonesa',
    page: 'hiokisushi',
    rating: 4.9,
    dishes: [
      {
        id: 1,
        title: 'Sushi de Salmão',
        description: 'Sushi fresco com salmão de alta qualidade.',
        price: 25.0,
        image: `${images}/hiokisushi/dishes/salmonsushi.jpeg`
      },
      {
        id: 2,
        title: 'Sashimi de Atum',
        description: 'Fatias de atum fresco servido com molho de soja.',
        price: 30.0,
        image: `${images}/hiokisushi/dishes/sashimi.jpg`
      },
      {
        id: 3,
        title: 'Temaki de Atum',
        description:
          ' Um rolinho de alga nori recheado com atum fresco, arroz de sushi e vegetais crocantes. Uma combinação saborosa e refrescante.',
        price: 18.0,
        image: `${images}/hiokisushi/dishes/temaki.jpeg`
      },
      {
        id: 4,
        title: 'Tempura',
        description: 'Legumes e camarões empanados e fritos.',
        price: 20.0,
        image: `${images}/hiokisushi/dishes/tempura.jpg`
      },
      {
        id: 5,
        title: 'Yakisoba',
        description:
          'Macarrão japonês frito com vegetais variados, carne de porco e molho especial, servido com cebolinhas e gengibre em conserva',
        price: 22.0,
        image: `${images}/hiokisushi/dishes/yakisoba.jpg`
      },
      {
        id: 6,
        title: 'Katsudon',
        description:
          'Um prato clássico japonês de arroz coberto com uma costeleta de porco empanada e frita, servida com cebolas e ovo cozido no topo.',
        price: 28.0,
        image: `${images}/hiokisushi/dishes/katsudon.jpg`
      }
    ]
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: `${images}/ladolcevita/pasta.png`,
    highlight: false,
    infos: 'Italiana',
    page: 'ladolcevita',
    rating: 4.6,
    dishes: [
      {
        id: 1,
        title: 'Spaghetti Carbonara',
        description:
          'Spaghetti com molho de ovos, queijo parmesão, pancetta e pimenta preta.',
        price: 25.0,
        image: `${images}/ladolcevita/dishes/carbonara.jpg`
      },
      {
        id: 2,
        title: 'Lasagna Bolognese',
        description:
          'Lasagna recheada com molho à bolonhesa, queijo ricota e mussarela.',
        price: 30.0,
        image: `${images}/ladolcevita/dishes/lasanha.jpg`
      },
      {
        id: 3,
        title: 'Risotto de Funghi',
        description:
          'Risotto cremoso com cogumelos selvagens e queijo parmesão.',
        price: 28.0,
        image: `${images}/ladolcevita/dishes/risotto-funghi.jpg`
      },
      {
        id: 4,
        title: 'Pizza Margherita',
        description:
          'Pizza clássica com molho de tomate, mussarela e manjericão fresco.',
        price: 22.0,
        image: `${images}/ladolcevita/dishes/margherita.png`
      },
      {
        id: 5,
        title: 'Tiramisu',
        description:
          'Sobremesa clássica italiana com camadas de biscoito, café, mascarpone e cacau.',
        price: 15.0,
        image: `${images}/ladolcevita/dishes/tiramisu.jpg`
      },
      {
        id: 6,
        title: 'Ravioli de Espinafre e Ricota',
        description:
          'Ravioli recheado com espinafre e ricota, servido com molho de manteiga e sálvia.',
        price: 24.0,
        image: `${images}/ladolcevita/dishes/ravioli.jpg`
      }
    ]
  },
  {
    id: 3,
    title: 'Sabor do Brasil',
    description:
      ' É um restaurante que celebra a culinária brasileira em toda a sua diversidade. Com pratos típicos de todas as regiões do Brasil, o restaurante oferece uma experiência autêntica para os amantes de uma boa comida caseira.',
    image: `${images}/sabordobrasil/feijoada.jpg`,
    highlight: false,
    infos: 'Brasileira',
    page: 'sabordobrasil',
    rating: 4.7,
    dishes: [
      {
        id: 1,
        title: 'Feijoada',
        description:
          'Feijoada é um prato típico brasileiro feito com feijão preto, carne de porco e linguiça, servido com arroz, farofa e couve.',
        price: 35.0,
        image: `${images}/sabordobrasil/dishes/feijoada.jpg`
      },
      {
        id: 2,
        title: 'Pão de Queijo',
        description:
          'Pão de queijo é um pãozinho de queijo tradicional brasileiro, crocante por fora e macio por dentro.',
        price: 12.0,
        image: `${images}/sabordobrasil/dishes/pao_de_queijo.jpg`
      },
      {
        id: 3,
        title: 'Moqueca de Peixe',
        description:
          'Moqueca de peixe é um prato típico brasileiro feito com peixe, leite de coco, dendê, pimentões, tomates e cebolas.',
        price: 42.0,
        image: `${images}/sabordobrasil/dishes/moqueca.jpg`
      },
      {
        id: 4,
        title: 'Brigadeiro',
        description:
          'Brigadeiro é um doce brasileiro feito com leite condensado, chocolate em pó e manteiga, coberto com granulado de chocolate.',
        price: 5.0,
        image: `${images}/sabordobrasil/dishes/brigadeiro.jpg`
      },
      {
        id: 5,
        title: 'Coxinha',
        description:
          'Coxinha é um salgado brasileiro, recheado com frango desfiado, empanado e frito.',
        price: 8.0,
        image: `${images}/sabordobrasil/dishes/coxinha.jpg`
      },
      {
        id: 6,
        title: 'Acarajé',
        description:
          'Acarajé é um bolinho frito de feijão-fradinho, típico da culinária baiana, recheado com vatapá, caruru e camarão seco.',
        price: 15.0,
        image: `${images}/sabordobrasil/dishes/acaraje.jpg`
      }
    ]
  },
  {
    id: 4,
    title: 'Le Petit Paris',
    description:
      'Le Petit Paris" traz a sofisticada e deliciosa cozinha francesa para os amantes da gastronomia. Com pratos clássicos como o boeuf bourguignon e sobremesas como o crème brûlée, o restaurante oferece uma experiência gastronômica requintada.',
    image: `${images}/lapetitparis/boeuf.jpg`,
    highlight: true,
    infos: 'Francesa',
    page: 'lapetitparis',
    rating: 5,
    dishes: [
      {
        id: 1,
        title: 'Boeuf Bourguignon',
        description:
          'Prato clássico francês de carne de boi cozida lentamente em vinho tinto, com cogumelos, cebolas e cenouras.',
        price: 40.0,
        image: `${images}/lapetitparis/dishes/boeuf.jpg`
      },
      {
        id: 2,
        title: 'Ratatouille',
        description:
          'Um ensopado de vegetais provençais, incluindo berinjela, abobrinha, pimentões e tomate, temperado com ervas.',
        price: 28.0,
        image: `${images}/lapetitparis/dishes/ratatouille.jpg`
      },
      {
        id: 3,
        title: 'Coq au Vin',
        description:
          'Frango cozido em vinho tinto com cogumelos, bacon, cebolas e cenouras, um prato tradicional francês.',
        price: 35.0,
        image: `${images}/lapetitparis/dishes/coq.jpg`
      },
      {
        id: 4,
        title: 'Crêpes Suzette',
        description:
          'Crepes finos servidos com um molho de laranja e licor, flambados para um toque especial.',
        price: 18.0,
        image: `${images}/lapetitparis/dishes/crepe_suzette.jpg`
      },
      {
        id: 5,
        title: "Soupe à l'Oignon",
        description:
          'Sopa de cebola tradicional francesa, servida com croûtons e queijo gratinado.',
        price: 22.0,
        image: `${images}/lapetitparis/dishes/soupe.jpg`
      },
      {
        id: 6,
        title: 'Tarte Tatin',
        description:
          'Uma torta de maçã invertida, caramelizada, e coberta com massa folhada crocante.',
        price: 16.0,
        image: `${images}/lapetitparis/dishes/tarte.jpg`
      }
    ]
  }
]

export default restaurants
