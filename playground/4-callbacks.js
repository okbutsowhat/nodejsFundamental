const add = (a, b, callback) => {
  setTimeout(() => {
    const res = a + b
    callback(res)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum);
})