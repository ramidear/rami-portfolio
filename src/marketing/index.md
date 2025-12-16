---
theme: dashboard
title: Marion Berries Campaign Analysis
toc: false
---

# ⚾ Marion Berries: Promotional ROI Analysis
During my internship, I helped distribute over **6,000 Berry Passes**. This dashboard analyzes which promotional channels drove the highest engagement.

```js
const data = FileAttachment("../data/marion-berries.csv").csv({typed: true});
<div class="grid grid-cols-1"> <div class="card"> <h3>Impact of Promotional Channels on Pass Distribution</h3>


${Resize((width) => Plot.plot({ width, height: 400, marginLeft: 50, grid: true, color: {legend: true, domain: ["Social", "In-Game", "Radio"]}, marks: [ Plot.barY(data, { x: "date", y: "passes_distributed", fill: "channel", tip: true }), Plot.ruleY([0]) ] }))} </div> </div>

<div class="grid grid-cols-2"> <div class="card"> <h2>Strategy</h2> <p>My role involved designing <strong>Instagram Reels</strong> and writing <strong>Radio Ad Scripts</strong>. The data suggests that <em>In-Game Events</em> and <em>Social Media</em> outperformed traditional Radio spots.</p> </div> <div class="card"> <h2>Tools Used</h2> <ul> <li><strong>Data Analysis:</strong> JASP & Tableau</li> <li><strong>Creative:</strong> Adobe CC & Canva</li> <li><strong>Execution:</strong> Meta Business Suite</li> </ul> </div> </div>