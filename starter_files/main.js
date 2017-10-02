/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let find = document.querySelector("#who")
let sounds = document.querySelector(".music-player")

// sounds.src = 


let search = document.querySelector("#notes");
search.addEventListener("click", function(){
  let musician = find.value


  fetch("https://itunes.apple.com/search?term="+musician).then(function(resp){
    return resp.json()
  })
  .then(function(resp){
    // console.log(resp)
    for(let i = 0; i < resp.resultCount; i++){
      let found = document.querySelector(".results")

      let container = document.createElement('div');
      container.innerHTML =
          `
          <h2>${resp.results[i].artistName}</h2>
          <img src="${resp.results[i].artworkUrl100}">
          <h4>${resp.results[i].trackName}</h4>
          <button id="song-${i}">Preview</button>
          `
      // found.innerHTML += squares
      found.appendChild(container);

      let preview = document.querySelector(`#song-${i}`)
      // console.log(preview)
      // preview.textContent = i
      preview.addEventListener("click", function(){
        console.log("jello")
        sounds.src = resp.results[i].previewUrl
        console.log(resp.results[i].previewUrl)
        sounds.play()
      })
    }

  })
  console.log("wuzzzzuuuuuuuup")
})