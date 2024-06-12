//TODO: Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//Menu Books  


//class Books
  //make & color
  class Book {
    constructor(make, color){
        this.make = make; 
        this.color - color; 
    }
}

//class Menu
class Menu {
    constructor(){
    //books array
        this.books = []; 
    }

    // add cars 
    //prompt for a make and color
    //create new book and push book into array

    addBook(){
        let bookMake = prompt("Enter book make:"); 
        let bookColor = prompt("Enter the book color:"); 
        this.books.push(new Book(bookMake, bookColor));
    }

    //delete cars
    deleteBook(){
        let bookIndex = prompt("Enter book index to DELETE:"); 
        this.books.splice(bookIndex, 1); 
    }

    //view cars
    viewBook(){
        let displayBooks = ''; 
        for(let i=0; i < this.books.length; i++){
            
          displayBooks += `${i}) ${this.books[i].make} ${this.books[i].model}`
        }

        alert(`
        Book Inventory: 
        ------------------------
        ${displayBooks}
            `); 
    }
 
    // see a menu
 showMainMenu(){
    return prompt(`
        Main Menu: 
        ------------------
        0) Exit Menu
        1) Add Books
        2) Delete Books
        3) View All Books 
        `);
}
        //start the book menu
        start(){
         let selection = this.showMainMenu(); 

         while(selection != 0){

            switch(selection){

                case "1": this.addBook();
                break; 

                case "2": this.deleteBook(); 
                break; 

                case "3": this.viewBook();
                break; 

                default: selection = 0; 
            }
            selection = this.showMainMenu(); 
        }
        alert("Exiting Menu ... Goodbye!"); 
    }
}

//instantiate the menu and invoke the start method

let menu = new Menu(); 

menu.start();  

