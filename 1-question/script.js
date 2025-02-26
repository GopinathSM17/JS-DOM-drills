// console.log("I'm the new script");

var item = document.getElementById('item');
var ouptutDiv = document.getElementById('output')
console.log(ouptutDiv);

item.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        console.log(item.value);
        e.preventDefault();
        const value = item.value;
        if(value != ''){
            //creating a new Div
            const newDiv = document.createElement('div');
            newDiv.textContent = value;
            newDiv.classList.add('text-div')

            // creating a button inside the new div
            const btnElement = document.createElement('button');
            btnElement.textContent='delete';
            newDiv.appendChild(btnElement);

            btnElement.addEventListener('mousedown',(e)=>{
                newDiv.remove();
            })
            // appending the new div inside the outputdiv as a child div
            ouptutDiv.appendChild(newDiv);

            // after the enter the value will be back to null
            item.value = '';
        }
    }
});

