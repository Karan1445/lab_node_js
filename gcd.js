class Gcd{
    temp(x,y){
        let sm=Math.min(x,y);
        var temp=1;
        for(let i=1;i<=sm;i++){
            if(x%i==0 && y&i==0){
                console.log(i);
               temp=i;
            }
         
           
        }
        return temp;
    }
}
module.exports=Gcd;