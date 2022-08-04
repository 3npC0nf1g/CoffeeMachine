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
let choice
do {
  console.log(`Write action (buy, fill, take, remaining, exit):`)
  choice = input()

  switch (choice) {
    case "buy":
      console.log(
        "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:"
      )
      let WhatIbuy = Number(input())
      whatIwant(WhatIbuy)
      break

    case "fill":
      console.log("Write how many ml of water do you want to add:")
      let waterAdd = Number(input())
      waterStart = waterAdd + waterStart

      console.log("Write how many ml of milk do you want to add:")
      let milkAdd = Number(input())
      milkStart = milkAdd + milkStart

      console.log("Write how many grams of coffee beans do you want to add:")
      let coffeeAdd = Number(input())
      coffeeBeansStart = coffeeAdd + coffeeBeansStart

      console.log("Write how many disposable coffee cups do you want to add")
      let cupsAdd = Number(input())
      cupsStart = cupsAdd + cupsStart
      break

    case "take":
      console.log(`I gave you $${moneyStart}`)
      moneyStart = 0
      break

    case "remaining":
      showOption(waterStart, milkStart, coffeeBeansStart, cupsStart, moneyStart)
    default:
      break
  }

  function whatIwant(WhatIbuy) {
    switch (WhatIbuy) {
      case 1:
        let espressoWater = 250
        let espressoCoffee = 16
        let espressoCosts = 4

        if (waterStart > espressoWater && coffeeBeansStart > espressoCoffee) {
          console.log("I have enough resources, making you a coffee!")
          waterStart = waterStart - espressoWater
          coffeeBeansStart = coffeeBeansStart - espressoCoffee
          cupsStart = cupsStart - 1
          moneyStart = moneyStart + espressoCosts
        } else {
          if (espressoWater > waterStart) {
            console.log("Sorry, not enough water!")
          } else {
            console.log("Sorry, not enough coffee beans!")
          }
        }
        break
      case 2:
        let latteWater = 350
        let latteMilk = 75
        let latteCoffe = 20
        let latteCosts = 7
        if (
          waterStart > latteWater &&
          milkStart > latteMilk &&
          coffeeBeansStart > latteCoffe
        ) {
          console.log("I have enough resources, making you a coffee!")
          waterStart = waterStart - latteWater
          milkStart = milkStart - latteMilk
          coffeeBeansStart = coffeeBeansStart - latteCoffe
          cupsStart = cupsStart - 1
          moneyStart = moneyStart + latteCosts
        } else {
          if (latteWater > waterStart) {
            console.log("Sorry, not enough water!")
          } else {
            if (latteMilk > milkStart) {
              console.log("Sorry, not enough milk!")
            } else {
              console.log("Sorry, not enough coffee beans!")
            }
          }
        }
        break
      case 3:
        let cappuccinoWater = 200
        let cappuccinoMilk = 100
        let cappucinoCoffee = 12
        let cappucinnoCosts = 6
        if (
          waterStart > cappuccinoWater &&
          milkStart > cappuccinoMilk &&
          coffeeBeansStart > cappucinoCoffee
        ) {
          console.log("I have enough resources, making you a coffee!")
          waterStart = waterStart - cappuccinoWater
          milkStart = milkStart - cappuccinoMilk
          coffeeBeansStart = coffeeBeansStart - cappucinoCoffee
          cupsStart = cupsStart - 1
          moneyStart = moneyStart + cappucinnoCosts
        } else {
          if (cappuccinoWater < waterStart) {
            console.log("Sorry, not enough water!")
          } else {
            if (cappuccinoMilk < milkStart) {
              console.log("Sorry, not enough milk!")
            } else {
              console.log("Sorry, not enough coffee beans!")
            }
          }
        }
        break

      case "back":
        break
      default:
        break
    }
  }
} while (choice !== "exit")
