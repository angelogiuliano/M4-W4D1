import { getFunction } from "./comps/GET.js";
import { postFunction } from "./comps/POST.js";
import { iterazioneProdotto } from "./comps/iterazioneProdotto.js";

const main = document.getElementById("main");
const cards = document.getElementsByClassName("card");
const products = [
  {
    name: "3310 cellphone",
    description: "Icon",
    brand: "Nokia",
    imageUrl:
      "https://m.media-amazon.com/images/I/41W7XHEN5RL._AC_UF1000,1000_QL80_.jpg",
    price: 100,
  },
  {
    name: "Galaxy S20",
    description: "Flagship smartphone",
    brand: "Samsung",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Nq1XZzu2L._AC_UF1000,1000_QL80_.jpg",
    price: 899,
  },
  {
    name: "iPhone 12",
    description: "Latest Apple device",
    brand: "Apple",
    imageUrl: "https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg",
    price: 1099,
  },
  {
    name: "Pixel 5",
    description: "Google's flagship",
    brand: "Google",
    imageUrl:
      "https://m.media-amazon.com/images/I/5185tHjaERL._AC_UF1000,1000_QL80_.jpg",
    price: 799,
  },
  {
    name: "Surface Laptop 4",
    description: "Microsoft's premium laptop",
    brand: "Microsoft",
    imageUrl: "https://m.media-amazon.com/images/I/71uAes36LIS.jpg",
    price: 1299,
  },
  {
    name: "Sony WH-1000XM4",
    description: "Wireless Noise-Canceling Headphones",
    brand: "Sony",
    imageUrl:
      "https://m.media-amazon.com/images/I/51bhlA0ABRL._AC_UF1000,1000_QL80_.jpg",
    price: 349,
  },
  {
    name: "GoPro Hero 9",
    description: "Action Camera",
    brand: "GoPro",
    imageUrl: "https://m.media-amazon.com/images/I/715j8kZGD0L.jpg",
    price: 449,
  },
  {
    name: "Dell XPS 13",
    description: "Ultra-thin Laptop",
    brand: "Dell",
    imageUrl:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=4108&hei=2874&qlt=100,1&resMode=sharp2&size=4108,2874&chrss=full&imwidth=5000",
    price: 1299,
  },
  {
    name: "Samsung QLED Q80T",
    description: "4K Smart TV",
    brand: "Samsung",
    imageUrl:
      "https://m.media-amazon.com/images/I/71EmXBBCljL._AC_UF894,1000_QL80_.jpg",
    price: 1499,
  },
  {
    name: "Amazon Echo Dot (4th Gen)",
    description: "Smart Speaker",
    brand: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/61u48FEs0rL._AC_UY218_.jpg",
    price: 49,
  },
];

const addData = async () => {
  products.map(async (product) => {
    await postFunction(product);
  });
};
// addData() //commentato perchè ho aggiunto una sola volta i 10 elementi dell'array

try {
  const getData = async () => {
    const response = await getFunction();
    const data = await response.json();

    iterazioneProdotto(data);
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        window.open("details.html?id=" + cards[i].attributes.id.value);
      });
    }
  };
  getData();
} catch (err) {
  console.error(err);
}
