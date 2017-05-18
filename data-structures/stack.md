Stack is an interface that adheres to the *"Last-In First-Out" (LIFO) mantra.* In a stack, *you can only push (add) or pop (remove.)* The last thing you pushed will be what pop returns to you (pop will also remove it from the stack.) Often they'll have a *method called peek too which just looks at the top value of the stack without modifying the stack.*

```javascript
function double(x) { return 2 * x; }
function squareAndAddFive(y) { return square(y) + 5; }
function square(z) { return z * z; }

function maths(num) {
    var answer = double(num);
    answer = squareAndAddFive(answer);
    return answer;
}

maths(5);
```
1. `maths` is called. JS pushes `maths` onto the stack
2. inside `maths`, `double` is called.  JS pushes `double` onto the stack
3. `double` completes and returns a value.  JS pops `double` off the stack
4. inside `maths`, `squareAndAddFive` is called.  JS pushes `squareAndAddFive` onto the stack
5. inside `squareAndAddFive`, `square` is called. JS pushes `square` onto the stack
6. `square`completes returns a value. JS pops `square` off the stack
7. `squareAndAddFive` completes and returns a a value.  JS pops `squareAndAddFive` off the stack
8. `maths` returns the `answer`.  JS pops `maths` off the stack and it is now empty.
