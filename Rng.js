class Range{
    temp(x,y){
        var flag=0;
        for(let i=x;i<=y;i++){
            for(let j=2;j<i;j++){
                if(i%j==0){
                    flag=1;
                    break;
                }
                else{
                    flag=0;
                }
            }
            if(flag==0){
                console.log(i);
            }
        }
    }
}
module.exports=Range;