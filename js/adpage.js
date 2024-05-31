document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.querySelector(".comments-list");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    function addComment(commentText) {
        const commentItem = document.createElement("li");
        commentItem.classList.add("comment");
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
    }
});