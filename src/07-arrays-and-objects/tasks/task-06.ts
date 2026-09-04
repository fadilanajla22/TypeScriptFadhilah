/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

type Book = {
    id: number;
    title: string;
    category: string;
    stock: number;
};

type Borrowing = {
    student: string;
    bookId: number;
    days: number;
};

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

// 1. Find all borrowing transactions for "Andi"
const andiBorrowings = borrowings.filter(
    borrowing => borrowing.student === "Andi"
);

// 2. Find the book information for every borrowing transaction
const borrowingWithBooks = borrowings.map(borrowing => {
    const book = books.find(book => book.id === borrowing.bookId);

    return {
        ...borrowing,
        book: book
    };
});

// 3. Find students who borrowed a programming book
const programmingStudents = borrowings
    .map(borrowing => {
        const book = books.find(book => book.id === borrowing.bookId);

        return {
            student: borrowing.student,
            book: book
        };
    })
    .filter(item => item.book?.category === "Programming");

// 4. Calculate total number of borrowing transactions
const totalBorrowings = borrowings.length;

// 5. Calculate average borrowing duration
const totalDays = borrowings.reduce(
    (total, borrowing) => total + borrowing.days,
    0
);

const averageDays = totalDays / borrowings.length;

// 6. Find students who borrowed books for more than 7 days
const studentsMoreThan7Days = borrowings.filter(
    borrowing => borrowing.days > 7
);


// Output
console.log("1. Andi borrowings:", andiBorrowings);
console.log("2. Borrowings with books:", borrowingWithBooks);
console.log("3. Programming students:", programmingStudents);
console.log("4. Total borrowings:", totalBorrowings);
console.log("5. Average days:", averageDays);
console.log("6. More than 7 days:", studentsMoreThan7Days);