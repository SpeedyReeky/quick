document.body.style.backgroundColor="rgb(160, 2, 2)"
let btn=document.createElement("button")
let click=document.createTextNode("click")


document.body.appendChild(btn)
btn.appendChild(click)
let container=document.createElement("div")
document.body.appendChild(container)
container.style.width="100%"
container.style.marginLeft="35px"
container.style.marginRight="35px"


function element(){
    let card=document.createElement("div")
    let title_space=document.createElement("h1")
    let sub_title_space=document.createElement("h3")
    let img=document.createElement("img")
    let title=document.createTextNode("Ferrari")
    let sub_title=document.createTextNode("Car")
    card.style.backgroundColor="rgb(194, 0, 0)"


    card.style.padding="15px"
    card.style.width="200px"
    img.style.width="100%"
    card.style.margin="17px"
    card.style.paddingTop="10px"
    card.style.display="inline-block"
    card.style.borderRadius="15px"
    img.style.borderRadius="15px"
    // card.style.width="300px"
    // img.style.width="100%"
    // card.style.display="inline-block"
    // title_space.style.margin="20px"
    // sub_title_space.style.margin="20px"
    // title_space.style.marginTop="20px"
    // sub_title_space.style.marginTop="20px"
    // card.style.paddingTop="15px"
    // card.style.marginTop="15px"



    container.appendChild(card)
    card.appendChild(title_space)
    card.appendChild(sub_title_space)
    card.appendChild(img)
    title_space.appendChild(title)
    sub_title_space.appendChild(sub_title)
    img.src="Images/Red Ferrari F1.jpg"
}
btn.addEventListener("click",function(){
    element()
})