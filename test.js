new Promise((r)=>{
    console.log(1)
    r()
}).then(()=>{
    console.log(2)
    Promise.resolve().then(() => {
        console.log(3)
    }).then(()=>{
        Promise.resolve().then(() => {
            console.log(4)
        })
    })
})
console.log(5)
setTimeout(()=>{
    console.log(6)
    Promise.resolve().then(()=>{
        console.log(7)
    })
},0)
new Promise((r)=>{
    console.log(8)
    Promise.resolve().then(() => {
        console.log(9)
    })
    .then(()=>{
        setTimeout(()=>{
            console.log(10)
        })
    })
})