---
title: Handsfree.js

image: https://i.imgur.com/vL0EmoR.jpg
description: Handsfree.js is a thin wrapper around popular computer vision models for the purpose of interacting with pages handsfree. Come learn how to get started 👋
---

<div class="columns">
  <div class="column text-center">
    <Logo :styles='"width: 200px"' />
    <h1>Handsfree.js</h1>
    <p>
      <a href="https://github.com/handsfreejs/handsfree" class="mr-2"><img class="mr-1" src="https://img.shields.io/github/last-commit/handsfreejs/handsfree.svg"></a>
      <a href="https://github.com/handsfreejs/handsfree"><img class="mr-1" src="https://img.shields.io/github/stars/handsfreejs/handsfree?style=social"></a>
    </p>
    <p class="text-left">A wrapper library around computer vision models for the purpose of interacting with the web handsfree. <b>Works with Chrome and Firefox!</b></p>
    <p><small>Powered by:</small></p>
    <p>
      <a class="mr-3" href="https://github.com/jeeliz/jeelizWeboji">
        <img src="https://jeeliz.com/wp-content/uploads/2018/01/LOGO_JEELIZ_BLUE.png" height=30>
      </a>
      <a href="https://github.com/tensorflow/tfjs-models/">
        <img src="https://i.imgur.com/KqlnNuA.png" height=30>
      </a>
    </p>
  </div>
  <div class="column">
    <iframe style="margin-top: 40px; max-width: 100%" width="480" height="240" src="https://www.youtube.com/embed/ty081LCcYpc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>
      <small>With support from the <a href="https://www.cmu.edu/cfa/studio/index.html">STUDIO for Creative Inquiry</a>, <a href="https://glitch.com/@handsfreejs">Glitch.com</a>, the <a href="https://youtu.be/CJDpF4xUieY?t=58">School of AI</a>, and <a href="https://patreon.com/heyozramos">you</a>!</small>
    </p>
  </div>
</div>

---

## Quickstart

<!-- prettier-ignore-start -->
```html
<!DOCTYPE html>
<head>
  <!-- Require dependencies -->
  <script src="https://unpkg.com/handsfree@6.1.4/dist/handsfree.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/handsfree@6.1.4/dist/handsfree.css">
</head>
<body>
  <script>
    // Create a new instance. Use one instance for each camera
    const handsfree = new Handsfree({})

    // Create a plugin that console logs whenever you wink with your right eye
    Handsfree.use('consoleLogger', ({ head }) => {
      if (head.state.eyeRightClosed) {
        console.log('😉')
      }
    })

    // Start tracking
    handsfree.start()
  </script>
</body>
```
<!-- prettier-ignore-end -->

---

## Tutorials

<div class="columns">
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Wrote an introduction post to Handsfree.js on <a href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">@ThePracticalDev</a> : <a href="https://t.co/V7ecyaBtIJ">https://t.co/V7ecyaBtIJ</a><br><br>It (hopefully 😅) has everything you need to get started on adding &quot;face pointers&quot; or face controlled interactions to your apps and web pages, plus a quick roadmap of what&#39;s to come!</p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1192666398868164608?ref_src=twsrc%5Etfw">November 8, 2019</a></blockquote>
  </div>
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Added a more exciting 360 video so that you can really check out the handsfree controls: <a href="https://t.co/Lmbv5sTIJl">https://t.co/Lmbv5sTIJl</a><br><br>Also wrote a step-by-step tutorial on how to set this demo up with Handsfree.js: <a href="https://t.co/SDXOrpuncb">https://t.co/SDXOrpuncb</a><br><br>Day 6 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/cJkAP0CtWd">pic.twitter.com/cJkAP0CtWd</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1193377112100503552?ref_src=twsrc%5Etfw">November 10, 2019</a></blockquote>
  </div>
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Finished the Face Emoji tutorial! This tutorial explores face morphs and activations to puppeteer 17 different emojis.<br><br>Tutorial: <a href="https://t.co/00gWBwJxrC">https://t.co/00gWBwJxrC</a><br>Demo: <a href="https://t.co/FUiLX0igsp">https://t.co/FUiLX0igsp</a><br><br>Day 8 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/RmgoayXulB">pic.twitter.com/RmgoayXulB</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1194480061761519616?ref_src=twsrc%5Etfw">November 13, 2019</a></blockquote>
  </div>
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">In this tutorial, we explore face painting with P5.js! Here&#39;s my attempt at a barn with chickens and trees 🏠🌳🌞<br><br>Tutorial: <a href="https://t.co/FhgzPovWeq">https://t.co/FhgzPovWeq</a><br>Demo: <a href="https://t.co/qV0aEcdNRL">https://t.co/qV0aEcdNRL</a><br><br>Day 2 of <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> and <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> <a href="https://t.co/XizZRB1162">pic.twitter.com/XizZRB1162</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1201337876933496832?ref_src=twsrc%5Etfw">December 2, 2019</a></blockquote>
  </div>
</div>

---

## Experiments

<div class="columns">
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">What Oz is building on Glitch these days is just mind-bending. So cool, and I can’t wait to see what people remix this into! <a href="https://t.co/h3iz5h0L1c">https://t.co/h3iz5h0L1c</a></p>&mdash; Anil Dash 🥭 (@anildash) <a href="https://twitter.com/anildash/status/1208417855852679168?ref_src=twsrc%5Etfw">December 21, 2019</a></blockquote>
  </div>
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">What if you could control your desktop with your face?<br><br>In this experiment I play Candy Crush handsfree by moving my mouse with my head and smirk to click. This uses Robot.js to control the desktop mouse. Code <br>+ tutorial soon!<br><br>Day 11 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/FVZ2IQRAwz">pic.twitter.com/FVZ2IQRAwz</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1197722565646540800?ref_src=twsrc%5Etfw">November 22, 2019</a></blockquote>
  </div>
  <div class="column">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">More experiments with <a href="https://twitter.com/hashtag/TensorFlow?src=hash&amp;ref_src=twsrc%5Etfw">#TensorFlow</a> <a href="https://twitter.com/hashtag/BodyPix?src=hash&amp;ref_src=twsrc%5Etfw">#BodyPix</a>, this time I made a 90&#39;s TV color blast effect!<br><br>Demo: <a href="https://t.co/TrIfkSXNrc">https://t.co/TrIfkSXNrc</a><a href="https://twitter.com/glitch?ref_src=twsrc%5Etfw">@Glitch</a> Source: <a href="https://t.co/0zFHlzB0nJ">https://t.co/0zFHlzB0nJ</a> <a href="https://t.co/2JN38FkVbv">pic.twitter.com/2JN38FkVbv</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1209204747254681602?ref_src=twsrc%5Etfw">December 23, 2019</a></blockquote>
  </div>
</div>

---

<div class="card">
  <h2>📅 More coming soon</h2>
  <p>We're still just getting this site started, so check back soon! In the meantime, here are some links you might like:</p>
  <ul>
    <li><a href="https://dev.to/heyozramos/handsfree-js-a-web-based-face-pointer-24m1">Tutorials with examples</a> on Dev.to</li>
    <li>This project's <a href="https://github.com/handsfreejs/handsfree">GitHub repo</a></li>
    <li>My <a href="https://twitter.com/heyozramos">Twitter @HeyOzRamos</a></li>
    <li>My <a href="https://patreon.com/heyozramos">Patreon @HeyOzRamos</a></li>
  </ul>
</div>

<TweetLoader />
