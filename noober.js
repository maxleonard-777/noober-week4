window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Store into memory the name, phone number, and starting and ending address

  // let passengerFirstName = passengerDetails.first 
  // let passengerLastName = passengerDetails.last 
  // let passengerNumber = passengerDetails.phoneNumber 

  // let startAdress = pickup.address
  // let startCity = pickup.city 
  // let startState = pickup.state 
  // let startZip = pickup.zip 

  // let endAdress = dropoff.address
  // let endCity = dropoff.city 
  // let endState = dropoff.state 
  // let endZip = dropoff.zip 

  // console.dir(pickup)
 // Recipe:

  
   // Loop through the rides data
  for (let i=0; i < json.length; i++) {
    // Create a variable to store each ride in memory
    let ride = json[i] 
    let rideType

    // Decide which level of service to provide using conditionals
    // Noober purple requests superscede other requests, so this goes first
    if (ride.purpleRequested == true) {
      rideType = 'Noober Purple'
    } 
   // if the number of passengers is over 3 we need an XL 
    else if (ride.numberOfPassengers > 3) {
      rideType = 'Noober XL'
    } else {
      // If the number of riders is 3 or below and no purple ride was requested it is a normal ride
      rideType = 'Noober X'
    }

    let passengerDetails = ride.passengerDetails
    let pickup = ride.pickupLocation
    let dropoff = ride.dropoffLocation

    // Create a variable for the HTML element we're going to add to
    let ridesElement = document.querySelector(`.rides`)

    // Insert HTML into the rides element, using the data from each ride
     ridesElement.insertAdjacentHTML(`beforeend`, `
     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
     <i class="fas fa-car-side"></i>
     <span>${rideType}</span>
   </h1>

   <div class="border-4 border-gray-900 p-4 my-4 text-left">
     <div class="flex">
       <div class="w-1/2">
         <h2 class="text-2xl py-1"> ${passengerDetails.first} ${passengerDetails.last} </h2>
         <p class="font-bold text-gray-600">${passengerDetails.phoneNumber}</p>
       </div>
       <div class="w-1/2 text-right">
         <span class="rounded-xl bg-gray-600 text-white p-2">
           ${ride.numberOfPassengers} passengers
         </span>
       </div>
     </div>
     <div class="mt-4 flex">
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">PICKUP</div>
         <p>${pickup.address}</p>
         <p>${pickup.city}, ${pickup.state} ${pickup.zip}</p>
       </div>
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
         <p>${dropoff.address}</p>
         <p>${dropoff.city}, ${dropoff.state} ${dropoff.zip}</p>
       </div>
     </div>
   </div>
    `)
  }

})

