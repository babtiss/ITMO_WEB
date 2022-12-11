const loader = document.querySelector(".loader");
const users = document.querySelector(".users");
const error = document.querySelector(".error");
const userList = document.querySelector(".users-list");
const pagination = document.querySelector(".users-list-pagination");

const createTemplate = (name, username, email) => {
    return `<div class="users-list__item">
                <h2>Name: <strong>${name}</strong></h2>
                <h2>Username: <strong>${username}</strong></h2>
                <p>Email: <strong>${email}</strong></p>
            </div>`;
};

window.addEventListener("load", async () => {
    loader.style.display = "block";
    userList.style.display = "none";
    error.style.display = "none";

    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => {
            data.slice(0, 1).forEach(({ name, username, email }) => {
                userList.insertAdjacentHTML(
                    "afterbegin",
                    createTemplate(name, username, email)
                );
            });
            loader.style.display = "none";
            userList.style.display = "flex";
            error.style.display = "none";

            for (let i = 0; i < data.length; i++) {
                pagination.insertAdjacentHTML(
                    "afterbegin",
                    `<div class='users-list-pagination__page ${
                        i === 0 ? "users-list-pagination__page_active" : ""
                    }'>${i + 1}</div>`
                );
                const pages = document.querySelectorAll(
                    ".users-list-pagination__page"
                );
                const lastPage = pages[0];

                lastPage.addEventListener("click", (event) => {
                    userList.innerHTML = "";
                    pages.forEach((page) =>
                        page.classList.remove(
                            "users-list-pagination__page_active"
                        )
                    );
                    lastPage.classList.add(
                        "users-list-pagination__page_active"
                    );
                    userList.insertAdjacentHTML(
                        "afterbegin",
                        createTemplate(
                            data[Number(event.target.innerText) - 1].name,
                            data[Number(event.target.innerText) - 1].username,
                            data[Number(event.target.innerText) - 1].email
                        )
                    );
                });
            }
        })
        .catch(() => {
            loader.style.display = "none";
            userList.style.display = "none";
            error.style.display = "block";
        });
});
