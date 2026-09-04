/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

// 1. Get only completed orders
const completedOrders = orders.filter(
    order => order.status === "completed"
);


// 2. Calculate the total value of each order
const ordersWithTotal = orders.map(order => {
    const total = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return {
        ...order,
        total
    };
});


// 3. Find the customer who spent the most
const highestSpender = ordersWithTotal
    .filter(order => order.status === "completed")
    .reduce((highest, order) =>
        order.total > highest.total ? order : highest
    );


// 4. Calculate the total revenue from completed orders
const totalRevenue = completedOrders.reduce((total, order) => {
    return total + order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}, 0);


// 5. Find all products that have been purchased
const purchasedProducts = [
    ...new Set(
        completedOrders.flatMap(order =>
            order.items.map(item => item.product)
        )
    )
];


console.log("1. Completed Orders:", completedOrders);
console.log("2. Orders With Total:", ordersWithTotal);
console.log("3. Highest Spender:", highestSpender);
console.log("4. Total Revenue:", totalRevenue);
console.log("5. Purchased Products:", purchasedProducts);