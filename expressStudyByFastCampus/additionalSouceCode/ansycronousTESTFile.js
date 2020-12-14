function firstFunc(sec, linenum){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log(`1st function : ${linenum}`);                   
            resolve("async는 Promise방식을 사용합니다.");
        }, sec);
    });
}
function secondFunc(sec){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log('2nd function : <5>');                   
            resolve("async는 Promise방식을 사용합니다.");
        }, sec);
    });
}
function thirdFunc(sec){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log('3rd function : <6>');                   
            resolve("async는 Promise방식을 사용합니다.");
        }, sec);
    });
}



const asyncFunction = async () => {
    setTimeout(() => console.log('소스상 1 번째 : <1>'), 2600); //<1>

    await firstFunc(1500, '<1-1>')
    await firstFunc(1000, '<1-2>')
    await firstFunc(2000, '<1-3>')

    setTimeout(() => console.log('소스상 2 번째 : <2>'), 4100); //<2>
    setTimeout(() => console.log('소스상 3 번째 : <3>'), 2100); //<3>

    await firstFunc(1500, '<4>');//<4>
    await secondFunc(500);//<5>
    await thirdFunc(1000);//<6>    

    setTimeout(() => console.log('소스상 4 번째 : <7>'), 1500);//<7>
    setTimeout(() => console.log('소스상 5 번째 : <8>'), 500);//<8>
    setTimeout(() => console.log('소스상 6 번째 : <9>'), 1000);//<9>
}

asyncFunction();

// await func1 에서 func1 은 Pomsie 를 반환?