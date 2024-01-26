export const editButtonsFunction = async (id, editedProduct) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmODQ2OGJkNWQxMjAwMTg5MGQ0MGYiLCJpYXQiOjE3MDYwMDE1MTIsImV4cCI6MTcwNzIxMTExMn0.wyFsUsu7OzvDudhm7iGya_kuV22lKRLgapk640y6uDo",
        },
      }
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.log("Errore");
    }
  } catch (error) {
    console.log(error);
  }
};
