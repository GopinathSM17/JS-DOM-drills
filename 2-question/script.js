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
        // console.log(val.querySelector('input').checked);
        let checkedItem = val.querySelector('input').checked;
        if (checkedItem) {
            leftSideBox.append(val);
        }
        val.querySelector('input').checked = false;
    });
});


//right button
const rightButton = document.querySelector('.right-btn');

rightButton.addEventListener('click', (e) => {
    console.log("mouse click right btn");
    const leftsideLabels = document.querySelector('.left-box').children;
    const arr = Array.from(leftsideLabels);
    arr.forEach(val =>{
        let checkedItem = val.querySelector('input').checked;
        if(checkedItem) {
            rightSideBox.append(val);
        }
        val.querySelector('input').checked= false;
    });
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
});


