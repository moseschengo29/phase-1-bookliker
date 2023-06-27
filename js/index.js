const booksList = document.querySelector("#list");
const panel = document.querySelector("#show-panel");

document.addEventListener("DOMContentLoaded", function () {
  showBookList();
});

const showBookList = function () {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then(function (data) {
      data.forEach((element) => {
        const bkList = document.createElement("li");
        bkList.classList.add("list-item");
        bkList.textContent = element.title;

        booksList.append(bkList);

        bkList.addEventListener("click", function () {
          //   element.remove();
          panel.innerHTML = "";
          showBookDetails(element);
        });
      });
    });
};

const showBookDetails = function (book) {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then(function () {
      //   console.log(book);

      const bookDetails = document.createElement("div");
      bookDetails.innerHTML = `
            <img src="${book.img_url}" alt="" class="book-title">            
            <h2>Title: ${book.title}</h2>
            <h3>Subtitle: ${book.subtitle}</h3>
            <h3>Author: ${book.author}</h3>
            <p>Description: ${book.description}</p>

            <button>Like</button>
        
        `;

      panel.appendChild(bookDetails);
    });
};
