---
layout: Page
permalink: /videos/
title: Videos
description: Videos from my channel 'Echoes of Perception'
nav: true
nav_order: 7
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/rss-parser/3.12.0/rss-parser.min.js"></script>
<script>
async function fetchYouTubeVideos() {
    const rssFeedUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=UCgR7VDoJ12cH20DskSd9CLA";
    const parser = new RSSParser();

    try {
        const feed = await parser.parseURL(rssFeedUrl);
        let videosHtml = "";

        feed.items.forEach(video => {
            const videoId = video.link.split("v=")[1]; // Extract video ID from URL
            videosHtml += `
                <div style="margin-bottom: 20px;">
                    <h3>${video.title}</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        });

        document.getElementById("video-container").innerHTML = videosHtml;
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        document.getElementById("video-container").innerHTML = "<p>Error loading videos. Try again later.</p>";
    }
}

fetchYouTubeVideos();
</script>

<div id="video-container"></div>