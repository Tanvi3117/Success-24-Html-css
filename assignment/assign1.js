
let box1 =document.querySelector('.box1')
let res =document.querySelector('.res')
function removePreviouscolour(){
    box1.classList.remove("red","yellow","orange","white","grey","pink","purple","skyblue","green")
}
function red(){
    removePreviouscolour()
    box1.classList.add('red')
}
function yellow(){
    removePreviouscolour()
    box1.classList.add('yellow')
}
function orange(){
    removePreviouscolour()
    box1.classList.add('orange')
}function white(){
    removePreviouscolour()
    box1.classList.add('white')
}function grey(){
    removePreviouscolour()
    box1.classList.add('grey')
}function pink(){
    removePreviouscolour()
    box1.classList.add('pink')
}function purple(){
    removePreviouscolour()
    box1.classList.add('purple')
}
function skyblue(){
    removePreviouscolour()
    box1.classList.add('skyblue')
}
function green(){
    removePreviouscolour()
    box1.classList.add('green')
}
