deleteButton();

function deleteButton()
{
    console.log("Deleting the PR button >:)");
    let mergeButtons = document.getElementsByClassName("btn-group-merge")
    for (i = 0; i < mergeButtons.length; i++) {
	console.log("deleting " + mergeButtons[i])
	mergeButtons[i].remove()
    }
    console.log("Double Pwned");
}
