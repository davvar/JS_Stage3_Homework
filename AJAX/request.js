const btn = document.querySelector("button");
let content = document.querySelector("#demo");
let inputValue = document.querySelector('input')
let index = 0;

  
btn.onclick = () => {
  document.querySelector("#div").classList.add("div");
  document.querySelector("body").style.overflowY = "hidden";
  setTimeout(() => {
    document.querySelector("#div").classList.remove("div");
    document.querySelector("body").style.overflowY = "visible";
  }, 2000);


  (function(param) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      
      if (this.readyState === 4 && this.status === 200) {
        let json = JSON.parse(request.responseText)[param];
        content.innerHTML += `
        <div class='contentChild'>
        <p class='title'>${json.title}</p><hr>
        <p class='body'>${json.body}</p>
        </div>`;
      }
    };
    
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.send();
  })(index);
  index += 1;
};

