import React from 'react';
import { Home, Briefcase, Soup, Pizza, Sandwich, MoreHorizontal, Fish, School } from 'lucide-react';

export const categories = [
  { name: 'Brasileira', icon: <Soup size={24} className="mx-auto" /> },
  { name: 'Pizza', icon: <Pizza size={24} className="mx-auto" /> },
  { name: 'Lanches', icon: <Sandwich size={24} className="mx-auto" /> },
  { name: 'Japonesa', icon: <Fish size={24} className="mx-auto" /> },
  { name: 'Outros', icon: <MoreHorizontal size={24} className="mx-auto" /> },
];

export const restaurants = {
  'Brasileira': [
    { id: 1, name: 'Sabor da Terra', rating: 4.8, deliveryTime: '30-45 min', deliveryFee: 'R$ 5,99', logo: 'https://placehold.co/100x100/27ae60/ffffff?text=ST' },
    { id: 2, name: 'Cantinho da Vovó', rating: 4.9, deliveryTime: '40-55 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/e67e22/ffffff?text=CV' },
    { id: 7, name: 'Churrascaria Fogo no Chão', rating: 4.7, deliveryTime: '50-65 min', deliveryFee: 'R$ 10,00', logo: 'https://placehold.co/100x100/c0392b/ffffff?text=FC' },
  ],
  'Pizza': [
     { id: 3, name: 'Pizza Express', rating: 4.7, deliveryTime: '25-40 min', deliveryFee: 'R$ 7,00', logo: 'https://placehold.co/100x100/e74c3c/ffffff?text=PE' },
     { id: 4, name: 'Bella Pizza', rating: 4.6, deliveryTime: '35-50 min', deliveryFee: 'R$ 4,50', logo: 'https://placehold.co/100x100/c0392b/ffffff?text=BP' },
     { id: 8, name: 'Forno a Lenha Pizzaria', rating: 4.9, deliveryTime: '30-45 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/d35400/ffffff?text=FL' },
  ],
  'Lanches': [
     { id: 5, name: 'Burger Queen', rating: 4.5, deliveryTime: '20-35 min', deliveryFee: 'R$ 8,90', logo: 'https://placehold.co/100x100/f39c12/ffffff?text=BQ' },
     { id: 6, name: 'Super Dog', rating: 4.8, deliveryTime: '15-30 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/f1c40f/ffffff?text=SD' },
  ],
  'Japonesa': [
      { id: 10, name: 'Sushi House', rating: 4.8, deliveryTime: '45-60 min', deliveryFee: 'R$ 9,50', logo: 'https://placehold.co/100x100/2980b9/ffffff?text=SH' },
      { id: 11, name: 'Taro Sushi', rating: 4.7, deliveryTime: '40-55 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/34495e/ffffff?text=TS' },
  ],
  'Outros': [
      { id: 9, name: 'Açai Mania', rating: 4.9, deliveryTime: '15-25 min', deliveryFee: 'R$ 3,00', logo: 'https://placehold.co/100x100/8e44ad/ffffff?text=AM' },
  ],
};

export const restaurantDetails = {
  1: {
    id: 1, name: 'Sabor da Terra', rating: 4.8, deliveryTime: '30-45 min', deliveryFee: 'R$ 5,99', logo: 'https://placehold.co/100x100/27ae60/ffffff?text=ST', banner: 'https://placehold.co/600x200/2ecc71/ffffff?text=Comida+Brasileira',
    menu: {
      'Pratos Principais': [ { id: 101, name: 'Feijoada Completa', description: 'Acompanha arroz, couve, farofa e laranja.', price: 39.90 }, { id: 102, name: 'Parmegiana de Carne', description: 'Bife à parmegiana com arroz e fritas.', price: 35.50 }, ],
      'Bebidas': [ { id: 103, name: 'Refrigerante Lata', description: 'Coca-Cola, Guaraná ou Fanta.', price: 5.00 }, { id: 104, name: 'Suco Natural', description: 'Laranja, abacaxi ou morango.', price: 8.00 }, ]
    }
  },
   2: {
    id: 2, name: 'Cantinho da Vovó', rating: 4.9, deliveryTime: '40-55 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/e67e22/ffffff?text=CV', banner: 'https://placehold.co/600x200/e67e22/ffffff?text=Comida+Caseira',
    menu: { 'Pratos da Casa': [{id: 201, name: 'Bife a Cavalo', description: 'Bife, ovo frito, arroz, feijão e salada.', price: 29.90}], 'Bebidas': [{id: 202, name: 'Caldo de Cana', description: 'Copo de 500ml.', price: 7.00}] }
  },
  3: {
    id: 3, name: 'Pizza Express', rating: 4.7, deliveryTime: '25-40 min', deliveryFee: 'R$ 7,00', logo: 'https://placehold.co/100x100/e74c3c/ffffff?text=PE', banner: 'https://placehold.co/600x200/e74c3c/ffffff?text=Pizzas',
    menu: { 
        'Pizzas': [
            {id: 301, name: 'Pizza Grande Calabresa', description: 'Molho, mussarela, calabresa e cebola.', price: 45.00},
            {id: 302, name: 'Pizza Grande 4 Queijos', description: 'Molho, mussarela, provolone, parmesão e gorgonzola.', price: 52.00}
        ], 
        'Bebidas': [
            {id: 303, name: 'Refrigerante 2L', description: 'Coca-cola ou Guaraná', price: 10.00}
        ] 
    }
  },
  4: {
    id: 4, name: 'Bella Pizza', rating: 4.6, deliveryTime: '35-50 min', deliveryFee: 'R$ 4,50', logo: 'https://placehold.co/100x100/c0392b/ffffff?text=BP', banner: 'https://placehold.co/600x200/c0392b/ffffff?text=Bella+Pizza',
    menu: {
        'Pizzas Salgadas': [
            { id: 401, name: 'Pizza Margherita', description: 'Molho de tomate fresco, mussarela e manjericão.', price: 42.00 },
            { id: 402, name: 'Pizza Portuguesa', description: 'Mussarela, presunto, ovo, cebola e azeitona.', price: 48.00 }
        ],
        'Pizzas Doces': [
            { id: 403, name: 'Pizza de Chocolate', description: 'Chocolate ao leite com morangos frescos.', price: 35.00 }
        ]
    }
  },
  5: {
    id: 5, name: 'Burger Queen', rating: 4.5, deliveryTime: '20-35 min', deliveryFee: 'R$ 8,90', logo: 'https://placehold.co/100x100/f39c12/ffffff?text=BQ', banner: 'https://placehold.co/600x200/f39c12/ffffff?text=Burger+Queen',
    menu: {
        'Burgers': [
            { id: 501, name: 'Queen Burger Duplo', description: 'Dois hambúrgueres, queijo cheddar, alface, tomate e molho especial.', price: 28.50 },
            { id: 502, name: 'Chicken Crispy', description: 'Frango empanado crocante, maionese temperada e alface.', price: 24.00 }
        ],
        'Porções': [
            { id: 503, name: 'Batata Frita com Cheddar e Bacon', description: 'Porção generosa de batatas fritas crocantes.', price: 18.00 }
        ]
    }
  },
  6: {
    id: 6, name: 'Super Dog', rating: 4.8, deliveryTime: '15-30 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/f1c40f/ffffff?text=SD', banner: 'https://placehold.co/600x200/f1c40f/ffffff?text=Super+Dog',
    menu: {
        'Hot Dogs': [
            { id: 601, name: 'Super Dogão Prensado', description: 'Duas salsichas, purê, batata palha, milho e vinagrete.', price: 15.00 },
            { id: 602, name: 'Hot Dog de Frango', description: 'Salsicha, frango desfiado cremoso e batata palha.', price: 16.00 }
        ],
        'Bebidas': [
            { id: 603, name: 'Refrigerante Lata', description: 'Opções variadas.', price: 5.00 }
        ]
    }
  },
  7: {
    id: 7, name: 'Churrascaria Fogo no Chão', rating: 4.7, deliveryTime: '50-65 min', deliveryFee: 'R$ 10,00', logo: 'https://placehold.co/100x100/c0392b/ffffff?text=FC', banner: 'https://placehold.co/600x200/e74c3c/ffffff?text=Churrasco',
    menu: {
        'Carnes': [
            { id: 701, name: 'Picanha Grelhada (500g)', description: 'Acompanha arroz, farofa e vinagrete.', price: 79.90 },
            { id: 702, name: 'Costela no Bafo', description: 'Costela assada lentamente, acompanha mandioca cozida.', price: 69.90 }
        ],
        'Acompanhamentos': [
            { id: 703, name: 'Maionese da Casa', description: 'Porção de 500g.', price: 15.00 }
        ]
    }
  },
  8: {
    id: 8, name: 'Forno a Lenha Pizzaria', rating: 4.9, deliveryTime: '30-45 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/d35400/ffffff?text=FL', banner: 'https://placehold.co/600x200/d35400/ffffff?text=Pizzaria+Forno+a+Lenha',
    menu: {
        'Pizzas Especiais': [
            { id: 801, name: 'Pizza da Casa', description: 'Mussarela de búfala, tomate seco e rúcula.', price: 55.00 },
            { id: 802, name: 'Pizza Pepperoni', description: 'Mussarela, pepperoni e molho de tomate especial.', price: 50.00 }
        ],
        'Calzones': [
            { id: 803, name: 'Calzone de Frango com Catupiry', description: 'Massa fechada e recheada com frango e catupiry.', price: 45.00 }
        ]
    }
  },
  9: {
    id: 9, name: 'Açai Mania', rating: 4.9, deliveryTime: '15-25 min', deliveryFee: 'R$ 3,00', logo: 'https://placehold.co/100x100/8e44ad/ffffff?text=AM', banner: 'https://placehold.co/600x200/9b59b6/ffffff?text=Açaí+e+Cremes',
    menu: {
        'Açaí': [ { id: 901, name: 'Copo de Açaí 500ml', description: 'Açaí puro com 3 acompanhamentos à sua escolha.', price: 18.00 }, { id: 902, name: 'Barca de Açaí', description: 'Açaí, frutas, leite condensado e leite em pó.', price: 42.00 } ],
        'Sucos': [ { id: 903, name: 'Suco de Açaí com Laranja', description: '500ml', price: 12.00 } ]
    }
  },
  10: {
    id: 10, name: 'Sushi House', rating: 4.8, deliveryTime: '45-60 min', deliveryFee: 'R$ 9,50', logo: 'https://placehold.co/100x100/2980b9/ffffff?text=SH', banner: 'https://placehold.co/600x200/3498db/ffffff?text=Sushi',
    menu: {
        'Combinados': [ { id: 1001, name: 'Combinado 20 peças', description: 'Seleção do chef com peças variadas.', price: 55.00 }, { id: 1002, name: 'Combinado Salmão 15 peças', description: 'Sashimi, niguiri e uramaki de salmão.', price: 45.00 } ],
        'Temakis': [ { id: 1003, name: 'Temaki Salmão Completo', description: 'Arroz, salmão, cream cheese e cebolinha.', price: 25.00 } ]
    }
  },
  11: {
    id: 11, name: 'Taro Sushi', rating: 4.7, deliveryTime: '40-55 min', deliveryFee: 'Grátis', logo: 'https://placehold.co/100x100/34495e/ffffff?text=TS', banner: 'https://placehold.co/600x200/34495e/ffffff?text=Taro+Sushi',
    menu: {
        'Uramakis': [
            { id: 1101, name: 'Uramaki Filadélfia (8 un)', description: 'Salmão, cream cheese e cebolinha.', price: 22.00 },
            { id: 1102, name: 'Uramaki Skin (8 un)', description: 'Pele de salmão grelhada e molho teriyaki.', price: 18.00 }
        ],
        'Hossomakis': [
            { id: 1103, name: 'Hossomaki de Pepino (8 un)', description: 'Alga, arroz e pepino.', price: 12.00 }
        ]
    }
  }
};

export const mockOrders = [
    { id: 'c5a2', restaurant: 'Açai Mania', date: '24/06/2025', total: 'R$ 21,00', status: 'Entregue', items: ['1x Copo de Açaí 500ml'], logo: 'https://placehold.co/100x100/8e44ad/ffffff?text=AM' },
    { id: '7de5', restaurant: 'Sabor da Terra', date: '20/06/2025', total: 'R$ 45,89', status: 'Entregue', items: ['1x Feijoada Completa'], logo: 'https://placehold.co/100x100/27ae60/ffffff?text=ST' },
    { id: '9a3f', restaurant: 'Burger Queen', date: '18/06/2025', total: 'R$ 28,80', status: 'Entregue', items: ['2x Super Burger'], logo: 'https://placehold.co/100x100/f39c12/ffffff?text=BQ' },
    { id: 'b1c8', restaurant: 'Pizza Express', date: '15/06/2025', total: 'R$ 52,50', status: 'Cancelado', items: ['1x Pizza G Mussarela'], logo: 'https://placehold.co/100x100/e74c3c/ffffff?text=PE' }
];

export const mockAddresses = [
    { id: 1, type: 'Casa', street: 'Rua Fictícia, 123', city: 'Campo Mourão, PR', icon: <Home /> },
    { id: 2, type: 'Trabalho', street: 'Avenida Principal, 456', city: 'Campo Mourão, PR', icon: <Briefcase /> },
    { id: 3, type: 'Faculdade', street: 'Via do Conhecimento, 789', city: 'Campo Mourão, PR', icon: <School /> },
];

export const mockPayments = [
    { id: 1, type: 'Crédito', brand: 'Mastercard', last4: '1234' },
    { id: 2, type: 'Crédito', brand: 'Visa', last4: '5678' },
    { id: 3, type: 'Pix', brand: 'Pix', last4: '' },
];

export const mockCoupons = [
    { id: 1, code: 'BEMVINDO10', description: '10% OFF no seu primeiro pedido', valid: true },
    { id: 2, code: 'PIZZA20', description: 'R$20 de desconto em pizzas', valid: true },
    { id: 4, code: 'ENTREGAGRATIS', description: 'Receba seu pedido sem taxa de entrega', valid: true },
    { id: 5, code: 'SUSHI15', description: '15% OFF no Sushi House', valid: true },
    { id: 3, code: 'EXPIROU5', description: 'R$5 de desconto', valid: false },
];

export const mockHelpTopics = [
    { id: 1, question: 'Como faço para cancelar um pedido?', answer: 'Você pode cancelar um pedido diretamente pela tela de acompanhamento, desde que o restaurante ainda não tenha aceitado. Após a aceitação, entre em contato com o suporte.'},
    { id: 2, question: 'Meu pedido veio errado. O que eu faço?', answer: 'Lamentamos pelo ocorrido! Por favor, vá em "Meus Pedidos", selecione o pedido em questão e clique em "Tive um problema". Nossa equipe de suporte irá te ajudar.'},
    { id: 3, question: 'Quais formas de pagamento são aceitas?', answer: 'Aceitamos cartões de crédito e débito das principais bandeiras (Visa, Mastercard, Elo) e Pix.'},
    { id: 4, question: 'A entrega está demorando muito, o que fazer?', answer: 'Primeiro, verifique a previsão de entrega na tela de acompanhamento. Se o tempo já excedeu, você pode entrar em contato com o restaurante ou com nosso suporte pelo chat.' },
    { id: 5, question: 'Posso alterar o endereço de entrega após finalizar o pedido?', answer: 'Infelizmente, por segurança, não é possível alterar o endereço após a confirmação. O ideal é cancelar o pedido (se possível) e refazê-lo com o endereço correto.' },
];