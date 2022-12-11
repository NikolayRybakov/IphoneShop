let btn = document.querySelector(".form-review__button");
let inp = document.querySelector(".form-review__input-text");
let error = document.querySelector(".form-error");

btn.addEventListener("click", () => {
    if (inp.value === "" || inp.value.length < 2) {
        error.style.display = "none";
        inp.style.marginBottom = "31px";
    }
})     