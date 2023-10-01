const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const users = data.map((user) => {
      return `<li>${user.name}</li>`;
    });

    document.querySelector("#users").innerHTML = users.join("");
  });
