function printName() {
    const name = prompt("Ваше имя?", "");
    alert("Привет, " + name + "!");
}

function doByAge() {
    const age = prompt("Ваш возраст?", "");
    switch(true) {
        case age > 30:
            alert("Ложитесь спать, завтра на работу!");
            break;
        case age >= 18:
            alert("Вы совершеннолетний, все можно!");
            break;
        case age < 18:
            alert("Вам надо учить уроки!");
            break;
    }
}

printName();
doByAge();