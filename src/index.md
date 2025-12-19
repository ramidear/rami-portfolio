---
toc: false
theme: dashboard
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

<div style="background: linear-gradient(0deg, #ffffffff 0%, #6d0c0cff 100%); padding: 4rem 2rem; border-radius: 8px; margin-bottom: 2rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
  <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">Marketing to Create and Build Relationships</h1>
  <p style="font-size: 1.5rem; color: #000000ff; max-width: 800px; margin: 0 auto;">
    An MBA Candidate at Willamette University using marketing and promotional techniques to create, develop, and sustain customer relationships. 
  </p>
</div>

<div class="grid grid-cols-3">
  <div class="card">
    <h2>Project Highlights</h2>
    <p>Some of my favorite projects across previous experiences.</p>
    <br>
    <a href="/marionberries/">Start Here →</a>
  </div>

  <div class="card">
    <h2>About Me</h2>
    <p>Co-Founder of Los Lobos Track Club; Head Cross Country Coach of Clackamas Community College; Willamette MBA '26.</p>
    <br>
    <a href="/about">Learn More →</a>
  </div>

  <div class="card">
    <h2>Contact</h2>
    <p>Please contact me here and I will follow up with you as soon as possible.</p>
    <br>
    <a href="mailto:ramiraeddear@gmail.com">Get in Touch →</a>
  </div>
</div>

<div class="card">
    <h2>Resume</h2>
    <p>Click below for a downloadable copy of my resume.</p>
    <br>
    <a href="https://drive.google.com/uc?export=download&id=1de4pRBNPEBFQ6SdV1vDhbdtK2BDojgf7">Download →</a>
  </div>
</div>