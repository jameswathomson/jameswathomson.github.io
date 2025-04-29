---
layout: page
permalink: /Podcast/
title: Podcasts
nav: true
nav_order: 5
description: This page contains an RSS updated feed of my audio podcasts
toc:
  sidebar: left
---
<script>
async function fetchPodcastEpisodes() {
    const rssFeedUrl = "https://anchor.fm/s/f9faf04c/podcast/rss";
    const response = await fetch(rssFeedUrl);
    const text = await response.text();
    
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    
    let episodesHtml = "";
    xml.querySelectorAll("item").forEach(episode => {
        const title = episode.querySelector("title").textContent;
        const description = episode.querySelector("description").textContent;
        const audioUrl = episode.querySelector("enclosure").getAttribute("url");
        const imageUrl = episode.querySelector("itunes\\:image")?.getAttribute("href") || "default-image.jpg"; // Fallback image

        episodesHtml += `
            <div>
                <h3>${title}</h3>
                <img src="${imageUrl}" alt="Episode Cover" style="max-width:100%; height:auto;">
                <h5>${description}</h5>
                <audio controls>
                    <source src="${audioUrl}" type="audio/mpeg">
                </audio>
            </div>
        `;
    });

    document.getElementById("podcast-container").innerHTML = episodesHtml;
}

fetchPodcastEpisodes();
</script>

<div id="podcast-container">Loading episodes...</div>
