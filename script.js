const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://klike.net/uploads/posts/2020-03/1584958601_6.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

const main = document.querySelector('.main');

class Transport {
    constructor(type, price, brand, getInfo, getPrice) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return `Vehicle type: ${this.type}.<br>
         Brand: ${this.brand}.`;
    }
    getPrice() {
        return ` Vehicle price: ${this.price} RUB.`;
    }
}
class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand)
        this.doors = doors;

    }
    getDoorsCount() {
        return `Doors: ${this.doors}.`;
    }

};

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand)
        this.speed = maxSpeed;

    }
    getMaxSpeed() {
        return ` Speed ${this.speed} km/h.`;
    }
}

function showInfoCar(car, image) {
    let info = '';
    info = `<div class="transport">
    <div class="transport__info">${car.getInfo()}</div>
    <div class="transport__price">${car.getPrice()}</div>
    <div class="transport__doors">${car.getDoorsCount()}</div>
    <div class="transport__image"> <img class='image' src="${image}" alt="image"> </div>
        </div>`
    main.innerHTML += info;
}

function showInfoBike(bike, image) {
    let info = '';
    info = `<div class="transport">
<div class="transport__info">${bike.getInfo()}</div>
<div class="transport__price">${bike.getPrice()}</div>
<div class="transport__speed">${bike.getMaxSpeed()}</div>
<div class="transport__image"> <img class='image' src="${image}" alt="image"> </div>
    </div>`
    main.innerHTML += info;
}
function createElements(type, car, image, bike) {
    return type === 'car' ? showInfoCar(car, image) : showInfoBike(bike, image)
}
data.forEach((item) => {
    const car = new Car(item.type, item.price, item.brand, item.doors);
    const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);

    createElements(item.type, car, item.image, bike);
})
