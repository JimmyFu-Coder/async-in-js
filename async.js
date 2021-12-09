// ! async keyword

async function hello() {return "Hello"}
console.log(hello)//[AsyncFunction: hello]
hello().then(console.log)//Hello


// ! await keyword
// ! await 只在异步函数里面才起作用。它可以放在任何异步的，
// ! 基于 promise 的函数之前。它会暂停代码在该行上，
// ! 直到 promise 完成，然后返回结果值。
// ! 在暂停的同时，其他正在等待执行的代码就有机会执行了。

// ! 错误处理 同步的 try...catch 结构和 async/await 一起使用
// ! 在 async 内部 使用try catch
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch(e) {
    console.log(e);
  }
}

// await 同步方法

let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})

async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}

async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}