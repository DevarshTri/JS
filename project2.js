function getandupdate(){
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;

    if(localStorage.getItem('itemjson')==null){
        itemjsonarr = [];
        itemjsonarr.push([tit,desc]);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
    else{
        itemjsonarrstr=localStorage.getItem('itemjson');
        itemjsonarr = JSON.parse(itemjsonarrstr);
        itemjsonarr.push([tit,desc]);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
update();
    
}
function update(){
    if(localStorage.getItem('itemjson')==null){
        itemjsonarr = [];
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
    else{
        itemjsonarrstr=localStorage.getItem('itemjson');
        itemjsonarr = JSON.parse(itemjsonarrstr);
    }
    let tableb = document.getElementById("tableb");
    let str="";
    itemjsonarr.forEach((element,index) => {
        str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-danger" onClick="deleted(${index})">Delete</button></td>
      </tr>`;
    });
    tableb.innerHTML=str;
}
add = document.getElementById('add')
add.addEventListener('click',getandupdate);
update();

function deleted(itemIndex){
    itemjsonarrstr=localStorage.getItem('itemjson');
        itemjsonarr = JSON.parse(itemjsonarrstr);
        itemjsonarr.splice(itemIndex,1);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
        update();

}
function clr(){
    if(confirm("Do you Want to Clear List?")){
    localStorage.clear();
    update();
    }
}