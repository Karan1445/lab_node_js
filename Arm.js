class Armstrong{
    temp(x){
        var temp=x;
        var len=parseInt(Math.log10(x)+1);
        let res=0,rem=0,tot=0;
        while(temp>0){
            res=temp%10;
            rem=(rem*10)+res;
            tot+=Math.pow(res,len);
            temp=parseInt(temp/10);
        }
       if(x==tot){
        return "armstrong";
       }
       else{
        return "NOt-armstrong";
       }
        

    }
}
module.exports=Armstrong;