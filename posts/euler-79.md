---
title: "Project Euler #79 Solution"
date: "2021-07-22"
tags: ["javascript", "recursion", "euler"]
---

I wanted to start this blog with an easy problem in order to get something out there more quickly. Problem #79 was a problem I hadn't solved yet and it had only a 5% difficulty rating. Nevertheless, I got stomped for a few hours. I realized I can solve it by hand, but the problem was finding an algorithm that will achieve the same thing with passable elegance.

Let's look at the problem:

> [Passcode Derivation (Problem 79)](https://projecteuler.net/problem=79):
>
> A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.
>
> The text file, [keylog.txt](https://projecteuler.net/project/resources/p079_keylog.txt), contains fifty successful login attempts.
>
> Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

Looking at the data in the browser we can see that we have duplicates which we can get rid of. Let's fetch the data and remove the duplicates. I'm fancy so I fetch the data with axios:

```javascript
import axios from "axios"

const data = await axios
  .get("https://projecteuler.net/project/resources/p079_keylog.txt")
  .then(res => res.data.split("\n").filter(x => !!x))
  .then(res => [...new Set(res)])
// The filter is just to get rid of possible empty strings at the ends.
```

We narrowed down the data to this:

> [ '319', '680', '180', '690', '129', '620', '762', '689', '318', '368', '710', '720', '629', '168', '160', '716', '731', '736', '729', '316', '769', '290', '719', '389', '162', '289', '718', '790', '890', '362', '760', '380', '728' ]

Assuming we have only one possible solution to the problem means that the passcode must not have any duplicate digits, which means that a digit can't follow or precede itself. So, the problem can be broken down to these steps:

> 1. Find the digit that is in the first position in the strings consisting _data_ that is not in the second position or in the third position.
> 2. Set this digit as the next digit in the answer.
> 3. Remove this digit from the first position in all the strings and shift those strings one position. For example "762" &rarr; "62".
> 4. Repeat until all strings are empty and answer is complete.

This only works if we assume the above. In step one we depend on the assumption that we will always find one digit that fits our constraint. Otherwise, the data is incorrect or we face a completely different problem with repeating digits.

Given the four steps we can write a simple recursive procedure that will find the passcode for use. In order to tidy things up a bit, it will help to have the set of possible digits that compose the passcode:

```javascript
const set = new Set(data.reduce((acc, x) => acc.concat(x.split("")), []))
```

We split all the digits from all the strings in _data_ and **reduce** them to a single array using **concat**, then create a new set from that array.

> Set(8) { '3', '1', '9', '6', '8', '0', '2', '7' }

Now we can write a function for step one, finding the "bottom" digit:

```javascript
function getBottom(set, data) {
  for (let x of set) {
    if (data.every(s => x !== s[1] && x !== s[2])) {
      return x
    }
  }
  throw "Will never happen!"
}
```

We check which digit of the set is not in the second position and not in the third position for every string in _data_. Again, we assume that we will always succeed in finding this digit and so we will never return null. Within this little world of perfect data, this function is _referentially transparent_&mdash;given the same _set_ and _data_ it will always return the same "bottom" digit.

Let's now write our recursive function that will handle the rest of the steps:

```javascript
function getPossiblePassCode(data, set, passCode = []) {
  if (set.size === 0) return passCode
  const bottom = getBottom(set, data)
  const newData = data.map(s => s.replace(bottom, ""))
  set.delete(bottom)
  passCode.push(bottom)
  return getPossiblePassCode(newData, set, passCode)
}
```

We start with a default value for _passCode_ which is an empty array. Our base case (ending condition) is when _set_ is a set of size 0, in which case, we return _passCode_ which is the answer to the problem. Else, we find the next bottom, filter that bottom from our data, remove that bottom from _set_ and push it to _passCode_. Repeat with the new arguments.

All we have left is to run _getPossiblePassCode_ with _data_ and _set_:

```javascript
console.log(getPossiblePassCode(data, set))
```
