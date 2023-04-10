function timer()
{
    document.getElementById("gif").style.display="none";
    i=30;
    int_time=setInterval(function()
    {
          console.log("Before: "+i);
    
        document.getElementById("count").innerHTML=i;
        i=i-1;
             console.log("After: "+i);
        if(i<0)
        {
   
            document.getElementById("clock").style.display="none";
            document.getElementById("gif").style.display="block";
            clearInterval(int_time);
        }
        
    },1000)
}   


