const buttons = document.querySelectorAll('a')
buttons.forEach(btn =>{
    btn.addEventListener('click',function(e){
        let x = e.clientX -e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        // event = e
        let ripples = document.createElement('span')
        ripples.style.left= x+'px'
        ripples.style.top = y + 'px'
        this.appendChild(ripples)
        //This line of code appends the newly created ripples element (a span element) as a child element to the current this object.
        //this refers to the button element that triggered the click event.
        setTimeout(() => {
            ripples.remove()},1000);
    })
})
// clientX
// Definition: Represents the horizontal coordinate of the mouse pointer relative to the left edge of the viewport (the visible area of the browser window).

//offsetLeft
//Definition: Represents the horizontal distance between the left edge of an element and the left edge of its offset parent element (the closest positioned ancestor).
