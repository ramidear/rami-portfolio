---
theme: dashboard
title: WOU Center for Professional Pathways
toc: false
---

<style>
  :root {
    --theme-background: #1a1a1a !important;
    --theme-background-alt: #262626 !important;
    --theme-foreground: #e0e0e0 !important;
    --theme-border: #404040 !important;
  }
  body { background-color: var(--theme-background); color: var(--theme-foreground); }
  .card { background-color: var(--theme-background-alt) !important; border: 1px solid var(--theme-border); color: var(--theme-foreground) !important; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); }
  h1, h2, h3, h4, h5, h6 { color: #ffffff !important; }
  p, li { line-height: 1.6; }
  
  /* CAROUSEL STYLES */
  .carousel-container { position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background-color: #222; }
  .carousel-slide { display: none; width: 100%; height: 100%; position: relative; }
  .carousel-slide.active { display: block; animation: fadeEffect 0.5s; }
  .carousel-slide img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .caption-text { color: #f2f2f2; font-size: 14px; padding: 8px 12px; position: absolute; bottom: 0; width: 100%; text-align: center; background-color: rgba(0, 0, 0, 0.8); }
  .prev, .next { cursor: pointer; position: absolute; top: 50%; margin-top: -22px; padding: 16px; color: white; font-weight: bold; font-size: 18px; transition: 0.6s ease; background-color: rgba(0,0,0,0.3); user-select: none; z-index: 2; }
  .next { right: 0; border-radius: 3px 0 0 3px; }
  .prev:hover, .next:hover { background-color: rgba(0,0,0,0.8); }
  @keyframes fadeEffect { from {opacity: .4} to {opacity: 1} }

  /* Nav Buttons */
  .nav-container { display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--theme-border); }
  .nav-button { display: inline-block; padding: 0.75rem 1.5rem; background-color: var(--theme-background-alt); border: 1px solid var(--theme-border); color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold; }
  .nav-button:hover { background-color: #333; color: #4da6ff; border-color: #4da6ff; }
</style>

<div style="margin-bottom: 2rem;">
  <h1 style="font-size: 2.5rem; line-height: 1.1; margin-bottom: 0.5rem;">WOU Center for Professional Pathways</h1>
  <h2 style="font-size: 1.5rem; color: #a0a0a0; font-weight: normal; margin-top: 0;">Incentivizing IG Follower Engagement</h2>
</div>

<div class="card" style="margin-bottom: 1rem; display: flex; flex-direction: column; justify-content: center; padding: 1rem;">
  <h2>The Objective</h2>
  <p>
    Many students were aware of the CPP but hesitant to visit. My primary goal was to <strong>demystify the office</strong>, transforming it from an intimidating administrative space into a welcoming, student-centric hub.
  </p>
</div>

<div class="card" style="margin-bottom: 1rem; padding: 0.5rem;">
  <h3 style="text-align: center; margin-bottom: 0.5rem; display: block; width: 100%;">Campaign Gallery</h3>
  
  <div class="carousel-container">
    <div class="carousel-slide active">
      <img src="woucpp1.jpg" alt="LatinX Entrepreneurship Event">
      <div class="caption-text">LatinX Entrepreneurship Workshop</div>
    </div>

    <div class="carousel-slide">
      <img src="woucpp2.jpg" alt="Athlete ProConnect">
      <div class="caption-text">Athlete ProConnect Event</div>
    </div>

    <div class="carousel-slide">
      <img src="woucpp3.jpg" alt="Gift Card Giveaway">
      <div class="caption-text">Giveaway: +20% Follower Growth</div>
    </div>

    <div class="carousel-slide">
      <img src="woucpp4.jpg" alt="Poster">
      <div class="caption-text">Event Poster Design</div>
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
</div>

<div class="grid grid-cols-2" style="gap: 1rem;">

  <div class="card">
    <h3>Humanizing the Brand</h3>
    <p>
      I prioritized content that highlighted the people behind the services. By featuring our <strong>Peer Career Advisors</strong> in fun, relatable social content, we built trust by showing students that the CPP is staffed by approachable peers.
    </p>
  </div>

  <div class="card">
    <h3>Targeted Marketing</h3>
    <p>
      I designed specific campaigns for key events to ensure diverse attendance. This included graphics for the <strong>LatinX Entrepreneurship Workshop</strong> and <strong>Athlete ProConnect</strong>, targeting specific student demographics.
    </p>
  </div>

  <div class="card">
    <h3>Incentivized Growth</h3>
    <p>
      To rapidly grow our digital footprint, I implemented <strong>gift card giveaways</strong>. This campaign was a tangible success, resulting in a <strong>20% increase in Instagram followers</strong>.
    </p>
  </div>

  <div class="card">
    <h3>Tools Used</h3>
    <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
      <li><strong>Adobe Creative Cloud & Canva:</strong> For professional-grade flyers and social graphics.</li>
      <li><strong>Meta Business Suite:</strong> For analytics and scheduling.</li>