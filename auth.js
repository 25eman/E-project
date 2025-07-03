var data= document.getElementById('heading1').innerHTML
console.log(data)

function registeruser(){
    let username=document.getElementById('username').value
      let usermail=document.getElementById('usermail').value   
      let userpassword=document.getElementById('userpassword')
      
   if(username==='' || usermail==='' || userpassword===''){
   alert("Please Filledout All Input Fields")
    }
  
    else{
        alert("User is Registered....")
        localStorage.setItem("username" ,username)
        localStorage.setItem("Email" ,usermail)
        localStorage.setItem("Password" ,userpassword)
        window.location.href="login.html"
    }



}
 