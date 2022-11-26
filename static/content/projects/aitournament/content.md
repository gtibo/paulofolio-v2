---
title: AI Tournament
date: 2021-4
type: Video game
vignette: thumbnail.jpg
banner: medias/images/header.jpg
tags:
  - name: Platform
    value: Web browser
  - name: Genre
    value: Beat ’em up
  - name: Engine
    value: Unity 2020.3.22f1
  - name: Team size
    value: 1
  - name: Duration
    value: 3 weeks
  - name: Tasks
    value: Machine learning
overview: "A short and fun experimentation about machine learning in Unity using ML-Agents toolkit. I trained an AI to manipulate a ragdoll and walk. It then confronts the player through a sword fight and although it isn't a really challenging enemy for now, the project made me want to dig more in the perspective of developing AI for game development."
---

!medias/videos/aitournament_trailer.mp4
  vignette: medias/images/vignette_aitournament_01.jpg
  legend: Trailer of the game.

## Concept build-up

This workshop was intended for us to explore the possibilities of machine learning inside Unity. The ML-Agents toolkit offers an accessible interface and documentation to train your own models. We had total freedom on how we could approach the tool. One of the toolkit’s demo presented a model able to walk with a rigged character from point A to point B. I found it very interesting and challenging as well so I decided to look more into this.

!medias/images/aitournament_01.jpg
  legend : ML-Agents is a super handy toolkit for machine learning in Unity.
  alt: ML-Agents main webpage

## Machine learning

The first step of the project was to train my own character. For the sake of time, I downloaded a 3D model already rigged on the internet. I then imported the model into Unity where I had to set up colliders for each character’s limb and specify to the neural network which bone he could use and what was their angle constraint.

!medias/images/aitournament_02.jpg
  legend : The knight model with colliders set up and ready for training.
  alt: 3D model of a knight with colliders for each limb

After setting up the character bones, I had to set some rules for the neural network to train and improve. His goal was to walk from point A to point B without falling. He will get a penalty for falling and a reward for each step he makes and if he reaches point B. Those penalties and rewards are points which are subtracted or added to a total named “cumulative reward”, ranging from 0 to 100.
You can follow those statistics through TensorBoard and detect if the training doesn’t improve over time.

!medias/videos/aitournament_03.mp4
  vignette: medias/images/vignette_aitournament_02.jpg
  legend : Knights training to walk towards a target.

!medias/images/aitournament_04.jpg
  legend : TensorBoard provides metrics visualization for machine learning.
  alt: TensorBoard metrics of a model training

After roughly 24 hours of non-stop training, the character was roughly able to walk (his goofy moves drifted into a funny feature in the end). I then attached a sword to his hand and made him swing it erratically at the player.
On the other end, the player is dropped inside the arena with multiple characters to fight. For each takedown, he earns a point and if he gets hit, he loses one.

!medias/images/aitournament_05.jpg
  legend : In-game capture of the player about to fight the knights.
  alt: In-game capture of knights walking towards the player
