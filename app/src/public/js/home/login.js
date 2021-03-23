"use strict";

const id = document.querySelector("#id");
  psword = document.querySelector("#psword"),
    loginBtn = doucument.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.syringify(req)
    }) 
}