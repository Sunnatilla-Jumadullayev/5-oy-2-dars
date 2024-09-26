// 30 - masala
{
  console.log(`30 - masala`);
  console.log(reverseNumber(54321));
  function reverseNumber(n) {
    if (typeof n === `number`) {
      return String(n).split("").reverse().join("");
    } else {
      return `number malumot kirit`;
    }
  }
}
// 31 - masala
{
  console.log(`31 - masala`);
  string = `men kitob oqishni yahshi koraman, ismim sunnatilla`;
  function objectPush(str) {
    let strArray = str.split(" ");
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      let element = strArray[i];
      let value = element;

      result[element] = element.length;
    }
    console.log(result);
  }
  objectPush(string);
}
// 32 - masala
{
  console.log(`32 - masala`);
  let sentence = `Foydalanilmayotgan yerlar, bo‘sh adirlarda mevali bog‘lar barpo etiladi`;
  console.log(sentence);
  function minMaxWord(str) {
    let strArray = str.split(" ");
    let minWord = strArray[0];
    let maxWord = strArray[0];
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (minWord.length > element.length) {
        minWord = element;
      }

      if (maxWord.length < element.length) {
        maxWord = element;
      }
    }
    result.maxWord = maxWord;
    result.minWord = minWord;

    return console.log(result);
  }
  minMaxWord(sentence);
}
// 33 - masala
{
  console.log(`33 - masala`);
  function getLevel(n) {
    result = [];
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        result.push(2 ** i);
      }
      return console.log(result);
    } else {
      return `0 dan katta son kirit`;
    }
  }
  getLevel(6);
}
// 34 - masala
{
  console.log(`34 - masala`);
  let news = `Eron chempionati oltinchi turidan o'rin olgan markaziy uchrashuv`;
  console.log(minWords(news));
  function minWords(str) {
    let array = str.split(" ");
    let minWord = array[0];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (minWord.length > element.length) {
        minWord = element;
      }
    }
    return minWord;
  }
}
// 35 - masala
{
  console.log(`35 - masala`);
  let objectt = { a: 7, b: 2, c: 4 };
  object(objectt, 3);
  function object(obj, n = 1) {
    let result = {};

    for (let item in obj) {
      result[item] = obj[item] * n;
    }
    return console.log(result);
  }
}
// 36 - masala
{
  console.log(`36 - masala`);
  const numberCount = (str) => {
    let strArray = str.split("");
    let count = 0;
    for (let i = 0; i < 10; i++) {
      for (let g = 0; g < strArray.length; g++) {
        const element = +strArray[g];
        if (i === element) {
          count++;
        }
      }
    }
    return console.log(`${str} siz kiritgan so'zda ${count} ta son qatnashgan`);
  };
  numberCount(`dff45ggg5`);
}
// 37 - masala
{
  console.log(`37- masala`);

  let foo = (...rest) => {
    let a = rest;
    let yigindi = 0;
    for (let i = 0; i < a.length; i++) {
      yigindi += a[i];
    }
    console.log(yigindi);
    return console.log(String(yigindi).split(""));
  };
  foo(2, 4, 5, 7, 8, 7, 6, 5, 4);
}
// 38 - masala
{
  console.log(`38 - masala`);
  let sentence = `"Barselona" asosiy darvozaboni Mark-Andre ter SHtegen `;
  const Acount = (str = ``) => {
    let strArray = str.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element === `a`) {
        count++;
      }
    }
    return console.log(count, `gapda ${count} marta a harfi qatnashgan`);
  };
  Acount(sentence);
}
// 39 - masala
{
  console.log(`39 - masala`);
  function daraja(n) {
    let count = 0;
    for (; n > 1; n /= 2) {
      count++;
    }
    console.log(count);
  }
  daraja(128);
}
// 40 - masala
{
  console.log(` 40 - masala`);
  let user = [1, 2, 3, 4];
  function ortaQiymat(arr) {
    if (arr.length % 2 === 0) {
      let a = arr[arr.length / 2] + arr[arr.length / 2 - 1];
      return a / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
  console.log(ortaQiymat(user));
}
// 41 - masala
{
  console.log(`41 - masala`);
  const books = [
    {
      title: `Halqa`,
      author: `Akrom Malik`,
      read: true,
    },
    {
      title: `Dunyoning ishlari`,
      author: `O’tkir Hoshimov`,
      read: !true,
    },
    {
      title: `Iymon`,
      author: `Shayx Muhammad Sodiq Muhammad Yusuf`,
      read: true,
    },
  ];
  bookRead(books);
  function bookRead(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element.read === true) {
        console.log(
          `${i + 1}. ${element.author}ning ${element.title} kitobi oqilgan`
        );
      } else {
        console.log(
          `${i + 1}. ${element.author}ning ${element.title} kitobi oqilmagan`
        );
      }
    }
  }
}
// 42 - masala
{
  console.log(`42 - masala`);
  string = `men kitob oqishni yahshi koraman, ismim sunnatilla`;
  function objectPush(str) {
    let strArray = str.split(" ");
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      let element = strArray[i];
      let value = element;

      result[element] = element.length;
    }
    console.log(result);
  }
  objectPush(string);
}
// 45 - masala
{
  console.log(`45 - masala`);
  const animals = [
    "dog",
    "chicken",
    "cat",
    "dog",
    "chicken",
    "chicken",
    "rabbit",
    "rabbit",
  ];
  countElement(animals);
  function countElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let count = 0;
      for (let g = 0; g < arr.length; g++) {
        if (element === arr[g]) {
          count++;
        }
      }
      result[element] = count;
    }
    return console.log(result);
    console.log(result);
  }
}
// 46 - masala
{
  console.log(`46 - masala`);
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 23];
  function powArray(arr) {
    return arr.map((a) => a ** 2);
  }
  console.log(powArray(arr1));
}
// 47 - masala
{
  console.log(`47 - masala`);
  let input = [1, -4, 12, 0, -3, 29, -150, 8];
  function musbatYigindi(arr) {
    let result = arr
      .filter((item) => item > 0)
      .reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber;
      }, 0);
    return result;
  }
  console.log(musbatYigindi(input));
}
// 48 - masala
{
  console.log(`48 - masala`);
  let gap = `George Raymond Richard Martin`;
  let result = gap
    .split(" ")
    .map((str) => str[0])
    .join("");
  console.log(result);
}
// 49 - masala
{
  console.log(`49 - masala`);
  let user = [
    { name: "John", age: 13 },
    { name: "Mark", age: 56 },
    { name: "Rachel", age: 45 },
    { name: "Nate", age: 67 },
    { name: "Jeniffer", age: 65 },
  ];
  let arr = [];
  for (let i = 0; i < user.length; i++) {
    arr.push(user[i].age);
  }
  console.log(arr);
  let a = arr.sort((a, b) => a - b)[0];
  let b = arr.sort((a, b) => b - a)[0];
  console.log(b - a);
}
// 50 - masala
{
  console.log(`50 - masala`);
  let arr2 = [4, 1, 2, 1, 2, 9, true];
  let result = [];
  function singleNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr.indexOf(element) === arr.lastIndexOf(element)) {
        result.push(element);
      }
    }
    return result;
  }
  console.log(singleNumber(arr2));
}
// 51 - masala
{
  console.log(`51 - masala`);
  let user = [1, 2, 3, 4];
  function ortaQiymat(arr) {
    if (arr.length % 2 === 0) {
      let a = arr[arr.length / 2] + arr[arr.length / 2 - 1];
      return a / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
  console.log(ortaQiymat(user));
}
// 52 - masala
{
  console.log(`52 - masala`);
  let products = [
    { id: 4, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
    { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
    { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
    { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
  ];
  let result = products.filter((item) => item.id !== 4);
  console.log(result);
}
// 54 - masala
{
  console.log(`54 - masala`);
  const animals = [
    "dog",
    "chicken",
    "cat",
    "dog",
    "chicken",
    "chicken",
    "rabbit",
    "rabbit",
  ];
  countElement(animals);
  function countElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let count = 0;
      for (let g = 0; g < arr.length; g++) {
        if (element === arr[g]) {
          count++;
        }
      }
      result[element] = count;
    }
    return console.log(result);
    console.log(result);
  }
}
// 55 - masala
{
  console.log(`55 - masala`);
  let sentens = `bugun yomgir yogdi olamga`;
  const wordLength = (str) => str.split(" ").map((b) => b.length);
  console.log(wordLength(sentens));
}
