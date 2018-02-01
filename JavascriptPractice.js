'use strict';
//task 1 
    function sequence(start, step) {
        if (!start) {start = 0;}
        let counter = start;
        return () => {

            if (!step) {
                return counter++;
            } else {
                counter = counter + step
                return counter - step;
            }
        }
    }
//tests for task 1
    /*var generator = sequence(10, 3);
    var generator2 = sequence(7, 1);
    var generator3 = sequence();

    console.log(generator()); // 10
    console.log(generator()); // 13
    console.log(generator2()); // 7
    console.log(generator3()); // 0
    console.log(generator()); // 16
    console.log(generator2()); // 8
    console.log(generator3()); // 1
    */
//task 2
    function take(fn, count) {
        resultArr = [];
        for (i=0; i < count; i++) {
            resultArr.push(fn());
        }
        return resultArr;
    }
//tests for task 2
    /*var gen2 = sequence(0, 2);
    console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
    */
//task 3
    function map(fn, array) {
        arr = array.slice();
        result = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result.push(fn(element));
        }
        return result;
    }   
//tests for task 3
    /*function square(x) { return x * x; } // возведение в квадрат
    console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
    console.log(map(square, [])); // []
    var arr = [1, 2, 3];
    console.log(map(square, arr)); // [1, 4, 9]
    console.log(arr); // [1, 2, 3]
    */
//task 4
    function fmap(a, gen) {
        return function() {
            let result = a(gen(...arguments));
            return result;
        }
    }

//tests for task 4
    /*var gen = sequence(1, 1);
    function square(x) { return x * x; }
    var squareGen = fmap(square, gen);

    console.log(squareGen()); // 1
    console.log(squareGen()); // 4
    console.log(squareGen()); // 9
    console.log(squareGen()); // 16
  
    function add(a, b) { 
        return a + b; 
      }
      
    // Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
    var squareAdd = fmap(square, add);
    console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
    console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
    */
//task 5
    function partial(fn) {
        let args = [];
        for (i = 1; i < arguments.length; i++) {
            args[i-1] = arguments[i];
        }
        return function () {
            let result = fn(...args, ...arguments);
            return result;
        }
    }

//tests for task 5
    /*function add(a, b) { return a + b; }
    function mult(a, b, c, d) { return a * b * c * d; }

    var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

    console.log(add5(2)); // 7
    console.log(add5(10)); // 15
    console.log(add5(8)); // 13

    var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

    console.log(mult23(4, 5)); // 2*3*4*5 = 120
    console.log(mult23(1, 1)); // 2*3*1*1 = 6
    */
//task 6
    function partialAny(fn) {
        let args = [].slice.call(arguments, 1); 

        return function () {
            let internalArgs = args.slice();
            let counter = 0;
            
            for (let key in internalArgs) {
                if (internalArgs[key] === undefined) {
                    internalArgs[key] = arguments[counter];
                    counter++;
                }
            }

            if (counter < arguments.length) {
                for (let i = counter; i < arguments.length; i++) {
                    internalArgs.push(arguments[i]);
                }
            }

            let result = fn(...internalArgs);
            return result;
        }
    }


//tests for task 6
    /*function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
    var test1_3 = partialAny(test, 1, undefined, 3);
    console.log(test1_3(5)); // a=1,b=5,c=3
    */
//task 7
    

//tests for task 7


//task 8
    

//tests for task 8


//task 9
    

//tests for task 9


//task 10
    

//tests for task 10


