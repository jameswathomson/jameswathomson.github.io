---
layout: Page
permalink: /videos/
title: Videos
description: Videos from my channel 'Echoes of Perception'
nav: true
nav_order: 7
---

<script>
async function fetchYouTubeFeed() {
    const rssFeedUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=UCgR7VDoJ12cH20DskSd9CLA";

    try {
        const response = await fetch(rssFeedUrl);
        const text = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        let episodesHtml = "";
        xml.querySelectorAll("entry").forEach(episode => {
            const title = episode.querySelector("title").textContent;
            const videoUrl = episode.querySelector("link").getAttribute("href");

            // Extracting the thumbnail
            const thumbnailTag = episode.getElementsByTagName("media:thumbnail")[0];
            const imageUrl = thumbnailTag ? thumbnailTag.getAttribute("url") : "/assets/img/default-image.jpg"; 

            episodesHtml += `
                <div style="display: flex; align-items: flex-start; gap: 15px;">
                    <img src="${imageUrl}" alt="Thumbnail" style="width: 120px; height: auto;">
                    <div>
                        <h3 style="margin: 0; font-size: 1.2em;"><a href="${videoUrl}" target="_blank">${title}</a></h3>
                    </div>
                </div>
                <hr style="border: none; height: 2px; background-color: #ccc; margin: 20px 0;">
            `;
        });

        document.getElementById("video-container").innerHTML = episodesHtml;
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        document.getElementById("video-container").innerHTML = "<p>Error loading videos. Try again later.</p>";
    }
}

// Call the function to fetch the feed
fetchYouTubeFeed();
</script>

<div id="video-container"></div>

