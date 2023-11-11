const search_box=document.getElementById("search_box")
const listContainer=document.getElementById("list")

function addTask()
{
    if(search_box.value == '')
    {
        alert("You must write something")
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=search_box.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    search_box.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML)
}

function showList()
{
    listContainer.innerHTML=localStorage.getItem("data")
}

showList()