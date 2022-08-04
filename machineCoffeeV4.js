const input = require("sync-input")

let waterStart = 400
let milkStart = 540
let coffeeBeansStart = 120
let cupsStart = 9
let moneyStart = 550

function showOption(
  waterStart,
  milkStart,
  coffeeBeansStart,
  cupsStart,
  moneyStart
) {
  console.log(`The coffee machine has:
${waterStart} ml of water
${milkStart} ml of milk 
${coffeeBeansStart} g of coffee beans
${cupsStart} disposable cups
$${moneyStart} of money`)
}
showOption(waterStart, milkStart, coffeeBeansStart, cupsStart, moneyStart)
console.log(`Write action (buy, fill, take):`)
let choice = input()

switch (choice) {
  case "buy":
    console.log(
      "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"
    )
    let WhatIbuy = Number(input())
    whatIwant(WhatIbuy)
    break

  case "fill":
    // console.log("i fill")
    console.log("Write how many ml of water you want to add:")
    let waterAdd = Number(input())
    waterStart = waterAdd + waterStart

    console.log("Write how many ml of milk you want to add:")
    let milkAdd = Number(input())
    milkStart = milkAdd + milkStart

    console.log("Write how many grams of coffee beans you want to add:")
    let coffeeAdd = Number(input())
    coffeeBeansStart = coffeeAdd + coffeeBeansStart

    console.log("Write how many disposable coffee cups ypu want to add")
    let cupsAdd = Number(input())
    cupsStart = cupsAdd + cupsStart
    break

  case "take":
    //console.log("i take")
    console.log("I gave you $550")
    moneyStart = 0
    break
  default:
    break
}

function whatIwant(WhatIbuy) {
  switch (WhatIbuy) {
    case 1:
      //console.log("espresso")
      let espressoWater = 250
      let espressoCoffee = 16
      let espressoCosts = 4

      waterStart = waterStart - espressoWater
      milkStart = milkStart
      coffeeBeansStart = coffeeBeansStart - espressoCoffee
      cupsStart = cupsStart - 1
      moneyStart = moneyStart + espressoCosts

      break
    case 2:
      //console.log("latte")
      let latteWater = 350
      let latteMilk = 75
      let latteCoffe = 20
      let latteCosts = 7

      waterStart = waterStart - latteWater
      milkStart = milkStart - latteMilk
      coffeeBeansStart = coffeeBeansStart - latteCoffe
      cupsStart = cupsStart - 1
      moneyStart = moneyStart + latteCosts

      break
    case 3:
      //console.log("cappuccino")
      let cappuccinoWater = 200
      let cappuccinoMilk = 100
      let cappucinoCoffee = 12
      let cappucinnoCosts = 6

      waterStart = waterStart - cappuccinoWater
      milkStart = milkStart - cappuccinoMilk
      coffeeBeansStart = coffeeBeansStart - cappucinoCoffee
      cupsStart = cupsStart - 1
      moneyStart = moneyStart + cappucinnoCosts
      break
    default:
      break
  }
}
showOption(waterStart, milkStart, coffeeBeansStart, cupsStart, moneyStart)
