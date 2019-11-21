---
title: Shotgun surgery
date: "2015-05-29"
description: Shotgun Surgery refers to when a single change is made to multiple classes simultaneously.
---

Shotgun Surgery refers to when a single change is made to multiple classes simultaneously. 

>How can I recognize it?

When you are changing different parts of your code for just one functionality that could by a __shotgun surgery__.

We are going to make an example with javascript functional programming 
```js
const bankAccount = {
  amount: 10
};

const transfer = (toSend) => {
  if (bankAccount.amount <= 0) {
    console.log("Mininum balance shuold be over 0");
  }

  bankAccount.amount -= toSend;
  console.log(`Your balance is ${bankAccount.amount} €`);
};

const checkYourBalance = () => {
  if (bankAccount.amount <= 0) {
    console.log("amount should be over 0");
  }

  console.log(`${bankAccount.amount} €`);
};
```