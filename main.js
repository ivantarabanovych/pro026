const button = document.getElementById('button-check');
    button.addEventListener('click', function(){
        alert('check-in');
});

const element = document.getElementById('some-element');
element.addEventListener('mouseover', function(){
    element.style.color = 'red';
});

const input = document.getElementById('finder');
input.addEventListener('focus', function(){
    console.log('find somesting tralalala...');
})

document.addEventListener('keypress', function(event){
    console.log(`key presses: ${event.key}`);
    
})