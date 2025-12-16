---
theme: dashboard
title: Los Lobos Track Club
toc: false
---

# Los Lobos Track Club: Fundraising $9,100 for the Providence Cancer Institute via the Hood to Coast Relay

<style>
  /* 1. CONTAINER */
  .carousel-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* Sets the shape of the window */
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    background-color: #333; /* Dark background looks best for mixed image sizes */
  }

  /* 2. SLIDES */
  .carousel-slide {
    display: none;
    width: 100%;
    height: 100%;
  }

  .carousel-slide.active {
    display: block;
    animation: fadeEffect 0.5s;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    /* 'contain' ensures the whole image is seen without cropping */
    object-fit: contain; 
  }

  /* 3. BUTTONS */
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
Yes, we can absolutely do that.

Since the layout is using object-fit: contain (where there might be empty black space around the image) and aspect-ratio (a fixed box size), the best way to display captions is to overlay them at the bottom of the frame.

I have added a translucent black bar at the bottom of each slide that will display the text found in your alt tags.

Copy and Paste the entire block below:
HTML

<style>
  /* 1. CONTAINER */
  .carousel-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    background-color: #333;
  }

  /* 2. SLIDES */
  .carousel-slide {
    display: none;
    width: 100%;
    height: 100%;
    position: relative; /* Needed for positioning the caption */
  }

  .carousel-slide.active {
    display: block;
    animation: fadeEffect 0.5s;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }

  /* 3. CAPTIONS (New Addition) */
  .caption-text {
    color: #f2f2f2;
    font-size: 12px;
    padding: 1px 3px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
    box-sizing: border-box; /* Ensures padding doesn't break width */
    font-family: sans-serif;
  }

  /* 4. BUTTONS */
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
    z-index: 2; /* Ensures buttons sit above the image */
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
</style>

<div class="carousel-container">

  <div class="carousel-slide active">
    <img src="I68A5633.jpg" alt="Close Up 50/50 Raffle">
    <div class="caption-text">50/50 Raffle Signage at the Marion Berries Baseball "Strikeout Cancer Night"</div>
  </div>

  <div class="carousel-slide">
    <img src="I68A5635.jpg" alt="50/50 Raffle Table">
    <div class="caption-text">50/50 Raffle Table</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_5746.png" alt="Team HTC Finish">
    <div class="caption-text">Our 2025 Hood to Coast Team at the Providence #FINISHCANCER VIP Section</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_1753.jpeg" alt="Northwest Primary Care Van Sponsor">
    <div class="caption-text">Northwest Primary Care Van Sponsorship</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_1754.jpeg" alt="Cascade Stems Van Sponsor">
    <div class="caption-text">Cascade Stems Van Sponsorship</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_4781.PNG" alt="Van Sponsorship Catalog">
    <div class="caption-text">Van Sponsorship Catalog</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_5367.PNG" alt="Collaboration Uniforms with Eight Lane Running Company">
    <div class="caption-text">Collaboration Uniforms with Eight Lane Running Company</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_5700.PNG" alt="Our Fundraising Page">
    <div class="caption-text">Our Fundraising Page</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_5701.PNG" alt="My Personal Fundraising Page">
    <div class="caption-text">My Personal Fundraising Page</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_7954.jpeg" alt="HTC Photo Finish">
    <div class="caption-text">Myself pointing to our club's name on the #FINISHCANCER fundraising team wall</div>
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

During my internship, I helped distribute over **6,000 Berry Passes**.

<div class="grid grid-cols-2"> <div class="card"> <h2>Strategy</h2> <p>My role involved designing <strong>Instagram Reels</strong> and writing <strong>Radio Ad Scripts</strong>. The data suggests that <em>In-Game Events</em> and <em>Social Media</em> outperformed traditional Radio spots.</p> </div> <div class="card"> <h2>Tools Used</h2> <ul> <li><strong>Data Analysis:</strong> JASP & Tableau</li> <li><strong>Creative:</strong> Adobe CC & Canva</li> <li><strong>Execution:</strong> Meta Business Suite</li> </ul> </div> </div>