const fireButton = document.querySelector(".fire-button")
const newGameButton = document.querySelector(".new-game-button")
const damageAlertBox = document.querySelector(".damage-alert-box")


class Ship {
    constructor(shipName, hitPoints, damagePerHit,className) {
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
        this.className = className;
    };

        damageShip() {
            this.hitPoints = this.hitPoints - this.damagePerHit;
            damageAlertBox.innerHTML = "";
            damageAlertBox.innerHTML = `${this.shipName} was dealt ${this.damagePerHit} damage`

        };
};

class AttackShip extends Ship {
    constructor() {
        super("Attack Ship", 45, 12, "attack-ship");
    };
};

class DefenceShip extends Ship {
    constructor() {
    super("Defence Ship", 80, 10, "defence-ship");
    };
};

class MotherShip extends Ship {
    constructor() {
        super("Mothership", 100, 9, "mothership");
        };
};

const shipContainer = document.querySelector(".ship-container");

let alienShipArray = [];

const populateAlienShipArray = () => {

    alienShipArray = [];

    const numOfMotherShips = 1
    const numOfAttackShips = 8
    const numOfDefenceShips = 5
    const totalAlienShips = numOfMotherShips + numOfAttackShips + numOfDefenceShips;

    for (let i = 0; i < totalAlienShips; i++) {

        let newMotherShip;
        let newAttackShip;
        let newDefenceShip;

        if (i < numOfMotherShips) {
            newMotherShip = new MotherShip();
        alienShipArray.push(newMotherShip);
        } else if (i <= numOfAttackShips) {
            newAttackShip = new AttackShip(); 
            alienShipArray.push(newAttackShip);
        } else if (i <= totalAlienShips) {
            newDefenceShip = new DefenceShip();
            alienShipArray.push(newDefenceShip);
        };
    };
};

const populateTheHTML = () => {
    shipContainer.innerHTML = "";
    alienShipArray.forEach(ship => {
        shipContainer.innerHTML += `<div class="${ship.className}"><p>${ship.shipName}: ${ship.hitPoints}</p></div>`;
    });
};

const damageRandomShip = () => {
    const randomShipIndex = [Math.floor(Math.random() * alienShipArray.length)]
    const randomShip = alienShipArray[randomShipIndex];
    randomShip.damageShip();
    if (randomShip.hitPoints <= 0 && randomShip.shipName === "Mothership") {
        alienShipArray = [];
        populateTheHTML();
        alert("You defeated the aliens! You are VICTORIOUS!");
    } else if (randomShip.hitPoints <= 0) {
        alienShipArray.splice(randomShipIndex, 1);
    };
};

const doDamageOnClick = () => {
    populateTheHTML();
    damageRandomShip(alienShipArray);
};

const startGame = () => {
    populateAlienShipArray();
    populateTheHTML();
};

fireButton.addEventListener("click", () => {
    doDamageOnClick()
})

newGameButton.addEventListener("click", () => {
    startGame()
    console.log(alienShipArray)
})


