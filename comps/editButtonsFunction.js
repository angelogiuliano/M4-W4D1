export const editButtonsFunction = async (id, editedProduct) => {
  await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "PUT",
    body: JSON.stringify(editedProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmODQ2OGJkNWQxMjAwMTg5MGQ0MGYiLCJpYXQiOjE3MDYwMDE1MTIsImV4cCI6MTcwNzIxMTExMn0.wyFsUsu7OzvDudhm7iGya_kuV22lKRLgapk640y6uDo",
    },
  });
  window.location.reload();
};
