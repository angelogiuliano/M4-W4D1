import { editButtonsFunction } from "./comps/editButtonsFunction.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const inputNameEdit = document.getElementById("inputNameEdit");
const inputDescEdit = document.getElementById("inputDescEdit");
const inputBrandEdit = document.getElementById("inputBrandEdit");
const InputUrlEdit = document.getElementById("InputUrlEdit");
const inputPriceEdit = document.getElementById("inputPriceEdit");
const submitBtn = document.getElementById("submitBtn");
const check = document.getElementById("exampleCheck1");

let editedProduct = {};

check.addEventListener("change", function () {
  submitBtn.classList.toggle("disabled");
});

try {
  const getPreEditData = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmODQ2OGJkNWQxMjAwMTg5MGQ0MGYiLCJpYXQiOjE3MDYwMDE1MTIsImV4cCI6MTcwNzIxMTExMn0.wyFsUsu7OzvDudhm7iGya_kuV22lKRLgapk640y6uDo",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      inputNameEdit.value = data.name;
      inputDescEdit.value = data.description;
      inputBrandEdit.value = data.brand;
      InputUrlEdit.value = data.imageUrl;
      inputPriceEdit.value = data.price;
    } else {
      console.log("Error");
    }
  };

  getPreEditData();

  submitBtn.addEventListener("click", async () => {
    editedProduct.name = inputNameEdit.value;
    editedProduct.description = inputDescEdit.value;
    editedProduct.brand = inputBrandEdit.value;
    editedProduct.imageUrl = InputUrlEdit.value;
    editedProduct.price = inputPriceEdit.value;

    await editButtonsFunction(id, editedProduct);
    window.location.assign("./backoffice.html");
  });
} catch (error) {
  console.error(error);
}
