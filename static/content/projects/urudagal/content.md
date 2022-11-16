---
title: Uru Dagal
date: 2021-6
type: Video game
vignette: thumbnail.jpg
banner: medias/images/header.jpg
tags:
  - name: Platform
    value: Oculus Quest
  - name: Genre
    value: First person adventure
  - name: Engine
    value: Unity 2020.3.22f1
  - name: Team size
    value: 1
  - name: Duration
    value: 3 months
  - name: Tasks
    value: Level design, Game design, Programming
overview: "Uru Dagal is a VR game prototype I made with Unity and Blender for the Oculus Quest during my first year of Master. It was ordered for an exhibition at the Cité des métiers about 'The city of tomorrow' and was also displayed at the Geneva's Design Days 2021. The game consists of a short journey through a vast abandoned city, mostly inspired by the visuals of Tsutomu Nihei's comics BLAME! and Piranesi's Prisons. As you solve puzzles to progress and explore, you discover the city's past and contemplate its architecture."
---

!medias/videos/urudagal_trailer.mp4
  legend: Trailer of the game.

## Concept build-up

The concept for this game emerged from a school workshop organised in collaboration with Geneva’s Cité des métiers. The goal was to produce VR games for their exhibition entitled “The city of tomorrow”. We had total freedom about the approach of the subject. At the time, I had just finished reading Tsutomu Nihei’s series BLAME! and was really fascinated by his dystopian sci-fi scenario of an endless cyber-city. The obscure narrative explanations only raised questions and filled my curiosity.
I wanted to create a similar experience where you play as the character wandering inside huge buildings, trying to understand what is this place and what is going on. I felt the virtual reality headset would mix perfectly with this idea.

!medias/images/urudagal_01.svg
  legend : Research sketches and inspirations for the narrative.
  alt: Research sketches

!medias/images/urudagal_02.jpg
  legend : Drawing from BLAME! manga displaying monumental buildings.
  alt: Drawing of a bridge crossing a huge artificial rift

## Level design and modelling

Just before the beginning of this project, I came across the technical demo of a developer showcasing a procedurally generated city using a Wave Function Collapse algorithm. I was really impressed by the potential of the tool and how it could fit in my project, giving the eerie sense of being trapped in a constantly growing city.

!medias/videos/urudagal_03.mp4
  legend : Infinite procedurally generated city in Unity by marian519

I gave myself 3 weeks to understand the theory and integrate this tool to my game. It was sort of a personal challenge, I wanted to learn more about algorithmic and C# language. I also thought that it could be really interesting to take this approach on level design. In the end, while I was able to integrate some aspects of the algorithm, it would have taken too long to adapt. I gave up on the idea and started to design by hand a small map for the game. It was still a great inspiration and this idea still lives in my head today for another project.

!medias/images/urudagal_04.jpg
  legend : My architectural blocks in Blender, ready to get assembled.
  alt: Screenshot of a 3D scene with blocks

I was still on time with the schedule because I modelled every block I needed to build my map beforehand. This was kind of a modular level design methodology. I did some sketches to shape the path of the player and where to put the puzzles but it was really an intuitive and efficient way. The most important aspect was impressing the player with breathtaking scenery.

!medias/images/urudagal_05.jpg
  legend : Unshaded and wireframed game scene modelled in Blender.
  alt: 3D scene of bridges crossing a bottomless rift

!medias/images/urudagal_06.jpg
  legend : Another game scene in Blender, before integration in Unity.
  alt: 3D scene of a room with multiple pillars and spotlights

!medias/images/urudagal_07.svg
  legend : Map of the game with the puzzle interactions highlighted.
  alt: Map of the game

Once everything was imported to Unity, it was time to set up direct and indirect lighting. Because I was going to import the game on a portable console like the Oculus Quest 1, I knew I was limited in terms of performance. That is why almost all lights are pre-rendered and baked to the UV map. This took some time to tune but it eventually won me a lot of performance rendering.

!medias/images/urudagal_08.jpg
  legend : Visual of the game in Unity with textures and baked lighting.
  alt: Screenshot of the game in Unity

!medias/images/urudagal_09.jpg
  legend : The end of the demo leaves the player facing this huge tower.
  alt: Screenshot of the game in Unity

## Game design

Throughout the game, the player will encounter terminals which act as audio logs for the narrative. The character who recorded the message is unknown but begs you to help him and save the city. He also gives clues if the player gets stuck.

!medias/images/urudagal_10.jpg
  legend : In-game capture of a player listening to a terminal.
  alt: In-game capture of a terminal

I didn’t want complex or long puzzles for this demo, knowing that it would be exhibited for anyone to play. It needed to be approximately under ten minutes of gameplay.
The first puzzle consists of activating the good combination of levers to unlock a door. In retrospect, the scripting I did for this was a bit tedious, there are plenty of other ways to do it but it did the job very well back then.

!medias/images/urudagal_11.svg
  legend : The lever combination can be found by listening to one of the terminals.
  alt: Diagram explaining a puzzle

The second puzzle consists of finding a battery to supply a generator and open a door. It is the final puzzle of the demo. This is not a particularly complex puzzle but through playtesting with several players, I saw quite a lot of people missing the battery just hidden around the corner. I also spent some time working with Unity’s VFX shader system on the visual feedback when the power is put back on.

!medias/images/urudagal_12.jpg
  legend : In-game capture of a player putting the battery back in the generator.
  alt: In-game capture of a power generator
