let car = {
    manufacturer: "BMW",
    model: "X5",
    year: 2020,
    averageSpeed: 60 // км/ч

};

function displayCarInfo() {
    let carInfo = `Производитель: ${car.manufacturer}\nМодель: ${car.model}\nГод выпуска: ${car.year}\nСредняя скорость: ${car.averageSpeed} км/ч`;
    alert(carInfo);
}

displayCarInfo();


function displayTravelTimeOnPage() {
    let distance = 300; //  расстояние в км
    let travelTime = calculateTime(distance);
    document.write(`Для преодоления расстояния ${distance} км потребуется ${travelTime} часов<br><br>`);
}


function displayYearsSinceReleaseOnPage() {
    let yearsElapsed = yearsSinceRelease();
    document.write(`Прошло ${yearsElapsed} лет с момента выпуска автомобиля<br><br>`);
}

// Функция для подсчета времени (в часах) для преодоления  расстояния со средней скоростью
function calculateTime(distance) {
    let travelTime = distance / car.averageSpeed; // время в часах
    let restCount = Math.floor(travelTime / 4); // количество перерывов на 1 час каждые 4 часа

    // Учитываем время на перерывы
    if (restCount > 0) {
        travelTime += restCount;
    }

    return travelTime;
}

// Функция для определения количества лет с момента выпуска автомобиля
function yearsSinceRelease() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - car.year;
}




