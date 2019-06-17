//Book class: Represents a Book
    class Book{
        constructor(title, author, isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }
    }

 //UI Class : Handle UI tasks
    class UI{
        static displayBooks() {
            const StoredBooks = [
                {
                    title: 'Book 1',
                    author: 'Jane Doe',
                    isbn: '3454545'
                },
                {
                    title: 'Book Two',
                    author: 'John Doe',
                    isbn: '45554'
                }
            ];

            const books = StoredBooks;
            books.forEach((book) => UI.addBookToList(book));
        }
        static addBookToList(book){
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${book.title} </td>
            <td>${book.author} </td>
            <td>${book.isbn} </td>
            <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
            `;

            //Appending the row to the list
            list.appendChild(row);
        }
    }
 //Store Class: Handle storage

 //Event: Display Books
    document.addEventListener('DOMContentLoaded', UI.displayBooks);
 //Event: Add a Book

 //Event: Remove a Book