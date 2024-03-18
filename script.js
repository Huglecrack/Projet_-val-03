
function envoie() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const message = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");
  
    if (firstName.value.trim() === "" || lastName.value.trim() === "" || message.value.trim() === "") {
        errorMessage.style.display = "block";
        return;
    }

    const commentList = document.getElementById("comment-list");

    const newComment = 
        `<div class="flex space-x-4 text-sm text-gray-500 border-t border-gray-200 py-10">
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstName.value} ${lastName.value}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message.value}</p>
                </div>
            </div>
        </div>`;

    commentList.insertAdjacentHTML("beforeend", newComment);

    firstName.value = "";
    lastName.value = "";
    message.value = "";

}