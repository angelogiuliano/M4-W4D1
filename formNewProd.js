import { postFunction } from "./comps/POST.js";
import { getFunction } from "./comps/GET.js";

const inputName = document.getElementById("inputName");
const inputDesc = document.getElementById("inputDesc");
const inputBrand = document.getElementById("inputBrand");
const InputUrl = document.getElementById("InputUrl");
const inputPrice = document.getElementById("inputPrice");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  let newProduct = {
    name: inputName.value,
    description: inputDesc.value,
    brand: inputBrand.value,
    imageUrl: InputUrl.value,
    price: inputPrice.value,
  };

  postFunction(newProduct);

  window.location.assign("./index.html");
});
