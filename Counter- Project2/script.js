let count = 0;

let value = document.getElementById("value");
let button = document.querySelectorAll(".btn");

button.forEach (function (item) {
    item.addEventListener ("click", function (val) {
        let style = val.currentTarget.classList;
        if (style.contains("increase")) {
            count++;
        } else if (style.contains("decrease")) {
            count--;
        } else if (style.contains("reset")) {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "#008000"
        } else if (count < 0) {
            value.style.color = "#ff0000";
        } else {
            value.style.color = "#000000"
        }

        value.textContent = count;

    })
})

