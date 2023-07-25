var c=0;

function addSemester()
{
    var x=document.getElementById("semesters").value;
    var invis=document.getElementById("cgpaimage");
    
   
    var y=parseInt(x);

    if(x==="none")
       alert("Please choose the no of semesters");
    else 
    {
      invis.style.display="none";
      var invisi=document.getElementById("submit");
      invisi.style.display="none";
      var addsemb=document.getElementById("addsemesters");
      addsemb.style.display="block";
      for(var i=1;i<=y;i++)
      {
         c++;
         var get=document.getElementById("container");
         var sem=document.createElement('div');
         sem.className=`SEMESTER${i}`;
         var he=document.createElement('div');
         he.className="he";
         he.innerHTML+=
         `<h2>SEMESTER ${i}</h2>
         <p>S.NO</p>
         <p>CourseName</p>
         <p>Credit</p>
         <p>Grade</p>
         `;
         sem.appendChild(he);
         var box=document.createElement('div')
         box.className='box';
         box.innerHTML+=
         `
          <input type="number" class="S.NO" placeholder="S.NO" value="1" readonly>
          <input type="text" class="course" placeholder="Course Name">
          <input type="number" name="number" class="credit"  min = "0" max="10" step="0.5" placeholder="Credit">
          <select class="grade">
            <option value="">Grade</option>
             <option value="10">O</option>
             <option value="9">A+</option>
             <option value="8">A</option>
             <option value="7">B+</option>
             <option value="6">B</option>
             <option value="0">RA</option>
             <option value="0">AB</option>
            
         </select>
      
      
          <input type="text" class="S.NO" placeholder="S.NO" value="2" readonly>
          <input type="text" class="course" placeholder="Course Name">
          <input type="number" name="number"class="credit" min = "0" max="10" step="0.5" placeholder="Credit">
          <select class="grade">
            <option value="">Grade</option>
             <option value="10">O</option>
             <option value="9">A+</option>
             <option value="8">A</option>
             <option value="7">B+</option>
             <option value="6">B</option>
             <option value="0">RA</option>
             <option value="0">AB</option>
            
         </select>
         `
         var addco=document.createElement('div')
         addco.className="addcoursebox";
         addco.innerHTML=
         `
           <input type="submit" class="addcourse" value="ADD COURSE" onclick="addCourse(this)">
           <input type="text"  class="result" id="result"  placeholder="YOUR GPA HERE" readonly>
           <input type="submit"  class="calculategpa"  id="gpa" value="CALCULATE GPA"  onclick="calculateGpa(this)">

         `

         
         
              

         sem.appendChild(box);
         sem.appendChild(addco);

         get.appendChild(sem);

    
      }

    }

    var addresult=document.getElementById("cgparesult");
    addresult.style.border="2px solid black";
    addresult.style.boxShadow="black 2px 2px 3px 2px";
    
   

        var div1=document.createElement("div");
        div1.id="div1";
        var div2=document.createElement("div2");
         
         div2.innerHTML+=
         `
           <p>SEMESTER</p>
           <p>GPA</p>
         `

            for(var i=1;i<=y;i++)
            {
               div2.innerHTML+=
               `
              
               <input type="text" value="SEMESTER${i}" class="SEMESTERGPA" readonly>
               <input type="text" value=""  class="gparesult" placeholder="GPA" readonly>
               `
            }
            div1.appendChild(div2);
            div3=document.createElement("div");
            div3.innerHTML+=
            `
            <input type ="submit" value="CALCULATE CGPA" onclick="calculateCgpa()" readonly>
            `
            
            div1.appendChild(div3);
            var finalcgpa=document.createElement("div");
            finalcgpa.id="FINALCGPA";
            finalcgpa.innerHTML+=
            `
            <p>YOUR CGPA IS </p>
            <input type="text" value="" placeholder="CGPA" id="FINAL" readonly>
            
            `

            addresult.appendChild(div1);
            addresult.appendChild(finalcgpa);
  
}



function addCourse(target)
{
    var par=target.parentElement.parentElement.children[1];
    var addco=document.createElement("div");
    addco.innerHTML+=
    `
    <input type="text" class="S.NO" placeholder="S.NO" value="" >
    <input type="text" class="course" placeholder="Course Name">
    <input type="number" name="number"class="credit" min = "0" max="10" step="0.5" placeholder="Credit">
    <select class="grade">
      <option value="">Grade</option>
       <option value="10">O</option>
       <option value="9">A+</option>
       <option value="8">A</option>
       <option value="7">B+</option>
       <option value="6">B</option>
       <option value="0">RA</option>
       <option value="0">AB</option>
      
   </select>
    
    `

   par.appendChild(addco);

 
}


function calculateGpa(target)
{
   var gparesult=0;
   var ans=0;
   var cre=0;
      var tar=target.parentElement.parentElement.children[1];
      var credits=tar.querySelectorAll(".credit");
      var grades=tar.querySelectorAll(".grade");
      for(var i=0;i<credits.length;i++)
      {
         if(credits[i].value==="" && grades[i].value==="")
            alert("Please choose the credit and the grades");
         else if(credits[i].value==="") 
             alert("Please choose the credits");
         else if(grades[i].value==="") 
             alert("Please choose the grade");
         else
         {
            ans+=parseFloat(credits[i].value)*(parseFloat(grades[i].value));
            cre+=parseFloat(credits[i].value);
            
            console.log(ans);
                
         }
  
      }
     
      console.log(cre);

      gparesult=ans/cre;
      console.log(gparesult);
      var tar2=target.parentElement.parentElement.children[2];
      var result=tar2.children[1];
      result.value=gparesult.toFixed(2);

      if(gparesult>0)
      {
         var store=target.parentElement.parentElement;
         var clasname=store.className;
         console.log(clasname);
         var printresult=document.getElementById("cgparesult");
         var a=printresult.getElementsByClassName("SEMESTERGPA");
         var finalresult=document.getElementsByClassName("gparesult");
         console.log(finalresult);
         console.log(a[0].value);
         console.log(a.length);
         for(var i=0;i<a.length;i++)
         {
             if(a[i].value==clasname)
                 
                  
                  finalresult[i].value=gparesult.toFixed(2);
         }

         
      }
   
      
      
      

}

function addsemesters()
{
   c=c+1;
   var xy=document.getElementById("semesters");
   xy.value=c;

   if(c>8)
   {
      alert("ONLY 8 SEMESTERS ARE PERMITTED");
   }
   else
   {

   var getex=document.getElementById("container");
   var semex=document.createElement('div');
   semex.className=`SEMESTER${c}`;
   var he=document.createElement('div');
   he.className="he";
   he.innerHTML+=
   `<h2>SEMESTER ${c}</h2>
   <p>S.NO</p>
   <p>CourseName</p>
   <p>Credit</p>
   <p>Grade</p>
   `;
   semex.appendChild(he);
   var box=document.createElement('div')
   box.className='box';
   box.innerHTML+=
   `
    <input type="number" class="S.NO" placeholder="S.NO" value="1" readonly>
    <input type="text" class="course" placeholder="Course Name">
    <input type="number" name="number" class="credit"  min = "0" max="10" step="0.5" placeholder="Credit">
    <select class="grade">
      <option value="">Grade</option>
       <option value="10">O</option>
       <option value="9">A+</option>
       <option value="8">A</option>
       <option value="7">B+</option>
       <option value="6">B</option>
       <option value="0">RA</option>
       <option value="0">AB</option>
      
   </select>


    <input type="text" class="S.NO" placeholder="S.NO" value="2" readonly>
    <input type="text" class="course" placeholder="Course Name">
    <input type="number" name="number"class="credit" min = "0" max="10" step="0.5" placeholder="Credit">
    <select class="grade">
      <option value="">Grade</option>
       <option value="10">O</option>
       <option value="9">A+</option>
       <option value="8">A</option>
       <option value="7">B+</option>
       <option value="6">B</option>
       <option value="0">RA</option>
       <option value="0">AB</option>
      
   </select>
   `
   var addco=document.createElement('div')
   addco.className="addcoursebox";
   addco.innerHTML=
   `
     <input type="submit" class="addcourse" value="ADD COURSE" onclick="addCourse(this)">
     <input type="text"  class="result" id="result"  placeholder="YOUR GPA HERE" readonly>
     <input type="submit"  class="calculategpa"  id="gpa" value="CALCULATE GPA"  onclick="calculateGpa(this)">

   `

   semex.appendChild(box);
   semex.appendChild(addco);
   getex.appendChild(semex);
   

   var addse=document.getElementById("cgparesult").children[0];
   var addser=addse.children[0];
   var adds1=document.createElement("div");
   adds1.innerHTML=
   `     
   <input type="text" value="SEMESTER${c}" class="SEMESTERGPA" readonly>
   <input type="text" value=""  class="gparesult" placeholder="GPA" readonly>

   `
   addser.appendChild(adds1);
   }
   

}


function calculateCgpa()
{
   var sum=0.0;
   var cgpa=document.getElementsByClassName("gparesult");
   console.log(cgpa);
   for(var i=0;i<cgpa.length;i++)
   {
      if(cgpa[i].value==="")
      {
         
         alert(`Please Fill The Semester Correctly`);
         break;
      
      }
      else
      {
      sum=sum+(parseFloat(cgpa[i].value));
      console.log(sum);
      }

   }

    

   var resultc=sum/cgpa.length;
   var pr=document.getElementById("FINAL");
   pr.value=resultc.toFixed(2);

}