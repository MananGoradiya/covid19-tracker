console.log("hii manan");
var db = firebase.firestore();
function bookk(bookname,authorname,description)
{
    this.bookname=bookname;
    this.authorname=authorname;
    this.description=description;
    
    //console.log();
    console.log("book pn done");

var currentuser=toString(firebase.auth().currentUser);
// Add a new document in collection "cities"
db.collection("BOOKS").doc(currentuser).set({
    Bookname: bookname,
    Author:authorname,
    Description: description,
   
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});


}


function displayy(bookk4)
{
    console.log("ha moj ah");
    console.log(bookk4.bookname);
        let table=document.getElementById('table');
        table.innerHTML+=`<tr><td>${bookk4.bookname}</td>
        <td>${bookk4.authorname}</td><td>${bookk4.description}</td>`;
        let form=document.getElementById('donationform');
        

        form.reset();

}










/*

displayy.prototype.add=function(bookk){
    console.log("ha moj ah");
    console.log(bookk.bookname);
        let table=document.getElementById('table');
        table.innerHTML=`<tr><td>${bookk.bookname}</td>
        <td>${bookk.authorname}</td><td>${bookk.description}</td>`;
}
*/

let donate=document.getElementById('donate');
donate.addEventListener('click',(e)=>
{
    e.preventDefault();
    let book=document .getElementById('inputBookl4').value;
console.log(book);
let author=document.getElementById('inputAuthor').value;
console.log(author);
let description=document.getElementById('comment').value;
console.log(description);

console.log("badhu done");
let bo=new bookk(book,author,description);
let d=new displayy(bo);
//this.book(book,author,description);
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById(".navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}