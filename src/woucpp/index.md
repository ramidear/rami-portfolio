---
theme: dashboard
title: WOU Center for Professional Pathways
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
    WOU Center for Professional Pathways: Incentivizing IG Follower Engagement
  </h1>

  <p style="font-size: 1.15rem; line-height: 1.6; max-width: none;">
    In the 2023-24 academic year, I served as the Marketing Intern for the Western Oregon University Center for Professional Pathways. When I came on board, I identified that many students were aware of the CPP, but were hesitant to come in for a plethora of reasons. To get more students to come into the office and ask for career help required gaining their trust with our staff, so my social media strategy incorporated <strong>pushing content highlighted the office and the Peer Career Advisors in a fun manner</strong> while remaining an <strong>informative hub to learn about the CPP's events and services</strong>.
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
    <img src="woucpp1.jpg" alt="LatinX Entrepreneurship Event">
    <div class="caption-text">Photo from a WOU CPP LatinX Entrepreneurship Workshop</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp2.jpg" alt="Picture from our Athlete ProConnect">
    <div class="caption-text">"Photo from the WOU CPP Athlete ProConnect Event</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp3.jpg" alt="Gift Card Giveaway">
    <div class="caption-text">Graphic advertising a promotional gift card giveaway to incentivize IG followers</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp4.jpg" alt="Graphic Poster for Athlete ProConnect">
    <div class="caption-text">Graphic poster/advertisement for the Athlete ProConnect</div>
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
    <p style="max-width: none;">
      My primary objective was to lower the barrier to entry for students seeking career advice. I focused on a strategy that <strong>demystified the CPP office</strong>, transforming it from an intimidating space into a welcoming, student-centric hub. The execution of this strategy involved a mix of content pillars:
    </p>
    <ul style="max-width: none; margin-top: 10px;">
      <li>
        <strong>Humanizing the Brand:</strong> To overcome student hesitation, I prioritized content that highlighted the people behind the services. By featuring our <strong>Peer Career Advisors</strong> in fun, relatable social content, we were able to build trust with the student body, showing them that the CPP is staffed by approachable peers ready to help, rather than just administrators.
      </li>
      <li>
        <strong>Targeted Event Marketing:</strong> I developed specific promotional campaigns for key events to ensure diverse student attendance. This included designing graphics and messaging for specialized workshops like the <strong>LatinX Entrepreneurship Workshop</strong> and the <strong>Athlete ProConnect</strong>, ensuring these opportunities reached their specific target demographics effectively.
      </li>
      <li>
        <strong>Incentivized Engagement:</strong> To rapidly grow our digital footprint, I implemented promotional strategies such as a <strong>gift card giveaway</strong>. This campaign was a tangible success, directly resulting in a <strong>20% increase in Instagram followers</strong>. These efforts served a dual purpose: boosting our metrics and getting WOU students to follow the CPP's socials to stay up-to-date about its career events and services.
      </li>
    </ul>
  </div> 

  <div class="card"> 
    <h2>Tools Used</h2> 
    <ul style="max-width: none;"> 
      <li>
         <strong>Creative Design:</strong> I utilized <strong>Adobe Creative Cloud</strong> and <strong>Canva</strong> to design clean looking flyers, social media graphics, and digital signage that aligned with WOU and WOU CPP branding while appealing to a Gen Z audience.
      </li>
      <li style="margin-top: 10px;">
        <strong>Social Management:</strong> <strong>Meta Business Suite</strong> was essential for scheduling posts across Instagram and Facebook, analyzing engagement data, and managing our digital community efficiently.
      </li> 
      <li style="margin-top: 10px;">
        <strong>Collaboration:</strong> <strong>Google Suite</strong> facilitated seamless collaboration with the CPP staff and Peer Career Advisors to coordinate event calendars and approval workflows.
      </li>
    </ul>
  </div> 

</div>