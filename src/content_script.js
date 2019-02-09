/* let textContent = `
 *     #fulfill-pullrequest {
 * 	display: none !important;
 *     }
 * `;
 * 
 * chrome.tabs.insertCSS(tab.id, {code:textContent, allFrames:false, runAt:"document_start"});
 * */
hideButton();

function hideButton()
{
    console.log("Looking for the PR button >:)");

    let thing = document.documentElement;
    const style = document.createElement('style');

    style.textContent = `
    #fulfill-pullrequest {
	display: none !important;
    }
    `;
    thing.appendChild(style);
    /* document.getElementById("fulfill-pullrequest").style.display = "none";*/
    console.log("Pwned");
}
