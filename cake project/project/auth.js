
function registeruser(){
    let username=document.getElementById('name').value
      let usermail=document.getElementById('mail').value   
      let userpassword=document.getElementById('password').value
      
   if(username==='' || usermail==='' || userpassword===''){
   alert("Please Filledout All Input Fields")
    }
  
    else{
        alert("User is Registered....")
        localStorage.setItem("username" ,username)
        localStorage.setItem("Email" ,usermail)
        localStorage.setItem("Password" ,userpassword)
        window.location.href='login.html'
    }
}
 function loginuser(){
    var reguser=document.getElementById("mail").value   
    var regpassword=document.getElementById("password").value  
    
    var usermail=localStorage.getItem('Email')
    var reguserpassword=localStorage.getItem('Password')

    if(reguser == usermail && regpassword == reguserpassword){
alert("User is Login....")
 
       localStorage.setItem("loginmail" ,reguser)
        localStorage.setItem("loginpassword" ,regpassword)
        window.location.href='home.html'
    }
  
    else{
           alert("Please register")
           window.location.href='register.html'
    }
 }