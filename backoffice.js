import { getFunction } from "./comps/GET.js";
import { postFunction } from "./comps/POST.js";
import { iterazioneProdotto } from "./comps/iterazioneProdotto.js";
import { deleteButtonsFunction } from "./comps/deleteButtonsFunction.js";

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
            </div>
            `;
    });

    const deleteButtons = document.getElementsByClassName("deletebtn");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", async () => {
        await deleteButtonsFunction(deleteButtons[i]);
      });
    }
  };

  iteraData(data);
};

getData();
