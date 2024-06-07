console.log("Hello world");
const button = document.querySelector("button");
let bodyIsWhite = false;
button.addEventListener("click", ()=>{
    if (bodyIsWhite) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        button.style.color = "white";
        button.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.style.color = "black";
        button.style.backgroundColor = "white";
    }
    bodyIsWhite = !bodyIsWhite;
});

//# sourceMappingURL=index.377278e2.js.map
