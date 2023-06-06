"use strict";

const todoIdBtn = document.getElementById("todoIdBtn")
const todoid = document=getElementById("todoid")

window.onload = init;

function init(){
    todoIdBtn.onclock = ontodoIdBtnClick;
    console.log("init...")
}


function ontodoIdBtnClick(){
    console.log("button click...")
    let theUrl = "https.//jsonplaceholder.typeicode.com/todos/"
    fetch(theUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let messege = 'TODO: ${data.title} User: ${data.users'
    })
}

window.onload = init;