$(function() {
    let passTheWordBtn = $("#pass-the-word");
    let wordContainer = $("#word-container");
    let newWord = $("#new-word");

    passTheWordBtn.on("click", function() {

        collection = { "new-word": newWord.val() }

        $.ajax({
            url:  "server-side.php",
            type: 'POST',
            data: collection,
            success: function(data) { 
                wordContainer.html(data);
            }
        });
    });
});