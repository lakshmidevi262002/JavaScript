const lists=[
    {Name:'banana',  price:100},
    {Name:'apple',   price:200},
    {Name:'orange',  price:80},
    {Name:'avacado', price:400},
    {Name:'kiwi',    price:200}
]
const filteredLists=lists.filter((List)=>{
     return List.price>=100
})
console.log(filteredItems)