const params = new URLSearchParams(location.search);
const id = params.get("id");
const det = document.getElementById("det");

const getDetails = async (id) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${id}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmODQ2OGJkNWQxMjAwMTg5MGQ0MGYiLCJpYXQiOjE3MDYwMDE1MTIsImV4cCI6MTcwNzIxMTExMn0.wyFsUsu7OzvDudhm7iGya_kuV22lKRLgapk640y6uDo",
      },
    }
  );

  const data = await response.json();

  det.innerHTML += `
        <div id=${data._id} class="card align-items-center justify-content-center flex-row">
            <img src=${data.imageUrl} class="w-25 mx-5 my-3" alt=${data.name}>
            <div class="card-body ms-5 text-start p-0">
                <h5 class=""><b>Product:</b> ${data.name}</h5>
                <h5 class=""><b>Price:</b> ${data.price} $</h5>
            </div>
        </div>
        `;
};

getDetails(id);
