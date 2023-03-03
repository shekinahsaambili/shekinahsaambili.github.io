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
    let home=data.get("galerie")
    home.innerText=
})




