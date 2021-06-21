  //form 1
  
  function vfun(){
                    var uname=document.forms["myform"]["uname"].value;
                    var upass=document.forms["myform"]["upass"].value;


                    if (uname==null || uname=="" ){
                        document.getElementById("errorbox").innerHTML=
                        "Enter the username";
                        return false;
                    }

                    if (upass==null || upass==""){
                        document.getElementById("errorbox").innerHTML=
                        "Enter the Password"
                        return false;
                    }
                    

                    if (uname !="" && upass !=""){
                        alert("login successfully");
                    }




  }

  //form 2

  function vfun1(){
    var uname1=document.forms["myform1"]["uname1"].value;
    var email1=document.forms["myform1"]["email1"].value;
    var upass1=document.forms["myform1"]["upass1"].value;
    var upass2=document.forms["myform1"]["upass2"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorbox").innerHTML =
           "enter the user name";
         return false;
}

if(email1==null || email1==""){
          document.getElementById("errorbox").innerHTML =
           "enter the email";
         return false;
}

if(upass1==null || upass1=="" ){
          document.getElementById("errorbox").innerHTML =
           "enter the password";
         return false;
}

if(upass2==null || upass2==""){
          document.getElementById("errorbox").innerHTML =
           "enter the re-enter password";
         return false;}

 if(upass1 != upass2){
          document.getElementById("errorbox").innerHTML =
           "password dont match";
         return false;}



if (uname1 != '' && upass1 != '' && upass2 != '' && email1 != '' && upass1 == upass2)


  alert("Register successfull");
                 

}