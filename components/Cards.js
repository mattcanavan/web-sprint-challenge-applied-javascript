// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//PART 1: COMPONENET
function createCard(articleObj){
    //Create all elements
    const mainCardDiv = document.createElement('div'),
        headlineDiv = document.createElement('div'),
        authorDiv = document.createElement('div'),
        imageDiv = document.createElement('div'),
        imageImg = document.createElement('img'),
        authorSpan = document.createElement('span');

    //Add classnames to elements
    mainCardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imageDiv.classList.add('imge-container');

    //Nesting elements to match provided markup
    mainCardDiv.appendChild(headlineDiv);
    mainCardDiv.appendChild(authorDiv);

    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(authorSpan);

    imageDiv.appendChild(imageImg);

    //Adding text contents, img src info
    headlineDiv.textContent = articleObj.headline;
    imageImg.src = articleObj.authorPhoto;
    authorSpan.textContent = `By ${articleObj.authorName}`;

    return createCard
}

//PART 2: SEND GET REQUEST AND DECONSTRUCT RETURNED DATA SO THAT createCard CAN HANDLE IT
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(stuff =>{
    let dataObj = stuff.data;   //returned data is 3) article obj, 2) nested in topic array, 1) all nested in one large obj
    let topicKeysArray = Object.keys(dataObj.articles); //creates an array of keys. each key unlocks articls objs

    topicKeysArray.forEach(item =>{                //forEach key ...
        let arrayOfArticleObjs = dataObj.articles[`${item}`];   //... create an array of article objs

        arrayOfArticleObjs.forEach(nestedItem =>{        //forEach article Obj ...
            let newArticle = nestedItem;
            console.log(newArticle);
            // createCard(newArticle);                 //... pass to createCard to create new card

        })
    })
})
.catch(err =>{
    debugger
})