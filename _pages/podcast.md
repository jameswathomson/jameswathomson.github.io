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

        // Check for different image tags
        const imageUrl = episode.querySelector("media\\:thumbnail")?.getAttribute("url") ||
                         episode.querySelector("image")?.textContent ||
                         "default-image.jpg"; // Fallback image

        episodesHtml += `
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${imageUrl}" alt="Episode Cover" style="width: 120px; height: auto;">
                <div>
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <audio controls>
                        <source src="${audioUrl}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        `;
    });

    document.getElementById("podcast-container").innerHTML = episodesHtml;
}

fetchPodcastEpisodes();
</script>

<div id="podcast-container">Loading episodes...</div>