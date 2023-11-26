

onload=function(){


    function updateSundayDate() {
        let holder=document.getElementById('currentdate');
        let current =document.createElement('div');
        let todayDate =document.createElement('p');





        const today = new Date();
        const dayOfWeek = today.getDay(); 
      
        const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
      
        const currentSunday = new Date(today.getTime() - dayOfWeek * 24 * 60 * 60 * 1000);
        const nextSunday = new Date(today.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000);
      
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedCurrentSunday = currentSunday.toLocaleDateString('en-US', options);
        const formattedNextSunday = nextSunday.toLocaleDateString('en-US', options);
      
        
        let content=document.createTextNode(` ${formattedCurrentSunday}`);
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
      
      // Call the function to check and display the date
      updateSundayDate();



    
    

}
/////////////////////////////////////////////////////


let Allstudent=['zaid Abdullah','Julien Muhammad', 'saud Muhammad','Remaz Slimane','Talal Muhammad'
,'Lana Slimane','Hesham Slimane','Reema Abdulrahman','Bassam Ahmad','lara Muhammad','Msharry Ahmed'
,'Dana Mansour','Moaz Muhammad','Nora Mansour','Abdullah Saleh','Shatha Saleh','Hassan Saleh'
,'Sara Muhammad','Rayan Alshebel','Taleen Alshebel'];


///courses students 

let allcources=['AICourse' ,'arduinoCourse','scratshCourse'];

let AICourse=['Taleen Alshebel','Hassan Saleh','Dana Mansour','Rayan Alshebel','Lana Slimane','Bassam Ahmad','Nora Mansour'];

let  arduinoCourse=['Nora Mansour','Bassam Ahmad','Remaz Slimane','zaid Abdullah','Dana Mansour','Hassan Saleh','Sara Muhammad'];

let  scratshCourse=['Sara Muhammad','Talal Muhammad','lara Muhammad','Hassan Saleh','Shatha Saleh','Hesham Slimane','Lana Slimane','Abdullah Saleh'];



///////////////////////////////////////
 






///student of the given class

let  showMore;
var closebtn;
var index;
showMore=document.querySelectorAll('.btn');
 for(  i=0;i<showMore.length;i++ ){
 showMore[i].addEventListener('click',courses);

}
 var course;
 var list;
 var closeBtn;
var arrayC;
 function courses (z){

    course=`${this.name}Course`;

    
   switch(course){

   case 'AICourse': 
   index=0;
   
   list=document.getElementsByClassName('listS')[0];
   arrayC=AICourse;

   studentwindoe(arrayC);

   break;


   case 'arduinoCourse':
    index=1;

    list=document.getElementsByClassName('listS')[1];
    arrayC=arduinoCourse;
    studentwindoe(arrayC) ;


    break;

   case 'scratshCourse':
    index=2;

    list=document.getElementsByClassName('listS')[3];
    arrayC=scratshCourse;
    studentwindoe(arrayC);

    break;
   
   }
   
   }

let students;



//show less button

let studentwindoe=function (arrayC){
    list.innerHTML='';
   

    for(let j=0;j<arrayC.length;j++)
    {
        students=document.createElement('li');
        if(j%2==0){
            students.classList.add('girl');
        }
       
        else {students.classList.add('boy');}
        
        tex=document.createTextNode(arrayC[j]);
        students.appendChild(tex);
       list.appendChild(students);
    }
    closse();
    }
    
    var closebtn;
   function closse(){
    
    
   switch(index){

    case 0: 
    closebtn=document.getElementsByClassName('ok')[0];
    showMore=document.querySelectorAll('.btn')[0];
    closebtn.addEventListener('click',showless);



    break;
    case 1:
        closebtn=document.getElementsByClassName('ok')[1];
        showMore=document.querySelectorAll('.btn')[1];
        closebtn.addEventListener('click',showless);



     break;
    case 2:
        closebtn=document.getElementsByClassName('ok')[2];
        showMore=document.querySelectorAll('.btn')[2];
        closebtn.addEventListener('click',showless);

     break;
    
    }
    closebtn.style.cssText=`    visibility: visible; `;
    showMore.style.cssText=`    visibility: hidden; `;

    



   } 
   
    function showless(){

    list.innerHTML='';
    for(l=0;l<5;l++)

       {
        students=document.createElement('li');
        if(l%2==0){
            students.classList.add('girl');
        }
       
        else {students.classList.add('boy');}
        
        tex=document.createTextNode(arrayC[l]);
        students.appendChild(tex);
       list.appendChild(students);
    }
    closebtn.style.cssText=`    visibility:hidden ; `;
    showMore.style.cssText=`    visibility: visible; `;





   }





