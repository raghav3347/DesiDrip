var containerTshirts = document.querySelector('#container--tshirt')
var containerTrousers = document.querySelector('#container--trouser')
var containerTrack = document.querySelector('#container--track')



const totalTshirts = 23;
const totalTrousers = 11;
const totalTrack = 9;
const totalTrackjpeg = 2;



for (let i =1; i<=totalTshirts; i++){
    let code = `
    <div class="fade-up">
        <div class="cards">
          <div class="card--sale">Sale</div>
          <div class="cards--img">
            <img loading="lazy" src="/clothes/tshirt/1 (${i}).jpeg" alt="" />
          </div>

          <p class="cards--tagging">T-Shirts</p>
          <span class="card--size"> Size: </span>
          <span class="size--cloths">
            <span class="underline">M</span> <span class="underline">L</span>
            <span class="underline">XL</span> <span class="underline">XXL</span>
          </span>
          <br />
          <span class="card-cut-pricing"> $49.99 </span>
          <span class="card-normal-pricing"> $24.99 </span>
        </div>
    </div>
    `;
    containerTshirts.innerHTML += code;
}


for (let i =1; i<=totalTrousers; i++){
    let code = `
    <div class="fade-up">
        <div class="cards">
          <div class="card--sale">Sale</div>
          <div class="cards--img">
            <img loading="lazy" src="/clothes/trousers/1 (${i}).jpeg" alt="" />
          </div>

          <p class="cards--tagging">Trousers</p>
          <span class="card--size"> Size: </span>
          <span class="size--cloths">
            <span class="underline">M</span> <span class="underline">L</span>
            <span class="underline">XL</span> <span class="underline">XXL</span>
          </span>
          <br />
          <span class="card-cut-pricing"> $59.99 </span>
          <span class="card-normal-pricing"> $29.99 </span>
        </div>
      </div>
    `;
    containerTrousers.innerHTML += code;
}

for (let i =1; i<=totalTrack; i++){
  let code = `
  <div class="fade-up">
      <div class="cards">
        <div class="card--sale">Sale</div>
        <div class="cards--img">
          <img loading="lazy" src="/clothes/track/0 (${i}).jpg" alt="" />
        </div>

        <p class="cards--tagging">Track Suit</p>
        <span class="card--size"> Size: </span>
        <span class="size--cloths">
          <span class="underline">M</span> <span class="underline">L</span>
          <span class="underline">XL</span> <span class="underline">XXL</span>
        </span>
        <br />
        <span class="card-cut-pricing"> $49.99 </span>
        <span class="card-normal-pricing"> $24.99 </span>
      </div>
    </div>
  `;
  containerTrack.innerHTML += code;
}

for (let i =1; i<=totalTrackjpeg; i++){
  let code = `
  <div class="fade-up">
      <div class="cards">
        <div class="card--sale">Sale</div>
        <div class="cards--img">
          <img loading="lazy" src="/clothes/track/0 (${i}).jpeg" alt="" />
        </div>

        <p class="cards--tagging">Track Suit</p>
        <span class="card--size"> Size: </span>
        <span class="size--cloths">
          <span class="underline">M</span> <span class="underline">L</span>
          <span class="underline">XL</span> <span class="underline">XXL</span>
        </span>
        <br />
        <span class="card-cut-pricing"> $49.99 </span>
        <span class="card-normal-pricing"> $24.99 </span>
      </div>
    </div>
  `;
  containerTrack.innerHTML += code;
}
