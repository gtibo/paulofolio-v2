---
title: Astray
date: 2022-6
type: Video Game
vignette: thumbnail.jpg
banner: medias/images/header.jpg
tags:
  - name: Platform
    value: Windows, Linux and MacOS
  - name: Genre
    value: First person narrative
  - name: Engine
    value: Godot 3.3
  - name: Team size
    value: 1
  - name: Duration
    value: 5 months
  - name: Tasks
    value: Narrative design, Game design, Scrum framework, Programming
overview: "Inspired by today’s companies planning to expand their activities into space, Astray develops a short speculative story where you share the struggles of one employee coping with solitude and delusion.
You play as Vilmaya Lova, one of many carriers working for one of these large companies for many years. Stuck in a lonely routine and after spending over a year away from Earth and your loved ones, you receive a distress signal from another ship nearby. Uncanny phenomenons start to occur as you arrive to help. The crew seems to have disappeared. Can you solve this mystery and find the crewmembers ?"
---

!medias/videos/astray_trailer.mp4
  legend: Trailer of the game

## Concept build-up

The concept for this game emerged out of a week of research and brainstorming for the graduate project. I wanted to create something where I could focus my skills on developing an immersive narrative and an environment for the player to wander. I knew I was limited, being alone on the project so I wanted to keep this singleplayer with no NPCs. The story unveils through the player character’s speech or logs. I had a few scenarios in my mind, all exploring isolated or abandoned places.

!medias/images/astray_01.svg
  legend : Research sketches and inspirations for the narrative.
  alt: Research sketches

The narrative for this game mostly came from the interest I have in science-fiction pieces and space exploration. For a long time, I wanted to tell a story that would convey the emotion of being stranded alone in space. The tagline of the iconic Ridley Scott’s Alien: “In space, no one can hear you scream.” was one of the main inspirations. No need for a monster to chase you though, there was a dormant terror as the environment of space was dark and hostile.

!medias/images/astray_02.jpg
  legend: Ellen Ripley searching for the xenomorph in the movie Alien.
  alt: Movie capture from Alien by Ridley Scott

## Writing and narrative design

Apart from Ridley Scott’s Alien, there were historic sources that inspired me to write this narrative. The most important one were the rumours of “Lost Cosmonauts” during the Cold War’s space race. Some say that the USSR unsuccessful moon program did send cosmonauts but couldn’t retrieve them and were ultimately lost in space.
Folkloric stories like the Flying Dutchman were also an inspiration. I wanted the player to be confronted to this same atmosphere of mystery and paranormal.

!medias/images/astray_03.jpg
  legend : Vilmaya’s spaceship drifting near Neptune.
  alt: Drawing of a spaceship adrift with a blue gas planet in the background

!medias/images/astray_04.jpg
  legend : Holographic map inside Vilmaya’s spaceship.
  alt: Drawing of a green holographic map with planets floating

!medias/images/astray_05.jpg
  legend : A mysterious radio signal has been detected by Vilmaya’s spaceship.
  alt: Drawing of a computer screen blinking red

The story flow had to be direct and efficient in order to meet with the project’s technical limitations, while providing the character's past so that the player felt involved in the narrative. That’s why I decided to split the game into two distinct parts. The first part required less development time and recounts the routine and worries of Vilmaya Lova, the main character, through her logbook and cutscenes.

!medias/images/astray_06.jpg
  legend : Entry 401 of Vilmaya’s logbook since she left Earth’s orbit.
  alt: A blue computer screen with a logbook entry displayed

The second part switches to the first-person narrative point of view and Vilmaya’s reaction to immediate events. This is where I had to collaborate with a professional voiceover actress to convey emotions and create suspenseful and tense moments. This was a really fulfilling work experience as I had to produce a very detailed script for the actress to work with.

!medias/images/astray_07.svg
  legend : The script I wrote for the voice-over actress.
  alt: Script for voice-over acting

Overall, the narrative was designed to propose a balance between exposition and interaction, making the experience a mix between an interactive novel and an adventure game. First, it sets a context, a character and then introduces action and suspense. Unfortunately, I wanted the final demo to be a bit longer but it had to be cut short due to a limited amount of time and still a lot of game assets to produce. I will explain more of that in the game design/production part.

## Game design and programming

My first priority was to set up a good project management framework, using scrum methods like reverse planning and goals. This helped me a lot before and during development to figure out which parts were too ambitious.

!medias/images/astray_08.svg
  legend : The reverse planning I set up to organise the production’s priorities.
  alt: Reverse planning for game development

The character controls are simple, Vilmaya Lova can only walk and use her flashlight attached to her semi-flexible pressurised suit. The controls have been set up for keyboard and controller.

!medias/images/astray_09.svg
  legend : The game is playable both on mouse/keyboard and controller.
  alt: Game controls layout for controller and mouse/keyboard

The initial scope of the game and the gameplay mechanics were modified several times to respect the planning and time limit. At first, it integrated space travel between multiple destinations in a planetary system. This had to be toned down to one destination for the final demo but the travel system was still developed to accommodate as many as possible. It is accessible through an holographic map in the player’s spaceship. The maps are split into different sectors containing different locations.

!medias/videos/astray_10.mp4
  legend : In-game video capture of the player using the travel system.

!medias/images/astray_11.svg
  legend : Design of the travel system and hierarchy of scenes.
  alt: Diagram explaining the design of the travel system

Another part removed from the demo was the exploration of an abandoned ship where the player would encounter two swarms of boid-like NPCs. Those would serve as puzzle elements to the game and also fit with the sci-fi/supernatural narrative. The first one acts neutral to the player, emits small electrical bursts and is attracted by his flashlight. It was designed as a small puzzle interaction where the player would need to lead them into a busted door panel in order to create a short-circuit and open it.

!medias/videos/astray_12.mp4
  legend : In-game video capture of the boid following the player’s flashlight.

!medias/images/astray_13.svg
  legend : Diagram of the boid comportment and logic.
  alt: Diagram explaining the boid comportment

The second one is hostile to the player and will chase it whenever it is looked at. If it gets too close, the player will faint and wake up after a small cutscene. It doesn’t specifically reward the player to avoid it but it adds more tension and danger to the scene with a stealth mechanic. The inspiration for this idea was taken from the episode Flesh and Stone of the Doctor Who television series.

!medias/videos/astray_14.mp4
  legend : In-game video capture of the boid rushing towards the player.

!medias/images/astray_15.jpg
  legend : The weeping angels depicted in the Dr Who television series.
  alt: Stone statues of angels with menacing poses

## Level design

I designed and modelled two levels for the game, using Blender. The first one is Vilmaya’s carrier ship which is a narrow and industrial spaceship. It was mostly inspired by the Nostromo from Alien: the 8th Passenger.

!medias/images/astray_16.svg
  legend : Map of Vilmaya’s spaceship.
  alt: Map of a small industrial spaceship

!medias/images/astray_17.jpg
  legend : In-game capture of the hallway inside Vilmaya’s spaceship.
  alt: In-game capture of a hallway inside a spaceship

The second one is the abandoned spaceship which the player explores after receiving a distress signal. It was supposed to be a mining/scientific spaceship but wasn’t completed before the term because of its larger size and the elements left to model.

!medias/images/astray_18.svg
  legend : Map of the abandoned spaceship which Vilmaya explores.
  alt: Map of a big industrial spaceship

!medias/images/astray_19.jpg
  legend : In-game capture of a dark hallway inside the abandoned spaceship.
  alt: In-game capture of a dark reddish hallway inside a spaceship
