const products = [
  {
    id: 1,
    title: "Adidas Nemeziz Messi Copa",
    price: 109000,
    description:
      "Los últimos tacos exclusivos de Adidas para Messi, que llevan por nombre Adidas Nemeziz Messi Copa, se lanzaron en agosto de 2020. Adidas Nemeziz. Presenta este nuevo modelo con un aspecto llamativo en rojo, amarillo y negro. Las nuevas botas adidas Nemeziz Messi cuentan con un espectacular gráfico en zig-zag explosivo por todas partes que incluye las letras de Messi.",
    image: "https://assets.torneodefutbol.com.ar/content/adidas-nemeziz-messi-181-fg-copa-mundial-2018-azul-blanco.jpg",
    stock: 3,
  },
  {
    id: 2,
    title: "Raqueta Tenis HEAD Ti. Conquest (MM Trade)",
    price: 67000,
    description:
      "Si tienes un swing más moderado y buscas un poco más de control en tus golpes, dale la Ti. Conquista un intento. La tecnología Nano Titanium proporciona mayor potencia y estabilidad en cada disparo. El tamaño de la cabeza de gran tamaño brinda un control mejorado en los golpes con velocidades de swing moderadas. La construcción o-beam da el Ti. Conquista la durabilidad y la comodidad.",
    image:
      "https://acdn.mitiendanube.com/stores/002/050/152/products/235631_ti_conquest_mm_trade1-c4019d4d79991dbe4c16740579952537-480-0.jpg",
    stock: 2,
  },
  {
    id: 3,
    title: "Palo Vlack Wooly Classic Series 95.05 Aqua",
    price: 345000,
    description:
      "El Wooly es el palo de la Classic series pensado para jugadores de alto rendimiento. Su composición de 95% carbono y 5% fibra de vidrio brinda una mayor rigidez que potenciará tu golpes. Mantiene un perfecto equilibrio entre peso y balance, que sumado a su curvatura extra late bow y pipa 3d hará más preciso el control de la bocha.",
    image: "https://hockeyzone.com.ar/wp-content/uploads/2023/01/Palo-Vlack-Wooly-Classic-Aqua-5.png",
    stock: 7,
  },
  {
    id: 4,
    title: "Pelota Basquet Oficial Basketball Pvc N°7 Basket Profesional",
    price: 17499,
    description:
      "Pelota de Basquet Goma Importada, Ideal para partidos aficionados o campeonatos profesionales, Outdoor / Indoor, Compuesto de Goma, Tamaño: N° 7",
    image: "https://http2.mlstatic.com/D_NQ_NP_900298-MLA51655564908_092022-O.webp.",
    stock: 9,
  },
  {
    id: 5,
    title:
      "Made to Be Remade Running",
    price: 45000,
    description:
      "Su nombre concreto es 'Made to Be Remade Running' y está confeccionada con el tejido transpirable Aeroready, que ayuda a mantener la piel seca en los instantes de mayor intensidad. Una de las 22 mejores prendas deportivas para un buen entreno que, al ser reciclable, puede tener una segunda vida si se devuelve. ",
    image: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/03/30/16801678478226.jpg",
    stock: 6,
  }, {
    id: 1,
    title: "Argentum 1893",
    price: 68999,
    description:
      "La nueva Argentum 1893 está inspirada en el escocés Alexander Watson Hutton, pionero en la difusión del fútbol en nuestro país y organizador de la primera asociación de este deporte a nivel nacional.",
    image: "https://statics.eleconomista.com.ar/2023/08/64dbab2a8ec83.jpg",
    stock: 15,
  },
  {
    id: 2,
    title: "Nike React Infinity Run Flyknit 3",
    price: 97000,
    description:
      "La tercera versión de las mágicas Infinity Run de Nike ofrece mayor sujeción y estabilidad en la pisada, mayor flexibilidad, y una amortiguación más suave. Su mediasuela ofrece un gran retorno de energía y elasticidad en la pisada en ritmos medios y altos, ideal para carreras de media y larga distancia.",
    image:
      "https://www.oechsle.pe/arquivos/las-mejores-zapatillas-para-correr1.jpg?v=637862549144730000",
    stock: 3,
  },
  {
    id: 3,
    title: "Pelotas Golf Callaway Warbird (cajax12) | The Golfer Shop Color Blanco",
    price: 33990,
    description:
      "Cantidad de packs: 1 Pelotas de golf Callaway Warbird de color blanco, ideales para mejorar la visibilidad en el campo. Pack de 12 unidades, perfecto para tener siempre a mano durante tus partidas. Diseñadas por The Golfer Shop, garantía de calidad y rendimiento en cada golpe.",
    image: "https://http2.mlstatic.com/D_NQ_NP_903283-MLU72733554869_112023-O.webp",
    stock: 21,
  },
  {
    id: 4,
    title: "HEAD EXTREME ONE 2024",
    price: 251000,
    description:
      "Experimenta el juego con la raqueta Head Extreme One 2024. Ligereza, potencia y diseño vanguardista en una sola pala. ¡No esperes y descubre un nuevo nivel de juego!",
    image: "https://www.zonadepadel.com/16038-medium_default/head-extreme-one-2024.jpg",
    stock: 4,
  },
  {
    id: 5,
    title:
      "Bermuda, de Kelme x Lefties",
    price: 14999,
    description:
      "La nueva colección de ropa deportiva y aires streetwear que junta a estas dos marcas incluye camisetas de tirantes y de manga corta, pantalones de chándal, bermudas (como la de la imagen), calcetines y zapas. Por supuesto, el logo Kelme bien visible.",
    image: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/03/30/16801679495582.jpg",
    stock: 8,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 2000);
  });
};
