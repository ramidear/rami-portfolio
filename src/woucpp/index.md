---
theme: dashboard
title: WOU Center for Professional Pathways
toc: false
---

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
    <div class="caption-text">"Pizza in Your Seatza" Photo Credit: Sauce Studio and Design</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp2.jpg" alt="Picture from our Athlete ProConnect">
    <div class="caption-text">"Dizzy Bat Race" Photo Credit: Sauce Studio and Design</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp3.jpg" alt="Gift Card Giveaway">
    <div class="caption-text">Dressing as Leroy the on-field MC, for "Trick or Treat Night"</div>
  </div>

  <div class="carousel-slide">
    <img src="woucpp4.jpg" alt="Graphic Poster for Athlete ProConnect">
    <div class="caption-text">Our 4th of July Hot Dog Eating Contest</div>
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

<div class="grid grid-rows-2"> 
  
  <div class="card"> 
    <h2>Strategy</h2> 
    <p style="max-width: none;">During this internship, I internalized the strategy and philosphies set by the Marion Berries front office, which was to <strong>positively impact the City of Salem and its residents</strong> by offering affordable family fun which leaves them with memories to last them a lifetime. The execution of this strategy involved a mix of activities, such as:
    </p>
    <ul style="max-width: none; margin-top: 10px;">
      <li>
        <strong>Community Engagement:</strong> One way that our team engaged the Salem community was by bringing the team mascot and promotional items to community events, such as the local "Super Hero Run". Another way we engaged the community was by getting fans involved in our between-inning entertainment. Many parents and their kids were very excited to be selected for our between-inning games, like "The Dizzy Bat Race", and these long-lasting memories will leave a positive impression when they think about the Marion Berries brand.
      </li>
      <li>
        <strong>Unique Game Day Features:</strong> Making each game day unique from the last was a challenge, but absolutely necessary to make sure that the fans had something fresh to look forward to at every home game. Examples of unique game day features that I recommended and implemented include a 4th of July Hot Dog Eating Contest (to make up for our lack of fireworks) and a 50/50 fundraising raffle, where 50% of the proceeds were donated to the Providence Cancer Institute in collaboration with Los Lobos Track Club.
      </li>
      <li>
        <strong>Social Media:</strong> As a new baseball team in this market, we made it a priority to build trust with our followers, which included fans, (prospective) players, sponsors, and the colleges which send their athletes to the Berries to play summer ball. My intern cohort made a wide range of content for the Berries' socials, including game day posts; reels to highlight special upcoming promotions; and specific reels for our local partners.
      </li>
    </ul>
  </div> 

  <div class="card"> 
    <h2>Tools Used</h2> 
    <ul style="max-width: none;"> 
      <li>
         <strong>Creative:</strong> <strong>Canva</strong> was used heavily for graphics, photo, and video editing, as it was easy to collaborate on between myself, my intern cohort, and other front office staff.
      </li>
      <li style="margin-top: 10px;">
        <strong>Execution:</strong> <strong>Meta Business Suite (Facebook/Instagram)</strong> was used to schedule and send out a strong majority of our social media content.
      </li> 
    </ul>
  </div> 

</div>

</div>