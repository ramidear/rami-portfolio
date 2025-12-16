---
theme: dashboard
title: Los Lobos Track Club
toc: false
---

<div style="width: 100%; max-width: 100%; margin-bottom: 2rem;">
  
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.1;">
    Los Lobos Track Club: Fundraising $9,100 for the Providence Cancer Institute via the Hood to Coast Relay
  </h1>

  <p style="font-size: 1.15rem; line-height: 1.6; max-width: none;">
    As Co-founder of Los Lobos Track Club, I am always seeking ways for our club to stand out amongst other high performance teams. To address a cause that affects several of our own, I decided ahead of the 2025 Hood to Coast Relays that our team would take on the challenge of competing as a <strong>#FINISHCANCER fundraising team.</strong> We ran our way to <strong>8th place for the Men's Open Division</strong> while raising <strong>$9,000+ for the Providence Cancer Institute</strong>.
  </p>

</div>

<style>
  /* ... The rest of your existing style code ... */
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
    position: relative;
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

  /* 3. CAPTIONS */
  .caption-text {
    color: #f2f2f2;
    font-size: 14px; /* Increased slightly for readability */
    padding: 8px 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
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

<div class="grid grid-cols-2"> 
  
  <div class="card"> 
    <h2>Strategy</h2> 
    <p>While fundraising over $9,000 was a full-team effort, it was my responsibility to <strong>acquire local sponsorships and partnerships</strong> while <strong>coordinating with team members to help them fundraise successfully</strong>. Through <em>Cold-Emailing</em> and <em>Leveraging our Networks via Social Media</em>, our team was able to secure donations from various donors.</p> 
  </div> 

  <div class="card"> 
    <h2>Tools Used</h2> 
    <ul> 
      <li>
         <strong>Creative:</strong> <strong>Canva</strong> and <strong>Adobe Creative Cloud (Photoshop and Illustrator)</strong> were used often to create graphics used for social media, promotional materials, and mock-ups for uniforms and van door signage.
      </li>
      <li style="margin-top: 10px;">
        <strong>Execution:</strong> <strong>Meta Business Suite (Facebook/Instagram)</strong> was used to communicate fundraising requests and updates with Los Lobos club members. These platforms were also used to promote the fundraiser itself and related events, such as the 50/50 fundraiser with the Marion Berries.
      </li> 
    </ul>
  </div> 

<div class="card" style="grid-column: span 2;">
    <h2>Sponsors & Partners</h2>
    <ul>
      <li>
            <strong>Van Door Sponsors:</strong> <strong>Cascade Stems</strong> and <strong>Northwest Primary Care</strong> were two companies who purchased Van Door signage, which we featured on our two team vans which drove along the whole 196-mile Hood to Coast course from Mount Hood to Seaside, Oregon. This activation put these two companies in front of the eyes of over 1,000 Hood to Coast teams (8-12 people per team) and their volunteers (about 3 per team). 
      </li> 
      <li style="margin-top: 10px;">
      <strong>Partners:</strong> <strong>Anytime Fitness Independence</strong>, <strong>Eight Lane Running Company</strong>, <strong>Marion Berries Baseball</strong>, and <strong>REVOLVR Menswear</strong> were drawn to our cause and were incredibly helpful in achieving our mission. Anytime Fitness took the time to <a href="https://www.facebook.com/reel/737930685664997" target="_blank">interview me about my club and our involvement with the #FINISHCANCER campaign</a>, and used this interview to blast our fundraiser on their socials in the build up to race day. Eight Lane Running Company helped us by producing our uniforms at a deep discount, so that the costs we would save on uniforms could go directly back into the fundraiser. <strong>Marion Berries Baseball </strong> worked with us to host three 50/50 fundraising raffles at their games, which brought in nearly <strong>$800</strong> to our fundraiser, while leaving a positive impact on the winning fans. Lastly, REVOLVR Menswear donated a $75 Gift Card for us to raffle off, which generated about another <strong>$400</strong> of donations.
      </li>
    </ul>
  </div>

</div>

</div>