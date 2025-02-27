const step1= document.querySelector('.step-1');
console.log(step1);

let stepMarker = 1;

const nextBtn = document.querySelector('.nexr-btn');

nextBtn.addEventListener('click', (e)=>{
    console.log("next is clicked");
      if(stepMarker === 1){
        const step1=document.querySelector('.step-1');
        step1.style.backgroundColor = "green";
        step1.textContent= "✔";

        const line1 = document.querySelector('.line-1');
        line1.style.backgroundColor = "green";

        const step2 = document.querySelector('.step-2');
        step2.style.backgroundColor = "green";

        const information = document.querySelector('.information');
        information.textContent="Add shipping address for successful delivery";

        stepMarker++;
      }
      
      else if(stepMarker === 2){
        const step2=document.querySelector('.step-2');
        step2.style.backgroundColor = "green";
        step2.textContent= "✔";

        const line2 = document.querySelector('.line-2');
        line2.style.backgroundColor = "green";

        const step3 = document.querySelector('.step-3');
        step3.style.backgroundColor = "Blue";

        const information = document.querySelector('.information');
        information.textContent="Complete payment to complete the order";

        stepMarker++;
      }

      else if(stepMarker === 3){
        const step3=document.querySelector('.step-3');
        step3.style.backgroundColor = "green";
        step3.textContent= "✔";

        const line3 = document.querySelector('.line-3');
        line3.style.backgroundColor = "green";

        const step4 = document.querySelector('.step-4');
        step4.style.backgroundColor = "Blue";

        const information = document.querySelector('.information');
        information.textContent="Ready to get delivered";

        nextBtn.textContent= "Finish"

        stepMarker++;
      }

      else {
        const step4 = document.querySelector('.step-4');
        step4.style.backgroundColor = "green";
        step4.textContent= "✔";

        const information = document.querySelector('.information');
        information.textContent="Order delivered successfully!!!";

        nextBtn.disabled = true;
      }
})

const perviousBtn = document.querySelector('.previous-btn');

perviousBtn.addEventListener('click', (e)=>{
    console.log("previous button clicked");
    if(stepMarker == 2){
        const step1=document.querySelector('.step-1');
        step1.style.backgroundColor = "blue";
        step1.textContent="1";

        const line1 = document.querySelector('.line-1');
        line1.style.backgroundColor = "white";

        const step2 = document.querySelector('.step-2');
        step2.style.backgroundColor = "white";

        const information = document.querySelector('.information');
        information.textContent="Add contact details for further communications";

        stepMarker--;
    }
    else if(stepMarker == 3){
        const step2=document.querySelector('.step-2');
        step2.style.backgroundColor = "blue";
        step2.textContent="2";

        const line2 = document.querySelector('.line-2');
        line2.style.backgroundColor = "white";

        const step3 = document.querySelector('.step-3');
        step3.style.backgroundColor = "white";

        const information = document.querySelector('.information');
        information.textContent="Add shipping address for successful delivery";

        stepMarker--;
    }

    else if(stepMarker == 4){
        const step3=document.querySelector('.step-3');
        step3.style.backgroundColor = "blue";
        step3.textContent="3";
        

        const line3 = document.querySelector('.line-3');
        line3.style.backgroundColor = "white";

        const step4 = document.querySelector('.step-4');
        step4.style.backgroundColor = "white";
        step4.textContent="4";

        const information = document.querySelector('.information');
        information.textContent="Complete payment to complete the order";

        nextBtn.disabled = false;
        nextBtn.textContent= "Next"

        stepMarker--;
    }
})