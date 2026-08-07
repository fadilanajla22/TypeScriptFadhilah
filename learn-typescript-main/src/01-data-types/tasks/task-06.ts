/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    codeProduct: string;
    nameProduct: string;
    price: number;
    stock: number;
    weight: number;
    averangRating: number;
    isDiscount: boolean;
}

const Product1: Product = {
    codeProduct: "PRD001",
    nameProduct: "Laptop ASUS Vivobook 15",
    price: 9500000,
    stock: 25,
    weight: 1.7,
    averangRating: 4.8,
    isDiscount: true,
}

const Product2: Product = {
    codeProduct: "PRD002",
    nameProduct: "Logitech Wireless Mouse M331",
    price: 250000,
    stock: 100,
    weight: 0.09,
    averangRating: 4.6,
    isDiscount: false,
}

const Product3: Product = {
    codeProduct: "PRD003",
    nameProduct: "Mechanical Keyboard Fantech MK853",
    price: 650000,
    stock: 40,
    weight: 0.95,
    averangRating: 4.7,
    isDiscount: true,
}

console.log({
    Product1,
    Product2,
    Product3,
});
