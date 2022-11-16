---
title: Flap your wings
date: 2020-12
type: Video game
vignette: thumbnail.jpg
banner: medias/images/header.jpg
tags:
  - name: Platform
    value: Web browser
  - name: Genre
    value: Arcade
  - name: Engine
    value: Javascript library
  - name: Team size
    value: 1
  - name: Duration
    value: 2 months
  - name: Tasks
    value: Game design, Programming
overview: "This arcade game is the outcome of a workshop around p5.js and its libraries. You play as an eagle flying through a forest and must use body movement to keep flying and avoid trees along the way. It was an interesting concept and prototype to work with and explore ml5.js for machine learning and p5.play for simple Javascript game engine."
---

!medias/videos/flapyourwings_trailer.mp4
  legend: Trailer of the game.

## Concept build-up

At first, the workshop was a way for us to explore all the possibilities covered by Javascript. We used the p5.js library which includes a lot of sub-libraries for game programming, generative art, sound, etc. With all these tools in hand, one of my first thoughts was to combine body movements and gameplay mechanics. After some research, I found out that I could use the computer webcam to capture the player’s movement and use it as a controller through machine learning.
Then, I imagined a small arcade game where you would play as a bird flying through a forest. The player would literally have to imitate the bird to avoid the trees and keep flying.

!medias/images/flapyourwings_01.jpg
  legend : ml5.js is a super handy library to explore and learn machine learning.
  alt: ml5.js main webpage

## Game design and Programming

Designing the mechanics for the game was a pretty simple step. While flying, you can only move downwards, upwards, left and right by moving your body in a certain way. The goal is the same as endless runner games, you have to fly for the longest time to earn points.
While it seems like a simpler knockoff of Flappy Bird, the difficult part of the game is that it gets exhausting the longer you play. After playtesting it with several people, this revealed also super fun to watch as a spectator and it enhanced the experience.

!medias/images/flapyourwings_02.jpg
  legend : In-game capture of the player flying above trees.
  alt: In-game capture of the eagle flying above trees

I decided to go with a simple pixel-art style to gain some time on asset creation. I used Aseprite to create frame by frame animation of the eagle, the trees and background elements. This art style also made collision detection easier to implement in code.

!medias/images/flapyourwings_03.jpg
  legend : All the assets sprites for my game.
  alt: Sprites layout

The hardest part of the project was to train a machine learning model to detect the inputs of the player’s movements. The ml5.js library comes with a lot of documentation but as a newcomer in the machine learning technology, it is impressive to work with. I eventually managed to set up my own set of gestures to control the eagle.
It was a resource-intensive process as it needed the model to constantly run in the game’s background, which I’m sure could be improved now, but it was still a really good experience to learn from.

!medias/images/flapyourwings_04.svg
  legend : All the gestures necessary to fly and handle the eagle.
  alt: Layout of gestures with body detection
