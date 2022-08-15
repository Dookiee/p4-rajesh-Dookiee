function* fibonacci(n){
    let previous =0, current = 1, result=0, counter = 1;
    if(result == 0)
        result = previous + current
        yield 0
    while(n != counter){
        counter++
        result = current + previous
        previous = current
        current = result
        yield result
    }
}


const obj = fibonacci(25)
let loop = false
while(!loop){
    let iterator = obj.next()
    console.log(iterator.value)
    loop = iterator.done
}



