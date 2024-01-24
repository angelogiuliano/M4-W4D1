import { getFunction } from "./comps/GET.js";
import { postFunction } from "./comps/POST.js";
import { iterazioneProdotto } from "./comps/iterazioneProdotto.js";
import { deleteButtonsFunction } from "./comps/deleteButtonsFunction.js";
import { editButtonsFunction } from "./comps/editButtonsFunction.js";

const backofficeMain = document.getElementById("backoffice-main");

const getData = async () => {
  const response = await getFunction();
  const data = await response.json();

  const iteraData = async (data) => {
    data.map((product) => {
      backofficeMain.innerHTML += `
            <div id=${product._id} class="card" style="width: 18rem;">
                <img src=${product.imageUrl} class="card-img-top w-75 m-auto my-3" alt=${product.name}>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text"><b>Price:</b> ${product.price} $</p>
                </div>
                <button class="btn btn-primary w-50 my-2 mx-auto deletebtn">Cancella</button>
                <button class="btn btn-success w-50 my-2 mx-auto editbtn">Modifica</button>
            </div>
            `;
    });

    const deleteButtons = document.getElementsByClassName("deletebtn");
    for (const button of deleteButtons) {
      button.addEventListener("click", async () => {
        await deleteButtonsFunction(button);
      });
    }

    const editButtons = document.getElementsByClassName("editbtn");
    console.log(editButtons);
    for (const button of editButtons) {
      button.addEventListener("click", () => {
        window.location.assign(
          "./formEditProduct.html?id=" +
            button.parentElement.attributes.id.value
        );
      });
    }
  };

  iteraData(data);
};

getData();
