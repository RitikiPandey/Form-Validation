
    const form = document.getElementById("form");
    const firstname = document.getElementById("firstname");
    const address = document.getElementById("address");
    const code = document.getElementById("code");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const state = document.getElementById("state");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      validate();
    });



    //Email Validation
    const isEmail = (emailVal) =>{
        var atSymbol = emailVal.indexOf("@");
        if(atSymbol<1)
        return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot<=atSymbol + 2)
        return false;
        if(dot === emailVal.length-1)
        return false;
        return true;
    }

    const validate = () => {
      const firstnameVal = firstname.value.trim();
      const addressVal = address.value.trim();
      const codeVal  = code.value.trim();
      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const stateVal = state.value.trim();

      //FirstName Validation
      if(firstnameVal === ""){
          setErrorMsg(firstname,'Firstname cannot be only spaces');
      }
      else if(firstnameVal.length <= 2)
      {
          setErrorMsg(firstname,'Firstname min 3 char');
      }
      else{
          setSuccessMsg(firstname);
      }

      //ZipCode Validation
      if(codeVal === ""){
          setErrorMsg(code,'Zipcode cannot be only spaces');
      }
      else if(codeVal.length != 5)
      {
          setErrorMsg(code,'Zipcode must be of 5 digits');
      }
      else{
          setSuccessMsg(code);
      }

      //Username Validation

      if(usernameVal === ""){
          setErrorMsg(username,'Username cannot be only spaces');
      }
      else if(usernameVal.length < 6 || usernameVal.length >8)
      {
          setErrorMsg(username,'Username min 6 char and max 8 char');
      }
      else{
          setSuccessMsg(username);
      }
      
      //Address Validation
      if(addressVal === ""){
          setErrorMsg(address,'Address cannot be only spaces');
      }
      else if(addressVal.length <= 5)
      {
          setErrorMsg(address,'Enter full Address');
      }
      else{
          setSuccessMsg(address);
      }

      //Email Validation
      if(emailVal === ""){
          setErrorMsg(email,'Email cannot be only spaces');
      }
      else if(!isEmail(emailVal))
      {
          setErrorMsg(email,'The Email entered is not valid');
      }
      else{
          setSuccessMsg(email);
      }

      //State Validation
      if(stateVal=="state")
      {
          setErrorMsg(state,'Choose the State');
      }
      else{
          setSuccessMsg(state);
      }
    }

    function setErrorMsg(input,errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerText = errormsgs;
    }

    function setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }   