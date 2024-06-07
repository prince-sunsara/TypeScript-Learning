console.log("Hello world");

const button = document.querySelector("button") as HTMLButtonElement;
let bodyIsWhite: boolean = false;

button.addEventListener("click", () => {
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
