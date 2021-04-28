// Create an event listener that listens to click on submit button

const form = document.querySelector('form')



form.addEventListener('submit', function(event){
    event.preventDefault();

    // Save user input from each text field in a variable
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const commentInput = document.getElementById('comment').value;
    
    // Create a div with the class .commentCont to hold user inputs

    const commentContainer = document.createElement('div');
    commentContainer.classList.add("flexComment", "commentCont");
    console.log(commentContainer);

    // Put the user inputs into the comment Container

    // Append the comment container

    
});






















// When user clicks submit, append to .flexComment