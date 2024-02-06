class Check_prime{
   
    temp(x){
       let flag=1;
        for(let i=2;i<x**0.5;i=i+2){
            if(x%i==0){
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
        if(flag==1){
            return "prime";
        }
        else{
            return "non-prime";
        }
    }
    
}
module.exports=Check_prime;