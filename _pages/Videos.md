---
layout: page
permalink: /videos/
title: Videos
description: Videos from my channel
nav: true
nav_order: 7
---

<style>
  .video-section {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* space between items */
    justify-content: center;
    margin-top: 20px;
  }

  .video-card {
    flex: 1 1 300px; /* responsive flex-basis with grow and shrink */
    max-width: 300px;
    text-align: center;
  }

  .video-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .video-section {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<h2>Videos</h2>

<div class="video-section">
  <div class="video-card">
    <a href="https://www.youtube.com/@JamieTLens">
      <img src="https://yt3.ggpht.com/O8MjwLGwaFaP18x6U52n9YsxmLGCITh2lCD5oXli5CSA0Q34MsJosfuxwQgbSMyi-MZNQcEKnw=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="Sagoth66 Channel">
    </a>
    <p>The original channel has been going for a long time and is mostly gig videos I have filmed for local bands.</p>
  </div>

  <div class="video-card">
    <a href="https://www.youtube.com/channel/UCgR7VDoJ12cH20DskSd9CLA">
      <img src="https://yt3.ggpht.com/iyDOCnTEg-9vWW0h8wCInxS46DDn08pKW2QYcpACzZmCi0l-vMYjPcy3x1HbnpHQQikGgtFD=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="Echoes of Perception">
    </a>
    <p>The Echoes of Perception brand came about when I bought a drone and wanted to post videos without bothering musical subscribers.</p>
  </div>

  <div class="video-card">
    <a href="https://www.youtube.com/@FiveMinuteViewFromTheKop">
      <img src="https://yt3.ggpht.com/gniUfcIhxwLoufIvv11AQG_4hFKzeYUVRnLbGvPBCe2Msl4BZTWZU7_EJjQJDyvkrwoyol1OQw=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="5 Minute View From The Kop">
    </a>
    <p>The 5 Minute View From The Kop was created recently using YouTube's RSS import from Spotify to reach a wider audience.</p>
  </div>
</div>
