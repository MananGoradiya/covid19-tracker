
console.log("hii birpp");

function book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
    console.log("onclick called");
}

function display()
{

}
    display.prototype.add=function(book){   
        console.log("called birpp");
        let table=document.getElementById("table");
        
        table.innerHTML+=`<tr> <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                            </tr>`;

                            
                        
    }


    display.prototype.clear=function(){
           // document.getElementById("donationform").;
          let x=  document.getElementById("donationform");
          x.reset();
        }

       setTimeout(display.prototype.show=function()
        {
            document.getElementById("alert").innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>SUCCESS</strong> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        },10);
    
    

document.getElementById('donate').addEventListener("click", function libraryformsubmit(e)
{
    e.preventDefault();
   let name=document.getElementById('inputBookl4').value;
    let author=document.getElementById('inputAuthor').value;
    let programming=document.getElementById('exampleRadios1');
    let fiction=document.getElementById('exampleRadios2');
    let horror=document.getElementById('exampleRadios3');
    let type;
    if(programming.checked)
    {
        type="programming";
    }
    else if(fiction.checked)
    {
        type="fiction"
    }
    else{
        type="horror";
    }
   let b= new book(name,author,type);
   console.log(b);
    console.log("you have donated the book");
    let d=new display();
    d.clear();
    d.add(b);
    d.show();
    
    
});
 