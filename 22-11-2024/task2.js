alert('book');
document.body.style.backgroundColor = 'red';
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Andhrapradesh Matrimony", author: "Raghavendra" },  
    { title: "Naveen", author: "Shankar Madhu" },  
    { title: "Tataiah Puttina Rojulo", author: "Janaki Narayana" }  
];
  
const bookList = document.getElementById('book-list');
  
books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author}`;
    listItem.style.color = 'white';
    listItem.style.padding = '10px';
    listItem.style.margin = '5px';
    listItem.style.border = '1px solid black';
    listItem.style.borderRadius = '5px';
    listItem.style.backgroundColor = 'blue';
    bookList.appendChild(listItem);
});
