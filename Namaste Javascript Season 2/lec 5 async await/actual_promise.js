// async await with actual promise
// real world example

const PRODUCT_API_URL = 'https://dummyjson.com/products';

async function getProducts() {
    try {
        const data = await fetch(PRODUCT_API_URL);
        console.log(data);

        const products = await data.json();
        console.log(products)

        // fetch() => Response.json() => json value
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('getProducts function finished');
    }

}

getProducts();  