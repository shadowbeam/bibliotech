import axios  from 'axios';

export default class BookService {
    private static instance: BookService;
    private constructor() {
        // do something construct...
    }
    static getInstance() {
        if (!BookService.instance) {
            BookService.instance = new BookService();
            // ... any one time initialization goes here ...
        }
        return BookService.instance;
    }


    search(query:string, callback:()=> string) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`)
            .then(callback)
            .catch(this.error);
     }

     fetchBook(isbn:string, callback:()=> any) {
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
             .then(callback)
             .catch(this.error);

     }

     error = error => {
       console.log(error);

     }

}
