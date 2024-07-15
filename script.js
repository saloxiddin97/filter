//let kinolar=[
  //  {id:1,name:"fosaj",rating:8,year:2010,mavzu:"mashinalar"},
    //{id:2,name:"tranos",rating:9,year:2019,mavzu:"robotlar"},
    ///{id:3,name:"qasoskorlar",rating:8,year:2002,mavzu:"fantastik"},
   // {id:4,name:"doktor",rating:7,year:2008,mavzu:"ujas"},
//]
//let kino = kinolar.filter((kin)=>{
//    if(kin.rating > 7){
        //console.log(kin.year);
  //  }
//})

let text=document.querySelector("div")
let numbers=[1,2,3,4,5,6,7,8,9,10,69,100,85,200,60,70,]

numbers.map((num)=>{
    let yangi=document.createElement("p")
yangi.textContent=num
if(num>50){
    yangi.style.background="blue"
}
else{
     yangi.style.background="red"
}
text.appendChild(yangi)
})