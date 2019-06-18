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
        static deleteBook(el) {
            if(el.classList.contains('delete')) {
                el.parentElement.parentElement.remove()
            }
        }

        
        static showAlert(message, classname){
            const div = document.createElement('div')
            div.className = `alert alert-${classname}`;
            div.appendChild(document.createTextNode(message))
            const container = document.querySelector('.container')
            const form = document.querySelector('#book-form');
            container.insertBefore(div,form);

            // The alert fadeOff after a period of time, 3 seconds
            setTimeout(() => document.querySelector('.alert').remove() , 3000)
        }
         static clearFields(){
            document.querySelector('#title').value = "";
            document.querySelector('#author').value = "";
            document.querySelector('#isbn').value = "";
        }
    }
 //Store Class: Handle storage

 //Event: Display Books
    document.addEventListener('DOMContentLoaded', UI.displayBooks);
 //Event: Add a Book
    document.querySelector('#book-form').addEventListener('submit', (e) =>
    {   
        // //Prevent actual default
        e.preventDefault();
        // // Get Form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // Validate
        if(title === "" || author ==="" ||  isbn ===""){
            UI.showAlert('Please fill in all the fields', 'danger');
        }
        else{
            // Instantiate the Book
        const book = new Book(title, author, isbn);
        
        UI.addBookToList(book);

        // Clear Field on submit
        UI.clearFields();
        }

        

    })
 //Event: Remove a Book
    document.querySelector('#book-list').addEventListener('click', (event) => {
        UI.deleteBook(event.target);
    })