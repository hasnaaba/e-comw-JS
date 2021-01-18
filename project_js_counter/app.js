//set initial count
let count = 0;

//select value and buttons :)
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);

//now we will add an event listener 
btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        //console.log(e.currentTarget);
        const styles = e.currentTarget.classList;
        //console.log(styles);
        if (styles.contains("decrease")){
            count-- ;
        }   else if (styles.contains("increase")){
            count++ ;
        }   else if (styles.contains("reset")){
            count = 0;
        }
        //add color to the number
        if (count > 0){
            value.style.color = "green";
        }   else if (count < 0){
            value.style.color = "red";
        }   else if (count === 0){
            value.style.color = "black";
        }
        //to show the value on screen
        value.textContent = count;
    });
});

