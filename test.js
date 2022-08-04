const input = require("sync-input")

let water = Math.floor(
  Number(input("Write how many ml of water the coffee machine has:")) / 200
)
let milk = Math.floor(
  Number(input("Write how many ml of milk the coffee machine has:")) / 50
)
let coffee = Math.floor(
  Number(
    input("Write how many grams of coffee beans the coffee machine has:")
  ) / 15
)
let wantCups = Number(input("Write how many cups of coffee you will need:"))
let totalCups

if (water <= milk && water <= coffee) {
  totalCups = water
} else if (milk <= water && milk <= coffee) {
  totalCups = milk
} else {
  totalCups = coffee
}

if (totalCups >= wantCups) {
  if (totalCups > wantCups) {
    console.log(
      `Yes, I can make that amount of coffee (and even ${
        totalCups - wantCups
      } more than that)`
    )
  } else {
    console.log(`Yes, I can make that amount of coffee`)
  }
} else {
  console.log(`No, I can make only ${totalCups} cups of coffee`)
}

/*const input = require('sync-input')

let waterPerCup = 200
let milkPerCup = 50
let beansPerCup = 15
console.log("Write how many ml of water the coffee machine has:");
let water = input();
console.log("Write how many ml of milk the coffee machine has:");
let milk = input();
console.log("Write how many g of coffee beans the coffee machine has:");
let beans = input();
console.log("Write how many cups of coffee you will need:");
let cups = input();

function calculateAmount (water, milk, beans) {
    waterAmount = water / waterPerCup;
    milkAmount = milk / milkPerCup;
    beansAmount = beans / beansPerCup;
    return Math.min(waterAmount, milkAmount, beansAmount);
}

function calculateCups (neededCups, actualCups) {
    if (neededCups == actualCups) {
        return "Yes, I can make that amount of coffee"
    } else if (neededCups < actualCups) {
        result = actualCups - neededCups
        return `Yes, I can make that amount of coffee (and even ${result} more than that)`
    } else {
        return `No, I can make only ${actualCups} cups of coffee`
    }
}

minCups = calculateAmount(water, milk, beans)
console.log(calculateCups(cups, Math.floor(minCups)))*/
