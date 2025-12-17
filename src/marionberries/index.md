---
theme: dashboard
title: Marion Berries Baseball Club
toc: false
---

<div style="width: 100%; max-width: 100%; margin-bottom: 2rem;">
  
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.1;">
    Marion Berries Baseball: Promotions and Marketing to Strenghten the Berries' Relationship with the City of Salem.
  </h1>

  <p style="font-size: 1.15rem; line-height: 1.6; max-width: none;">
    During my summer as a Promotions Intern with the Marion Berries Baseball team, I contributed to activities which established a strong relationship with the team and Salem residents in its 2025 inaugural season. Some of these activities include <strong>the planning and execution of between-inning entertainment</strong>, <strong>developing and leading game-day activations to increase foot traffic</strong>, and <strong>the management of team social media accounts to positively engage and update the team's fans and sponsors</strong>.
  </p>

</div>

<style>
  /* CONTAINER: Fixed aspect ratio (16:9) keeps the frame size constant */
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9; /* Keeps the box shape identical for every slide */
    margin: 0 auto;
    overflow: hidden; /* Cuts off anything that tries to stick out */
    border-radius: 8px;
    background-color: #222; /* Dark grey background for empty space */
  }

  /* SLIDES */
  .carousel-slide {
    display: none;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel-slide.active {
    display: block;
    animation: fadeEffect 0.5s;
  }

  /* IMAGES: 'contain' forces the whole image to fit inside the box */
  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
    display: block;
  }

  /* CAPTIONS */
  .caption-text {
    color: #f2f2f2;
    font-size: 14px;
    padding: 8px 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    font-family: sans-serif;
  }

  /* BUTTONS */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(0,0,0,0.3);
    text-decoration: none;
    z-index: 2;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  @keyframes fadeEffect {
    from {opacity: .4} 
    to {opacity: 1}
  }

  .card {
  padding: -1.5rem !important; /* Default is often larger */
}
</style>

<div class="carousel-container">

  <div class="carousel-slide active">
    <img src="IMG_1664.jpg" alt="Pizza in Your Seatza">
    <div class="caption-text">"Pizza in Your Seatza" Photo Credit: Sauce Studio and Design</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_1874.jpg" alt="Dizzy Bat Race">
    <div class="caption-text">"Dizzy Bat Race" Photo Credit: Sauce Studio and Design</div>
  </div>

  <div class="carousel-slide">
    <img src="I68A4656.jpg" alt="Trick or Treat Night">
    <div class="caption-text">Dressing as Leroy the on-field MC, for "Trick or Treat Night"</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3699.jpeg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating COntest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3702.jpeg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating COntest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3709.jpeg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating COntest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3713.jpeg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating COntest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3738.jpeg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating COntest</div>
  </div>

  <div class="carousel-slide">
    <img src="I68A5635.jpg" alt="50/50 Raffle Table">
    <div class="caption-text">50/50 Raffle Table</div>
  </div>

  <div class="carousel-slide">
    <img src="I Want You - Story.png" alt="Hot Dog Eating Competition Call for Competitors">
    <div class="caption-text">Hot Dog Eating Competition Call for Competitors</div>
  </div>

  <div class="carousel-slide">
    <img src="Copy of I Want You - Feed.png" alt="Hot Dog Eating Competition Event Details">
    <div class="caption-text">Hot Dog Eating Competition Event Details</div>
  </div>

  <div class="carousel-slide">
    <img src="Instagram promotional posts.png" alt="One of the 50/50 Raffle Days">
    <div class="caption-text">Promotional Post for one of our 50/50 Raffle Days</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>

<script>
  let slideIndex = 1;
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      slides[i].classList.remove("active");
    }
    
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].classList.add("active");
  }
</script>

<div class="grid grid-cols-2"> <div class="card"> <h2>Strategy</h2> <p>My role involved designing <strong>Instagram Reels</strong> and writing <strong>Radio Ad Scripts</strong>. The data suggests that <em>In-Game Events</em> and <em>Social Media</em> outperformed traditional Radio spots.</p> </div> <div class="card"> <h2>Tools Used</h2> <ul> <li><strong>Data Analysis:</strong> JASP & Tableau</li> <li><strong>Creative:</strong> Adobe CC & Canva</li> <li><strong>Execution:</strong> Meta Business Suite</li> </ul> </div> </div>