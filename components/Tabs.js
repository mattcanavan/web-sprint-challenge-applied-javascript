// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

let topicContainer = document.querySelector('.topics'); //select piece of HTML where new topics will be appended to

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(stuff => {
        let tempArray = Array.from(stuff.data.topics);  //create an array from GET which already returned an array.

        tempArray.forEach(topic => {
            let newTopic = document.createElement('tab') //create new element. note in the HTML the top level element is tabs (plural) while this is singular
            newTopic.classList.add('tab') //add class name to new element
            newTopic.textContent = topic; //add text content from GET to each new element
            topicContainer.appendChild(newTopic)    //append each new element to .topics

        })

    })
    .catch(err => {
        debugger
    })