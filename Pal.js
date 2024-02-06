class Palindrome{
    temp(x){
        var temp=x;
        let res=0,rem=0;
        while(temp>0){
            res=temp%10;
            rem=(rem*10)+res;
            temp=parseInt(temp/10);
        }
        if(x==rem){
            return "Palindrome";
        }
        else{
            return ("Not-palindrome");
        }
    }

}
module.exports=Palindrome;