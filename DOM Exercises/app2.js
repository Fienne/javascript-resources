// let getValue = () =>{
    // var x =  document.querySelector('#form1')

    // for( var i=0; i<x.length; i++){
    //     if(x.elements[i].value!='Submit'){
    //         console.log(x.elements[i].value)
    //     }
    // }


function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}