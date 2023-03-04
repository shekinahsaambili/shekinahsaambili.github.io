// alert("COol")
function getValue(e){
    var input = document.getElementById("inscription");
    console.log(input)
    var data = new FormData(input)
    console.log(data)
    e.preventDefault();
}
const form = document.getElementById("testForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data =new FormData(form);
    const name = data.get("user_name");
    const email = data.get("user_email");
    const password= data.get("user_password")
    let result= document.getElementById("para")
    
    result.innerText="Vous avez été enregistré avec succès"
    let paragraph= document.getElementById("message")
    paragraph.innerText= "vous pouvez naviguer dans votre compte sur le site"
    let home= document.getElementById("home")
    home.innerText="home"
    let about=document.getElementById("about")
    about.innerText="About US"
    let service= document.getElementById("service")
    service.innerText="Services"
    let contact= document.getElementById("contact")
    contact.innerText="Contacts"
    let galerie= document.getElementById("galerie")
    galerie.innerText="GAllerie"

        
    





   
})




