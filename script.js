const loadPhones = async (forfinal) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${forfinal}`
    const res = await fetch(url)
    const data = await res.json()
    displayphones(data.data)
    
  }
  

//   this is part make it again


let displayphones=(phones)=>{
    let get=document.getElementById("container")
    get.textContent=""
    
    phones.forEach((phone)=>{
        let forcreate=document.createElement("div")
        forcreate.classList.add("div")

        forcreate.innerHTML=`
        
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>  

        `
        get.appendChild(forcreate)

    })
}



document.getElementById("search").addEventListener("click",function(){

let fotinput=document.getElementById("textinput")
let forfinal=fotinput.value

loadPhones(forfinal)

})

  loadPhones();
  