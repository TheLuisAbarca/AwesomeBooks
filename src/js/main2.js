let data = [];

function bookFuction() {
  const obj = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
  };
  data.push(obj);
  localStorage.setItem("books", JSON.stringify(data));
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  disp();
}

function remove_element(index_no) {
  data.splice(index_no, 1);
  localStorage.setItem("books", JSON.stringify(data));
  disp();
}

function disp() {
  let books = JSON.parse(localStorage.getItem("books"));
  let str = "";
  str = "total number of books : " + books.length + "<br>";
  for (i = 0; i < books.length; i++) {
    str += `
<p>${i + 1}</p>
<h2>${books[i].title}</h2>
<p>${books[i].author}</p>
<button onClick='remove_element("${books.indexOf(
      books[i]
    )}")' type="submit">Remove</button>
<br> <br>
`;
  }

  document.getElementById("bk").innerHTML = str;
}

disp();
