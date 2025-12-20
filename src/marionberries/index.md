---
theme: dashboard
title: Marion Berries Baseball Club
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

  p, li {
  max-width: 70ch; /* approx 70 characters wide */
  line-height: 1.6; /* gives the text room to breathe */
}
</style>

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

.ig-button {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #E1306C;
    color: white !important;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9rem;
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
    <img src="IMG_3699.jpg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3702.jpg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3709.jpg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3713.jpg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
  </div>

  <div class="carousel-slide">
    <img src="IMG_3738.jpg" alt="Hot Dog Eating Contest">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
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

</style>

<div style="margin-bottom: 2rem;">
  <h1 style="font-size: 2.5rem; line-height: 1.1;">Marion Berries Baseball: Promotions & Marketing</h1>
  <p style="font-size: 1.15rem; color: #a0a0a0; max-width: 800px;">
    Strengthening the relationship between a new franchise and the City of Salem through community-first activations.
  </p>
</div>

<div class="grid grid-cols-3" style="gap: 1rem;">

  <div style="grid-column: span 2;">
    <div class="grid grid-cols-2" style="gap: 1rem;"> 
      
  <div class="card"> 
        <h2>The Strategy</h2> 
        <p>
           My goal was to internalize the front office's philosophy: <strong>positively impact the City of Salem</strong> by offering affordable family fun. 
        </p>
        <p style="margin-top: 10px;">
           We shifted the focus from just "baseball" to "entertainment," ensuring that even casual fans left with memories to last a lifetime, regardless of the final score.
        </p>
      </div> 

   <div class="card"> 
        <h2>Tools Used</h2> 
        <ul style="padding-left: 1.2rem;"> 
          <li style="margin-bottom: 8px;">
             <strong>Canva:</strong> Used heavily for graphics, photo, and video editing. It allowed for rapid collaboration between myself, the intern cohort, and front office staff.
          </li>
          <li>
            <strong>Meta Business Suite:</strong> The engine for our digital presence, used to schedule content and analyze engagement data for Facebook and Instagram.
          </li> 
        </ul>
      </div> 

  <div class="card">
        <h2>Community Operations</h2>
        <p>
          Building trust required getting boots on the ground. I helped manage operational logistics that directly touched the fan experience:
        </p>
        <ul style="margin-top: 10px; padding-left: 1.2rem;">
          <li><strong>Mascot Appearances:</strong> Bringing the brand to local events like the "Super Hero Run."</li>
          [cite_start]<li><strong>Ticket Distribution:</strong> Assisting in the logistical distribution of over <strong>6,000 Berry Passes</strong> to fans[cite: 4].</li>
          <li><strong>Fan Engagement:</strong> Running between-inning games like "The Dizzy Bat Race" to keep energy high.</li>
        </ul>
      </div>

  <div class="card">
        <h2>Game Day Features</h2>
        <p>
          To ensure repeat attendance, we treated every game as a unique event. I recommended and implemented specific features to keep the schedule fresh:
        </p>
        <ul style="margin-top: 10px; padding-left: 1.2rem;">
          <li style="margin-bottom: 5px;"><strong>4th of July Hot Dog Eating Contest:</strong> Created to compensate for a lack of fireworks, turning a potential negative into a fan-favorite event.</li>
          <li><strong>Charity Raffles:</strong> Collaborated with Los Lobos Track Club to host a 50/50 raffle, donating proceeds to the Providence Cancer Institute.</li>
        </ul>
      </div>
  </div>

  <div class="card" style="padding: 1rem; display: flex; flex-direction: column; align-items: center; height: fit-content;">
    <h3 style="margin-bottom: 1rem; text-align: center;">Fan Engagement Reel</h3>
    
   <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKaoaIYBcjO/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <div style="padding:16px;"> 
        <a href="https://www.instagram.com/reel/DKaoaIYBcjO/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
          View on Instagram
        </a>
      </div>
    </blockquote>

   <a href="https://www.instagram.com/reel/DKaoaIYBcjO/" target="_blank" class="ig-button">
      Watch on Instagram &#8599;
    </a>

   <p style="font-size: 0.9rem; color: #aaa; margin-top: 1rem; text-align: center;">
      <strong>Highlight:</strong> A look at the unique game-day atmosphere we built at the ballpark.
    </p>
  </div>

</div>

<script async src="https://www.instagram.com/embed.js"></script>