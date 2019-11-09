async function start(){
    for(let i = 0; i < 10; i++){
        await pro(Math.random()*3000);
        console.log(i);
    }
}

function pro(time){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("완료");
        }, time);
    });
}

start();










// for(let i = 0; i < 10; i++){
//     setTimeout(function(){ 
//         console.log(i);
//     }, Math.random()* 3000);
// }

// let pro1 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         console.log("3초짜리 끝");
//         res("end");
//     }, 3000);
// });

// pro1.then((data)=>{
    
// });
