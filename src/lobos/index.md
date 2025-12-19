---
theme: dashboard
title: Los Lobos Track Club
toc: false
---

<style>
  /* FORCE DARK MODE PALETTE */
  :root {
    /* Backgrounds */
    --theme-background: #1a1a1a !important;      /* Dark Charcoal for main background */
    --theme-background-alt: #262626 !important;  /* Slightly lighter for cards */
    
    /* Text */
    --theme-foreground: #e0e0e0 !important;      /* Off-white for readability */
    --theme-foreground-muted: #a0a0a0 !important; /* Grey for secondary text */
    
    /* Borders */
    --theme-border: #404040 !important;
  }

  /* Apply the backgrounds */
  body {
    background-color: var(--theme-background);
    color: var(--theme-foreground);
  }

  /* Force Cards to stand out against the background */
  .card {
    background-color: var(--theme-background-alt) !important;
    border: 1px solid var(--theme-border);
    color: var(--theme-foreground) !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Adds depth */
  }

  /* Make sure headings are bright */
  h1, h2, h3, h4, h5, h6 {
    color: #ffffff !important;
  }

  /* Fix Links to be visible on dark background */
  a {
    color: #4da6ff; /* A nice accessible blue */
  }
  a:hover {
    color: #80c1ff;
  }
</style>

<div style="width: 100%; max-width: 100%; margin-bottom: 2rem;">
  
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.1;">
    Los Lobos Track Club: Fundraising $9,100 for the Providence Cancer Institute via the Hood to Coast Relay
  </h1>

  <p style="font-size: 1.15rem; line-height: 1.6; max-width: none;">
    As Co-founder of Los Lobos Track Club, I am always seeking ways for our club to stand out amongst other high performance teams. To address a cause that affects several of our own, I decided ahead of the 2025 Hood to Coast Relays that our team would take on the challenge of competing as a <strong>#FINISHCANCER fundraising team.</strong> We ran our way to <strong>8th place for the Men's Open Division</strong> while raising <strong>$9,000+ for the Providence Cancer Institute</strong>.
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

/* Button Style for direct links */
  .ig-button {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #E1306C; /* Instagram Pink/Red */
    color: white !important;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: opacity 0.2s;
  }
  .ig-button:hover { opacity: 0.8; }
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

<div class="grid grid-cols-3" style="gap: 1rem;">

  <div style="grid-column: span 2;">
    <div class="grid grid-cols-2" style="gap: 1rem;"> 
      
  <div class="card"> 
        <h2>Strategy</h2> 
        <p style="max-width: none;">While fundraising over $9,000 was a full-team effort, it was my responsibility to <strong>acquire local sponsorships and partnerships</strong> while <strong>coordinating with team members to help them fundraise successfully</strong>. Through <em>Cold-Emailing</em> and <em>Leveraging our Networks via Social Media</em>, our team was able to secure donations from various donors.</p> 
      </div> 

  <div class="card"> 
        <h2>Tools Used</h2> 
        <ul style="max-width: none;"> 
          <li>
             <strong>Creative:</strong> <strong>Canva</strong> and <strong>Adobe Creative Cloud (Photoshop and Illustrator)</strong> were used often to create graphics used for social media, promotional materials, and mock-ups for uniforms and van door signage.
          </li>
          <li style="margin-top: 10px;">
            <strong>Execution:</strong> <strong>Meta Business Suite (Facebook/Instagram)</strong> was used to communicate fundraising requests and updates with Los Lobos club members. These platforms were also used to promote the fundraiser itself and related events.
          </li> 
        </ul>
      </div> 

  <div class="card">
        <h2>Van Door Sponsors</h2>
        <p style="max-width: none;">
          <strong>Cascade Stems</strong> and <strong>Northwest Primary Care</strong> were two companies who purchased Van Door signage, which we featured on our two team vans which drove along the whole 196-mile Hood to Coast course from Mount Hood to Seaside, Oregon. This activation put these two companies in front of the eyes of over 1,000 Hood to Coast teams (8-12 people per team) and their volunteers (about 3 per team).
        </p>
      </div>

  <div class="card">
        <h2>Partners</h2>
        <p style="max-width: none;">
          <strong>Anytime Fitness Independence</strong>, <strong>Eight Lane Running Company</strong>, <strong>Marion Berries Baseball</strong>, and <strong>REVOLVR Menswear</strong> were drawn to our cause and were incredibly helpful in achieving our mission. 
        </p>
        <ul style="max-width: none; margin-top: 10px;">
          <li>
            <strong>Anytime Fitness</strong> took the time to <a href="https://www.facebook.com/reel/737930685664997" target="_blank">interview me about my club and the #FINISHCANCER campaign</a> to blast our fundraiser on their socials.
          </li>
          <li>
            <strong>Eight Lane Running Company</strong> produced our uniforms at a deep discount, so costs saved could go directly to the fundraiser.
          </li>
          <li>
            <strong>Marion Berries Baseball</strong> hosted three 50/50 fundraising raffles at their games, bringing in nearly <strong>$800</strong>.
          </li>
          <li>
            <strong>REVOLVR Menswear</strong> donated a $75 Gift Card for us to raffle off, generating another <strong>$400</strong>.
          </li>
        </ul>
      </div>

  </div>
  </div>

  <div class="card" style="padding: 1rem; display: flex; flex-direction: column; align-items: center;">
    <h3 style="margin-bottom: 1rem; text-align: center;">Partner Interview</h3>
    
  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DMGreOWhlSm/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <div style="padding:16px;"> 
        <a href="https://www.instagram.com/reel/DMGreOWhlSm/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
          View this post on Instagram
        </a>
      </div>
    </blockquote>

  <p style="font-size: 0.9rem; color: #f2f2f2; margin-top: 1rem;">
      <strong>Context:</strong> Discussing the mission of Los Lobos and our #FINISHCANCER campaign with Anytime Fitness Independence.
    </p>
  </div>

</div>

<script async src="https://www.instagram.com/embed.js"></script>