---
layout: about
title: jinglab
permalink: /jinglab/
subtitle: <a href='#'>We are interested in topics related to control, optimization and machine learning for networked systems.</a>
nav: true
nav_order: 9
images:
  compare: true
  slider: true


#profile:
 # align: right     
 # image: prof_pic.jpg
 # image_circular: false # crops the image to make it circular
 # more_info: >
  #  <p>555 your office number</p>
  #  <p>123 your address street</p>
  #  <p>Your City, State 12345</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

 <!-- ## Image Slider -->

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/dexteroushand.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/localization.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
 <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/trafficnetwork.png" class="img-fluid rounded z-depth-1" %}</swiper-slide> 
  <!-- <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/12.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide> -->
</swiper-container>

<style>
  /* 设置 Swiper 容器大小 */
  swiper-container {
    width: 80%;
    height: 80%;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    swiper-container {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    swiper-container {
      height: 200px;
    }
  }
</style>


