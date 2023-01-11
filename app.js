// (function() {
//     let screen=" ";
//      screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');
//    var finalValue;
//     buttons.forEach(function(button) {
//         button.addEventListener('click', function(e) {
//                 const value = e.target.dataset.num;
//                 screen.value += value;
                
//                   finalValue=screen.value;
//                  console.log(finalValue);
//             })
            
          
//     });
   

//     equal.addEventListener('click', function(e){
//         if(screen.value === ''){
//             document.querySelector('.screen').innerHTML=" r";
//         }else{
           
//             screen.value = eval(screen.value);
//         }
//     })

//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     })

// })();
console.log('hlo');

let string="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.innerHTML == '='){
            string=eval(string);
         
        }
        else if(e.target.innerHTML == 'C'){
            string=" ";
        }
        else{
        console.log(e.target.innerHTML);
        string=string+e.target.innerHTML;
        }
        document.querySelector('input').value=string;
    })
})