function test(){
 
    let get=document.getElementsByClassName("get")
        console.log(get)
        for(i=0;i<get.length;i++)
    {
      if (i==0||i==2)
      {
        get[i].classList.add('bg')}
       else{
        if(i==1||i==4)
        { get[i].classList.add('bt')}
     else(i==3||i==5)
       {get[i].classList.add('back')}
      }
    }
 
    }
        