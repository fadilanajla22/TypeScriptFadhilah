/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function processProducts(
    products: { name: string; price: number}[],
    callback: (product: { name: string; price: number}) => void
): void {
    for (const product of products){
        callback(product);
    }
}

// 1. Display all products
function displayAllProduct(product: { name: string; price: number }): void {
    console.log(`${product.name} - Rp${product.price}`);
}

// 2. Display expensive products
function displayExpensiveProduct(product: { name: string; price: number }): void {
    if (product.price > 1000000) {
        console.log(`${product.name} - Rp${product.price}`);
    }
}

// 3. Display products above Rp500,000 with 10% discount
function displayDiscountProduct(product: { name: string; price:number; }): void {
    if (product.price > 500000) {
        const discountPrice = product.price * 0.9;
        console.log(`${product.name} - Rp${discountPrice}`)
    }
}

processProducts(products, displayAllProduct);

console.log("Expensive Products:");
processProducts(products, displayExpensiveProduct);

console.log("Products with 10% Discount:");
processProducts(products, displayDiscountProduct);