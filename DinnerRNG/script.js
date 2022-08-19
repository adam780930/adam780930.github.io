const generate = document.getElementById("generate");

const food = document.getElementById("food");
const days = document.querySelectorAll("li");

const selectedMeal = document.getElementById("selectedMeal");
const meal = ["Breakfast", "Lunch", "Dinner"];

const fastfoodChecked = document.getElementById('includeFastfood');

for (var i = 0; i < meal.length; i++) {
    var opt = meal[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectedMeal.appendChild(el);
}

generate.addEventListener('click', () => {
    runAnswers();
});

days.forEach(
    function (days) {
        days.addEventListener("click", () => {
            for (var el = document.getElementsByClassName('daySelected'),
                i = 0, l = el.length; l > i; i++) {
                el[0].classList.remove("daySelected");
            }
            days.classList.add('daySelected');
        })
    });


const foodChoices = ["Tamaya", "Delicious Food Corner", "PandaExpress", "Tokyo Lobby", "Hawaiian BBQ",
    "California Fish Grill", "Poke and Wings Co.", "WingStop", "Higo Express", "BCD Tofu House", "Nijiya"];

const breakfastChoices = ["McDonald's", "Jack in the Box", "Chik-fil-A", "Chinese Market", "HK Market", "Subway"];

const foodChoicesFastfood = ["Tamaya", "Delicious Food Corner", "PandaExpress", "Tokyo Lobby", "Hawaiian BBQ",
    "California Fish Grill", "Five Guys", "Poke and Wings Co.", "WingStop", "Chipotle", "Chik-fil-A", "Raising Cane",
    "Higo Express", "Habit Burger", "Subway", "BCD Tofu House", "Nijiya", "In n Out", "McDonald's", "Jack in the Box"];

const day1 = ["Tamaya", "Delicious Food Corner", "PandaExpress", "Tokyo Lobby", "Hawaiian BBQ",
    "California Fish Grill", "Poke and Wings Co.", "WingStop", "Higo Express", "BCD Tofu House", "Nijiya"];
const day2 = ["this is day 2", "this is still day 2"];
const day3 = ["this is day 3", "this is still day 3"];
const day4 = ["this is day 4", "this is still day 4"];
const day5 = ["this is day 5", "this is still day 5"];
const day6 = ["this is day 6", "this is still day 6"];
const day7 = ["this is day 7", "this is still day 7"];

function runAnswers() {

    var day = document.getElementsByClassName('daySelected');

    if (day.length == 0) {
        alert("Select a day");
        return;
    } else if (selectedMeal.value == "Which meal is it?") {
        alert("Select a meal");
        food.innerHTML = "...";
        return;
    }

    if (selectedMeal.value === "Breakfast") {
        var number = Math.floor(Math.random() * breakfastChoices.length);
        food.innerHTML = breakfastChoices[number];
    } else if (fastfoodChecked.checked) {
        var number = Math.floor(Math.random() * foodChoicesFastfood.length);
        food.innerHTML = foodChoicesFastfood[number];
    } else if (day[0].innerHTML === "Monday") {
        var number = Math.floor(Math.random() * day1.length);
        food.innerHTML = day1[number];
    } else {
        var number = Math.floor(Math.random() * foodChoices.length);
        food.innerHTML = foodChoices[number];
    }
};