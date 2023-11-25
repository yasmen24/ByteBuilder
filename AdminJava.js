

onload=function(){
   
    let holder=document.getElementById('currentdate');
    let current =document.createElement('div');
    let todayDate =document.createElement('p');

  

    
    let date=new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    
     ///get important info about date
     let day=date.getDay();
    let month=date.getMonth();//it start count from 0
    let datee=date.getDate();
    let year=date.getFullYear();
    
    ///set it in html element
    let content=document.createTextNode(`${days[day]} , ${datee}  ${months[month]} ${year}`);
    todayDate.appendChild(content);
    current.appendChild(todayDate);
    holder.appendChild(current);
    current.style.cssText=
    `
    background: #eef2f3;
    padding=3px;
    margin:1px;
    border-top:1px dotted gray;
    border-bottom:1px dotted gray;
    text-align:center;    
    
    
    
    `

    
    

}
/////////////////////////////////////////////////////


let Allstudent=['zaid Abdullah','Julien Muhammad', 'saud Muhammad','Remaz Slimane','Talal Muhammad'
,'Lana Slimane','Hesham Slimane','Reema Abdulrahman','Bassam Ahmad','lara Muhammad','Msharry Ahmed'
,'Dana Mansour','Moaz Muhammad','Nora Mansour','Abdullah Saleh','Shatha Saleh','Hassan Saleh'
,'Sara Muhammad','Rayan Alshebel','Taleen Alshebel']


///courses students 
let AICourse=['Reema Abdulrahman','Nora Mansour','Taleen Alshebel','Rayan Alshebel','Dana Mansour','Hassan Saleh','Lana Slimane','Bassam Ahmad']
let  arduinoCourse=['Nora Mansour','zaid Abdullah','Bassam Ahmad','Remaz Slimane','Dana Mansour','Hassan Saleh','Abdullah Saleh']

let  scratshCourse=['Sara Muhammad','Julien Muhammad', 'Shatha Saleh' ,'Talal Muhammad' ,'Moaz Muhammad','Hesham Slimane','Lana Slimane']
///////////////////////////////////////
 
///student of the given class


 let  showMore=document.querySelectorAll('.btn');
 for( i=0;i<showMore.length;i++ )
 showMore[i].addEventListener('click',courses)

 var course;


 function courses (){
    course=`${this.name}Course`;
    console.log(course);

   switch(course){
   
   case 'AICourse': studentwindoe(AICourse);
   break;
   case 'arduinoCourse':studentwindoe(arduinoCourse) ;break;
   case 'scratshCourse':studentwindoe(scratshCourse);break;
   
   }
   
   }





let pop=document.getElementsByClassName('popup')[0];
let students;
let tex;
let popupWindow=document.getElementById("show");
let closeBtn=document.getElementById("ok");
let list=document.createElement('ul');

let studentwindoe=function (x){
    list.innerHTML='';
    for(let i=0;i<x.length;i++)
    {
        students=document.createElement('li');
        tex=document.createTextNode(x[i]);
        students.appendChild(tex);
       list.appendChild(students)
    }
    
    pop.style.visibility='visible';
    popupWindow.appendChild(list);
    
    }

    
    closeBtn.onclick=function(){
    
        pop.style.visibility='hidden';
        list.innerHTML='';

    }
    
    
    
























