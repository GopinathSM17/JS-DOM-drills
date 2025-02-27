const textValue = document.getElementById('text')
const leftSideBox = document.getElementById('left-box')
const rightSideBox = document.getElementById('right-box');


textValue.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        console.log(textValue.value);
        let name = textValue.value;
        name = name.toUpperCase();
        const newLabel = document.createElement('label');
        newLabel.id = name;
        newLabel.textContent = name;

        newLabel.classList.add('label', 'left-label');

        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';


        newLabel.insertBefore(newCheckBox, newLabel.firstChild);


        leftSideBox.appendChild(newLabel);

        textValue.value = "";
    }
})




//left button
const leftButton = document.querySelector('.left-btn');

leftButton.addEventListener('click', (e) => {
    console.log("mouse click left btn");
    const rightsideLabels = document.querySelector('.right-box').children;
    const arr = Array.from(rightsideLabels);
    arr.forEach(val => {
       
        let checkedItem = val.querySelector('input').checked;
        if (checkedItem) {
            leftSideBox.append(val);
            rightAllButton.disabled = false;
        }
        val.querySelector('input').checked = false;
    });

    const rightSideLabels = document.querySelector('.right-box').children
    console.log(rightSideLabels);
    if (rightSideLabels.length < 1) {
        leftAllButton.disabled = true;
    }
});


//right button
const rightButton = document.querySelector('.right-btn');

rightButton.addEventListener('click', (e) => {
    console.log("mouse click right btn");
    const leftsideLabels = document.querySelector('.left-box').children;
    const arr = Array.from(leftsideLabels);
    arr.forEach(val => {

        let checkedItem = val.querySelector('input').checked;
        if (checkedItem) {
            rightSideBox.append(val);
            leftAllButton.disabled=false;
        }
        val.querySelector('input').checked = false;
    });

    const leftSideLabels = document.querySelector('.left-box').children
    if (leftSideLabels.length < 1) {
        rightAllButton.disabled = true;
    }
    
    
});


// left all button
const leftAllButton = document.querySelector('.left-all-btn');

leftAllButton.addEventListener('click', (e) => {
    console.log("mouse click left all btn");
    const rightsideLabels = document.querySelector('.right-box').children;
    const arr = Array.from(rightsideLabels);
    arr.forEach((val) => {
        leftSideBox.append(val);
    })
    rightAllButton.disabled = false;
});


//right all button
const rightAllButton = document.querySelector('.right-all-btn');

rightAllButton.addEventListener('click', (e) => {
    // console.log("mouse click right all btn");
    const leftsideLabels = document.querySelector('.left-box').children;
    const arr = Array.from(leftsideLabels);
    arr.forEach(val => {
        rightSideBox.append(val);
    });
    leftAllButton.disabled = false;
});


//right all button disable feature
rightAllButton.addEventListener('click', (e)=>{
    const leftSideLabels = document.querySelector('.left-box').children
    if (leftSideLabels.length < 1) {
        const rightAllButton = document.querySelector('.right-all-btn')
        rightAllButton.disabled = true;
    }
})

//left all button disable feature
leftAllButton.addEventListener('click', (e)=>{
    const rightSideLabels = document.querySelector('.right-box').children
    if (rightSideLabels.length < 1) {
        const leftAllButton = document.querySelector('.left-all-btn')
        leftAllButton.disabled = true;
    }
})
