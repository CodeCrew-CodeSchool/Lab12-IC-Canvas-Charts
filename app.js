function makeRandom(){
  return Math.floor( Math.random()* cardNames.length) // returns a random whole number between 0 and the length of the cardNames array
}




console.log('Up and running');




let maxClicks = 0; // 5 rounds of picking words

let allClicks = []; // I need to put all of my clicks in an array for my chart data

let cardNames = []; // all card names go here!



// references to ALL my card comtainers in HTML
let cardOneContainer = document.getElementById('card-one');
let cardTwoContainer = document.getElementById('card-two');
let cardThreeContainer = document.getElementById('card-three');

let resultsButton = document.getElementById('show-results'); // for my show results button :)


// returns a number












let canvas = document.getElementById('canvas');


// I want to make objects for my cards to have thier own timesClicked variables. You will need to use a constructor here :0
let cardOne = {
  name: 'Card one',
  timesClicked: 0
}

let cardTwo = {
  name: 'Card two',
  timesClicked: 0,
}

let cardThree = {
  name: 'Card three',
  timesClicked: 0
}


function timesClickedHandler(card){
  // check what card it is

    // after card is checked, add one to the timesClicked property!
    if(maxClicks < 10){
  if(card.name === 'Card one'){
    cardOne.timesClicked++
    maxClicks++
  }
  else if(card.name === 'Card two'){
    cardTwo.timesClicked++
    maxClicks++
  }else if(card.name === 'Card three'){
    cardThree.timesClicked++
    maxClicks++

  }else{
    console.log('No card has been clicked...');
  }}else{
    alert('Clicks Exeeded!!');
    // console.log(`Card one was clicked ${cardOne.timesClicked} times!`);
    // console.log(`Card two was clicked ${cardTwo.timesClicked} times!`);
    // console.log(`Card three was clicked ${cardThree.timesClicked} times`);
    allClicks.push(cardOne.timesClicked, cardTwo.timesClicked, cardThree.timesClicked); // push all card clicks
    cardNames.push(cardOne.name, cardTwo.name, cardThree.name); // push all card names

    console.log(allClicks) // all cards times clicked is now in my array :)

    // declare some variable to hold our random index numbers

    // three random numbers
    let randomNumberOne = makeRandom();
    let randomNumberTwo = makeRandom();
    let randomNumberThree = makeRandom();

    // check to see if they are the same
    // while randomNumber is equal to randomNumberTwo
    // or while randomNumberTwo is equal to RandomNumberThree
    while(randomNumberOne === randomNumberTwo || randomNumberThree ===randomNumberTwo){
      // check the last condition
          if(randomNumberOne === randomNumberThree){
            randomNumberOne = makeRandom()
          }
      // reassign randomNumberTwo
      randomNumberTwo = makeRandom()

    }

    // 
    console.log(randomNumberOne, randomNumberTwo, randomNumberThree)


    
  // I WANT TO RANDOMIZE THEIR POSITION
  // we need a for loop to iterate over the cardNames array
  for ( let i = 0; i< cardNames.length; i++){
    // make a random counter variable 
        let randomNumber = makeRandom()
        let randomCardPosition = cardNames[randomNumber];

        // i want to make the actual counter
       let actualPosition = cardNames[i]

        // checks only 2 cases
       while(randomCardPosition === actualPosition){
            randomCardPosition = makeRandom()
       }

       console.log(randomCardPosition)
       
  }
  //  cardOneContainer
  //  cardTwoContainer
  //  cardThreeContainer



    getResults()

    

  
  }
 
}



cardOneContainer.addEventListener('click', function(){timesClickedHandler(cardOne)});
cardTwoContainer.addEventListener('click', function(){timesClickedHandler(cardTwo)});
cardThreeContainer.addEventListener('click', function(){timesClickedHandler(cardThree)});




function getResults(){
  
  // user clicks button and something happens!
resultsButton.addEventListener('click', function(){

  alert('Great Work!');
  // pull in my canvas element from html
  let canvas = document.getElementById('canvas');

  // next we need to create a chart.
  const ctx = canvas.getContext('2d'); // making an object to draw 2d!

  // This is my chart!!
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: cardNames, // pass array to our label data! 
        datasets: [{
            label: '# of Clicks',
            data: allClicks, // Has to match the label data!!
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

})


}













