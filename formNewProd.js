import { postFunction } from "./comps/POST.js";

const inputName = document.getElementById("inputName");
const inputDesc = document.getElementById("inputDesc");
const inputBrand = document.getElementById("inputBrand");
const InputUrl = document.getElementById("InputUrl");
const inputPrice = document.getElementById("inputPrice");
const submitBtn = document.getElementById("submitBtn");
const check = document.getElementById('exampleCheck1')

check.addEventListener("change", function () {
  submitBtn.classList.toggle("disabled");
})

submitBtn.addEventListener("click", async () => {
  let newProduct = {
    name: inputName.value,
    description: inputDesc.value,
    brand: inputBrand.value,
    imageUrl: InputUrl.value,
    price: inputPrice.value,
  };

  await postFunction(newProduct);

  window.location.assign("./index.html");
});
