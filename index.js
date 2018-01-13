
function start() {
  const search = document.getElementById("search");
  search.addEventListener("click", clear);
  search.addEventListener("click", search);
}

function search() {
  const input = document.getElementById("search-box").value;
  const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&callback=?&format=json";

    fetch(url)
    .then(response => response.json())
    .then((data) =>  {
    console.log(data);
    display(data);
    });
}

function display(data) {
  const results = document.getElementById("results");

  for(let i = 0; i < data[1].length; i++) {
    results.insertAdjecentHTML("afterbegin", "li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
  }
}

function clear() {
  document.getElementById("results").innerHTML = '';
}

document.addEventListener("DOMContentLoaded", search);

