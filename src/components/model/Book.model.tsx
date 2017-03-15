export default class Book {

    title: string;
    author: string;
    isbn: string;
    publisher: string;
    tags: string[];
    user: string;
    votes: number;

    constructor(title: string, author: string, isbn: string, publisher: string, tags: string[], user: string, votes: number) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publisher = publisher;
        this.tags = tags;
        this.user = user;
        this.votes = votes;
    }

}
