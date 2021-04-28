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

    // Add Inputs to a variable called "new comment"

    // ** I realized that I cannot appendChild with a string so this code needs a little bit of work, It took me a little bit to figure this out so I did not have enough time to complete.
    const newComment = `
    <div class="comment">
        <div class="profilePic">
            <img src="./assets/captured-final-assets/comment-2.jpg" alt="A white female smiling">
        </div> 
        ${commentContainer.innerHTML = `
        <p class="date">Wednesday October 10th, 2018 by ${nameInput}</p>
        <p>${commentInput}</p>`}
    </div>`

    console.log(newComment);

    // Append the comment container
    const commentParent = document.getElementById('commentParent')
    commentParent.appendChild(newComment);



    
});






















// When user clicks submit, append to .flexComment