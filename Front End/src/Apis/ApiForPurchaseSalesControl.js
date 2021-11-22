//getting API for showing all the data
export const getPurchaseOrSalesTaxVatValueAfterDiscounts = () => fetch("http://localhost:3001/purchase-sales-tax/vat-value-control").then(res => res.json())

//getting API for inserting the data
export const createPurchaseOrSalesTaxVatValueAfterDiscounts = (todo) => fetch("http://localhost:3001/purchase-sales-tax/vat-value-control/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePurchaseOrSalesTaxVatValueAfterDiscount = (todo, id) => fetch(`http://localhost:3001/purchase-sales-tax/vat-value-control/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPurchaseOrSalesTaxVatValueAfterDiscount = (id) => fetch(`http://localhost:3001/purchase-sales-tax/vat-value-control/${id}`).then(res => res.json())