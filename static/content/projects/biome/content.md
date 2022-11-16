---
title: Biome
type: Interactive experience
vignette: thumbnail.jpg
banner: medias/images/header.jpg
tags:
  - name: Platform
    value: Computer
  - name: Genre
    value: Interactive experience
  - name: Engine
    value: Godot and ESP32
  - name: Team size
    value: 4
  - name: Duration
    value: 1 week
  - name: Tasks
    value: Microcontroller electric circuit, Programming
overview: "This group project is the result of a week-long workshop around Arduino's and Sparkfun's microcontrollers. The idea was to create a collaborative and interactive virtual ecosystem animated using body sensors connected altogether by Wi-Fi. It used ESP-32 microcontrollers, Godot game engine and server capabilities and WebSocket to communicate in between."
---

!medias/videos/biome_trailer.mp4
  legend: Trailer of the interactive experience.

## Concept build-up

This workshop was centred around the theme of “Intimate technology” and was an opportunity for us to explore the multiple possibilities offered by microcontrollers and sensors. While we had previous experience with those tools, we were kind of curious on how we could use the body as a controller.
We came to the idea of recreating a metaphoric inner world where the user’s heartbeat, heat and light exposition would impact through multiple sensors. My friend and I had already worked with Godot and wanted to explore its capabilities with those alternative controls through Wi-Fi and WebSocket.

!medias/images/biome_01.jpg
  legend : Early experimentation with sensors and microcontrollers.
  alt: Multiple photos showing microcontrollers, wires and electronic devices

## Microcontroller

The first two days of the workshop were dedicated to brainstorming ideas and prototyping some simple circuits. After we got a clearer picture of the interaction we wanted to create, we started splitting the tasks between each other. One was working on Godot and 3D modelling, another one on 3D modelling solely and the third one on designing the object that would carry the electronic device. I was focused on building the electric circuit between the sensors and the microcontrollers. The model we used was the ESP32 with Wi-Fi capabilities which I had to set up in order to communicate with WebSocket and Godot.

!medias/images/biome_02.svg
  legend : Simplified schematic of the microcontroller electric circuit.
  alt: Schematic of an electric circuit

Each of the body sensors had a specific impact on the 3D world. The light sensor modifies the sky colour and fog thickness, the heartbeat sensor is related to the flora behaviour and the heat sensor affects how fast the boid-like swarm flies.
The electronic device was ultimately mounted, as a prototype, on a small leather wristband.

!medias/images/biome_03.jpg
  legend : The two early prototypes we mounted on leather wristbands.
  alt: Multiple photos showing early prototypes

In the end, the result of this work, even if not a video game, was interesting because of its exploratory nature. Indeed, it triggered my curiosity, as a game designer, to be able to create new inputs and new interactions that could lead to new game mechanics in the future.

!medias/images/biome_04.jpg
  legend : The 3D world in Godot.
  alt: Screen capture of a 3D render with surrealist fauna and flora

!medias/images/biome_05.jpg
  legend : Now reacting to the heat sensor’s input, the sky gets red.
  alt: Screen capture of a 3D render with surrealist fauna, flora and a red sky
