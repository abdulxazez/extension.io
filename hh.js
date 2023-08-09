
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()' id='btn-2'>Buy!</button>"
function buy(){
    container.innerHTML += "<p>Thank You for Buying</p>"
}
let listitems = ""
let ulEl = document.getElementById("ul-el")
let myLeads = []
let inputEl = document.getElementById("input-el")
let savebtn = document.getElementById("input-btn")
savebtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
})
function renderleads(){
for(let i = 0; i < myLeads.length; i++){
    //listitems = "<li><a  target='_blank' href=' " + myLeads[i] + " '>" + myLeads[i]  +"</a></li>"
    listitems = 
    ` <li>
    <a  target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
    </li>` 
}
            
ulEl.innerHTML += listitems
}
