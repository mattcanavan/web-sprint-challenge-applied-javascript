// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //Creating all the elements
    const headerContents = document.createElement('div'),
        dateSpan = document.createElement('span'),
        titleH1 = document.createElement('h1'),
        tempSpan = document.createElement('span');

    //Adding class names
    headerContents.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //Adding text content
    dateSpan.textContent = 'MARCH 28, 2020';
    titleH1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°'

    //Nesting elements to match provided markup
    headerContents.appendChild(dateSpan);
    headerContents.appendChild(titleH1);
    headerContents.appendChild(tempSpan);

    //... and append [header] to the DOM inside the div.header-container
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(headerContents);
}

Header()    //i think we should create it now?