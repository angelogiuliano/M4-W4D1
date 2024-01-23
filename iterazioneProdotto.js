export const iterazioneProdotto = (data) => {
    data.map((product) => {
        main.innerHTML += 
        `
        <div class="card" style="width: 18rem;">
        <img src=${product.imageUrl} class="card-img-top w-75 m-auto my-3" alt=${product.name}>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><b>Price:</b> ${product.price} $</p>
        </div>
      </div>
        `
    })
}