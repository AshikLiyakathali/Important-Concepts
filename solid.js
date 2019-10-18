// S.O.L.I.D. STANDS FOR:
// S — Single responsibility principle
// O — Open closed principle
// L — Liskov substitution principle
// I — Interface segregation principle
// D — Dependency Inversion principle

// Single responsibility principle
// A class should have one and only one reason to change, meaning that a class should only have one job.

const circle = (radius) => {
    const proto = { 
      type: 'Circle',
      //code 
    }
    return Object.assign(Object.create(proto), {radius})
  }

const square = (length) => {
    const proto = { 
      type: 'Square',
      //code 
    }
    return Object.assign(Object.create(proto), {length})
}

// What is a factory function ?
// In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function. 

const areaCalculator = (s) => {
    const proto = {
      sum() {
        // logic to sum
      },
      output () {
       return this.sum()} 
      }
    }
    return Object.assign(Object.create(proto), {shapes: s})

const shapes = [
    circle(2),
    square(5),
    square(6)
  ]
const areas = areaCalculator(shapes)
console.log(areas.output())


const shapes = [
    circle(2),
    square(5),
    square(6)
  ]
  const areas  = areaCalculator(shapes)
  const output = sumCalculatorOputter(areas)
  console.log(output.JSON())
  console.log(output.HAML())
  console.log(output.HTML())
  console.log(output.JADE())
