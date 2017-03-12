export default class Book {

    title: string;
    author: string;
    isbn: string;
    publisher: string;
    tags: string[];
    user: string;

    constructor(title: string, author: string, isbn: string, publisher: string, tags: string[], user: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publisher = publisher;
        this.tags = tags;
        this.user = user;
    }
}
