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
            .catch(function(error) {
                console.log(error);
            });
     }
}
