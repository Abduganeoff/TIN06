function addParagraph() {
    const paragraph = `She didn't understand how changed worked. 
                        When she looked at today compared to yesterday, 
                        there was nothing that she could see that was different. 
                        Yet, when she looked at today compared to last year, she 
                        couldn't see how anything was ever the same.`;
    console.log(paragraph);

    document.querySelector('p').innerText = paragraph;
    
}

setTimeout(addParagraph, 5000);