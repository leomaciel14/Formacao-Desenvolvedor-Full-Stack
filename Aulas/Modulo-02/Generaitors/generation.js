function* g1() {
    yield [1,2,3,4,5,6,7,8,9,10]
}

function* g2() {
    yield* [1,2,3,4,5,6,7,8,9,10]
}

let gg1 = g1()
let gg2 = g2()

let ggg1 = gg1.next()
let ggg2 = gg2.next()

console.log(ggg1)
console.log(ggg2)


function* fibonacci() {
    let a = 1;
    let b = 1;

    while (true) {
        let current = b
        b = a
        a += current
        yield current
    }
}

let fib = fibonacci()
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())