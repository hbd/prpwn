hideButton();

function hideButton()
{
    console.log("Looking for the PR button >:)");

    let thing = document.documentElement;
    const style = document.createElement('style');
    style.textContent = `
    .BtnGroup.btn-group-merge {
	display: none !important;
    }
    `;
    thing.appendChild(style);

    console.log("Pwned");
}
