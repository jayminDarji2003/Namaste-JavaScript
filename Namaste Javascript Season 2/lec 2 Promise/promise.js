// Promises : The promise object represents the eventual or failure of an asynchronous operation and resulting value.

const PRODUCT_API = 'https://dummyjson.com/products';

//const response = fetch(PRODUCT_API);  // return promise

// this below is called : promise chaining
fetch(PRODUCT_API)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((e) => console.log("error : ", e))
    .finally(() => console.log("done fetching data"))
