const plansForm = document.querySelector(".plans-form");
const plansFormInput = document.querySelector(".plans-form__input");
const plansList = document.querySelector(".plans-list");

plansForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    localStorage.setItem(
        "plans",
        JSON.stringify([...plans, plansFormInput.value])
    );
    plansList.insertAdjacentElement(
        "afterBegin",
        createPlanItem(plansFormInput.value)
    );

    const deleteButton = document.querySelectorAll(
        ".plans-list-item__deleteButton"
    )[0];
    deleteButton.addEventListener("click", (event) => {
        const plans = JSON.parse(localStorage.getItem("plans")) || [];
        const newPlans = plans.filter(
            (plan) =>
                plan !==
                event.target.closest("div").querySelector("p").innerText
        );
        localStorage.setItem("plans", JSON.stringify(newPlans));

        plansList.removeChild(event.target.closest("div"));
    });
    plansFormInput.value = "";
});

const createPlanItem = (value) => {
    const template = document.createElement("div");
    template.classList.add("plans-list-item");
    template.innerHTML = `
    <p class="plans-list-item__value">${value}</p>
    <button class="plans-list-item__deleteButton">Delete</button>
    `;
    return template;
};

window.addEventListener("load", () => {
    const currentPlans = JSON.parse(localStorage.getItem("plans")) || [];
    currentPlans.forEach((plan) => {
        plansList.insertAdjacentElement("afterBegin", createPlanItem(plan));
    });
    const deleteButtons = document.querySelectorAll(
        ".plans-list-item__deleteButton"
    );
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const plans = JSON.parse(localStorage.getItem("plans")) || [];
            const newPlans = plans.filter(
                (plan) =>
                    plan !==
                    event.target.closest("div").querySelector("p").innerText
            );
            localStorage.setItem("plans", JSON.stringify(newPlans));

            plansList.removeChild(event.target.closest("div"));
        });
    });
});
