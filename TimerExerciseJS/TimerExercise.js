
function countDown(time){
    
    let timer   = setInterval(function(){ 
        
        if(time<=0){
            clearInterval(timer);
            console.log('Done!');
        }else{
            console.log(time);
        }
        time--;
    },1000) 


}
countDown(10);