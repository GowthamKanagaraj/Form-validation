const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const Password = document.getElementById("password");
const Password2 = document.getElementById("password2");

form.addEventListener('submit',e =>{
  e.preventDefault();
  checkInput();
});

function setError(input,Message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = Message;
}

function setSucess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

const checkInput=()=>{
    const usernameValue = username.value.trim();
    const emailValaue = email.value.trim();
    const passwordValaue = Password.value.trim();
    const password2Valaue = Password2.value.trim();

    //USERNAME  
  if(usernameValue === ''){
    setError(username,'Username Cannot Be Blank');
  }
  else{
    setSucess(username);
  }

  //EMAIL
  if(emailValaue === ''){
    setError(email,'E-mail Cannot Be Blank');
  }
  else if(!isEmail(emailValaue)){
    setError(email,'Not a Valid E-mail');
  }
  else{
    setSucess(email);
  }

  //PASSWORD
  if(passwordValaue === ''){
    setError(Password,'Password Cannot Be Blank');
  }
  else{
    setSucess(Password);
  }

  //CONFIRM PASSWORD
  if(password2Valaue === ''){
    setError(Password2,'Password Cannot Be Blank');
  }
  else if(passwordValaue !== password2Valaue){
    setError(Password2,'Password Does Not Match')
  }
  else{
    setSucess(Password2);
  }
}
