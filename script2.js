function addPost(){

    let input = document.getElementById("postInput");
    let text = input.value;

    if(text===""){
        alert("Enter a post");
        return;
    }

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <p>${text}</p>
        <button onclick="likePost(this)">Like </button>
        <span>0 Likes</span>
    `;

    document.getElementById("posts").prepend(post);

    input.value = "";
}

function likePost(button){

    let span = button.nextElementSibling;
    let likes = parseInt(span.innerText);

    likes++;

    span.innerText = likes + " Likes";
}