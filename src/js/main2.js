let data = [];

function addBook() {
  const obj = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
  };
  data.push(obj);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  disp();
}

function remove_element(index_no) {
  let title = data.splice(index_no, 1);
  disp();
}

function disp() {
  let str = "";
  str = "total number of books : " + data.length + "<br>";
  for (i = 0; i < data.length; i++) {
    str += `
<p>${i + 1}</p>
<h2>${data[i].title}</h2>
<p>${data[i].author}</p>
<button onClick='remove_element("${data.indexOf(
      data[i]
    )}")' type="submit">Remove</button>
<br> <br>
`;
  }

  document.getElementById("bk").innerHTML = str;
}
