// Part 1: Humble Beginnings

class Companion {
  constructor(name, type, belongings = []) {
    this.name = name;
    this.type = type;
    this.belongings = belongings;
  }
}

class Adventurer {
  constructor(name, health, inventory, companion) {
    this.name = name;
    this.health = health;
    this.inventory = inventory;
    this.companion = companion;
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }

  listInventory() {
    console.log(`${this.name}'s Inventory:`);
    this.inventory.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
const leo = new Companion("Leo", "Cat", frank);
const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], leo);

// Robin's inventory log
robin.listInventory();
