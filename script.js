

class Ship {
    constructor(shipName, hitPoints, damagePoints, className) {
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePoints = damagePoints;
        // this.className = className;
        // this.hasBeenDestroyed = false;
    }

    attackShip() {
        let damageTaken = this.hitPoints -= this.damagePoints;
        this.hitPoints = damageTaken
        // if(this.hitPoints <= 0 ){
        //     this.hasBeenDestroyed = true;
        //     console.log(`${this.shipName} has taken ${this.damagePoints} damage and has been destroyed`)
        //     console.log(`hasBeenDestroyed = ${this.hasBeenDestroyed}`)
        // } else{
        //     console.log(`${this.shipName} has taken ${this.damagePoints} damage and its remaning health is ${this.hitPoints} points`)
        //     console.log(`hasBeenDestroyed = ${this.hasBeenDestroyed}`)
        // } 
    }

}

class MotherShip extends Ship {
    constructor() {
        super("Mothership", 100, 9)
    }
}

class AttackShip extends Ship {
    constructor() {
        super("Attack Ship", 45, 12)
    }
}

class DefenceShip extends Ship {
    constructor() {
        super("Defence Ship", 80, 10)
    }
}

const shipContainer = document.querySelector(".ship-container");

const populateAlienShipArray = () => {

    let alienShipArray = [];

    const numOfMotherShips = 1
    const numOfAttackShips = 8
    const numOfDefenceShips = 5
    const totalAlienShips = numOfAttackShips + numOfAttackShips + numOfDefenceShips;

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
        } else if (i < totalAlienShips) {
            newDefenceShip = new DefenceShip();
            alienShipArray.push(newDefenceShip);
        }
    }
}

// how would this work with appendChild etc?? need a seperate reset function?
// const populateHTML = () => {
//     shipContainer.removeChild()

//     alienShipArray.forEach(ship => {
//         const alienShipDiv = document.createElement("div")
//         const alienShipName = document.createElement("p")
//         const alienShipHP = document.createElement("p")

//         shipContainer.appendChild(alienShipDiv)
//         alienShipDiv.appendChild(alienShipName)
//         alienShipDiv.appendChild(alienShipHP)
//     })
// }


const populateHTML = () => {
    shipContainer.innerHTML = "";

    alienShipArray.forEach(ship => {
        shipContainer.innerHTML += `<div><p>${ship.shipName}</p><p>${ship.hitPoints}</p>`
    });
};

const attackRandomShip = () => {
    const randomShipIndex = [Math.floor(Math.random() * alienShipArray.length)]
    const randomShip = alienShipArray[randomShipIndex];
    randomShip.attackShip();
    if (randomShip.hitPoints <= 0 && randomShip.shipName === "Mothership") {
        alienShipArray = [];
        alert("The Aliens have been defeated! You are VICTORIOUS!")
        populateHTML()
    } else if (randomShip.hitPoints <= 0) {
        alienShipArray, splice(randomShipIndex, 1);
    };
};

const onClickDamageShip = () => {
    populateHTML();
    attackRandomShip(alienShipArray)
}

const startGame = () => {
 populateAlienShipArray()
 populateHTML()
}


// const ship1 = new Ship ("Attack Ship 1",10,4)

// ship1.attackDamage();
// ship1.attackDamage();
// ship1.attackDamage();


