const data = document.body.innerHTML;
// console.log(data);

const keyWords = ["clearance","unable to sponsor","green card","citizen"]


function checkDiv() {
    const targetDiv = document.getElementById('job-details');
    if (targetDiv) {
        var jobDetailsText = targetDiv.innerText.toLowerCase();
        console.log(jobDetailsText);

        if (checkForKeyWords(jobDetailsText)) {
            console.log("Don't Apply");
            for(let i=0;i<jobDetailsText.length;i++)
            {
                highlightText(targetDiv,keyWords[i])
            }
        } else {
            console.log("Apply");
        }
    } else {
        console.log("I couldn't find it!!!");
    }
}

function checkForKeyWords(jobDetailsText){
    for(let i=0;i<jobDetailsText.length;i++){
        if(jobDetailsText.includes(keyWords[i])){
            return true;
        }
    }
}
function highlightText(container, text) {
    const innerHTML = container.innerHTML;
    const regex = new RegExp(`(${text})`, 'gi'); // Global and case insensitive matching
    const replacement = `<span style="background-color: yellow; color: black;">$1</span>`; // Highlight style
    container.innerHTML = innerHTML.replace(regex, replacement);
}

document.addEventListener('click', function() {
    setTimeout(checkDiv, 500); // Check 500ms after any click on the document
});
