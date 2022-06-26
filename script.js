

class Ship{
    constructor(shipName,hitPoints,damagePoints, className){
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePoints = damagePoints;
        // this.className = className;
        // this.hasBeenDestroyed = false;
    }

    attackDamage(){
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

class MotherShip extends Ship{
    constructor() {
        super("Mothership", 100, 9)
    }
}

class AttackShip extends Ship{
    constructor() {
        super("Attack Ship", 45, 12)
    }
}

class DefenceShip extends Ship{
    constructor() {
        super("Attack Ship", 80, 10)
    }
}

const shipContainer = document.querySelector(".ship-container");

let alienShipArray = [];

const numOfMotherShips = 1
const numOfAttackShips = 8
const numOfDefenseShips = 5
const totalAlienShips = numOfAttackShips + numOfAttackShips + numOfDefenseShips;

for (let i = 0; i < totalAlienShips; i++){

    let newMotherShip;
    let newAttackShip;
    let newDefenceShip;

    if (i < numOfMotherShips){
        newMotherShip = new MotherShip();
        alienShipArray.push(newMotherShip);
    } else if (i <= numOfAttackShips){
        newAttackShip = new AttackShip();
        alienShipArray.push(newAttackShip);
    } else if (i < totalAlienShips){
        newDefenceShip = new DefenceShip();
        alienShipArray.push(newDefenceShip);
    }



}

// const ship1 = new Ship ("Attack Ship 1",10,4)

// ship1.attackDamage();
// ship1.attackDamage();
// ship1.attackDamage();


