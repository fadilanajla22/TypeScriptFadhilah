/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBNnumber: string;
    title: string;
    authorsName: string;
    totalNumberOfPages: string;
    category: string;
    isBorrowing: boolean;
}

const Book1: Book = {
    ISBNnumber: "123456",
    title: "Rumah",
    authorsName: "Fadhilah",
    totalNumberOfPages: "121",
    category: "Rommance",
    isBorrowing: true,
}

const Book2: Book = {
    ISBNnumber: "12345",
    title: "Karyaku",
    authorsName: "Nurman",
    totalNumberOfPages: "554",
    category: "Horror",
    isBorrowing: true,
}

const Book3: Book = {
    ISBNnumber: "1234",
    title: "Kisah",
    authorsName: "Nurman",
    totalNumberOfPages: "555",
    category: "komedi",
    isBorrowing: false,
}

console.log("=== Book 1 ===");
console.log(Book1);

console.log("=== Book 2 ===");
console.log(Book2);

console.log("=== Book 3 ===");
console.log(Book3);