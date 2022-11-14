const navbarItems = document.querySelectorAll(".header__nav-link");
const location_ = document.location.href.split("/");
const currentLocation = location_[location_.length - 1].split(".")[0];

const links = {
    index: 0,
    utils: 1,
    plans: 2,
};

navbarItems.forEach((item) => {
    item.classList.remove("header__nav-link--active");
});

navbarItems[links[currentLocation]].classList.add("header__nav-link--active");
