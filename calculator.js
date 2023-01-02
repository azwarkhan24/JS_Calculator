let main = document.getElementById('main');
let button= document.querySelectorAll('button');
let inputValue='';

for(item of button){
    item.addEventListener('click', (e)=>{
       buttonInner= e.target.innerText;
       if (buttonInner=='*'){
        inputValue += buttonInner;
        main.value= inputValue;
       } else if(buttonInner== 'Clear'){
        inputValue="";
        main.value = inputValue;
       } else if(buttonInner== '='){
        try {
            main.value = eval(inputValue)
          }
          catch(err) {
            main.value = err.message;
          } 
       }
       else {
        inputValue +=buttonInner;
        main.value=inputValue
       };
       
      

    })
}

// function getUsersfromAPI(){
//   fetch('https://jsonplaceholder.typicode.com/users').
//   then((response)=>response.json())
// .then((value)=>{
//   setUsers(value)
