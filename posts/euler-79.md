---
title: "project Euler #79"
date: "2022-07-22"
---

import axios from "axios"

const data = await axios
.get("https://projecteuler.net/project/resources/p079_keylog.txt")
.then(res => [...new Set(res.data.split("\n").filter(x => !!x))])

const set = new Set(data.reduce((acc, x) => acc.concat(x.split("")), []))

function getBottom(set, data) {
let bottom = null
for (let x of set) {
if (data.every(s => x !== s[1] && x !== s[2])) {
bottom = x
break
}
}
return bottom
}

function getPossiblePassCode(data, set, passCode = []) {
if (set.size === 0) return passCode
const bottom = getBottom(set, data)
const newData = data.map(s => s.replace(bottom, ""))
set.delete(bottom)
passCode.push(bottom)
return getPossiblePassCode(newData, set, passCode)
}

console.log(getPossiblePassCode(data, set))
