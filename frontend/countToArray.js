function countToArray(firstNumber, lastNumber) {
    let numbers = []
    for (let i = firstNumber; i < lastNumber; i++) {
       // numbers.push(i.toString())
       // numbers.push(""+i)
       // numbers.push(String(i))
       // numbers.push(`${i}`)
       let stringNumber = i.toString()
       numbers.push(stringNumber)
    }
    return numbers
}

const countToArray = (firstNumber, lastNumber) => {
    const numbers = []
    for (let i= firstNumber; i < lastNumber; i++) {
        n/* umbers.push(`${i}`)
    }
    return numbers
}  */

const countToArray = (firstNumber, lastNumber) => Array.from(Array(lastNumber - firstNumber)).map((item, i) => `${firstNumber + i}`)
   /*  const toArray = Array(lastNumber - firstNumber)
    const fillArray = Array.from(Array(lastNumber - firstNumber))
    const updateArray = fillArray.map((item, i) => `${firstNumber + i}`)
    return updateArray
} */

console.log(countToArray(10, 30));