---
layout: page
title: Network Localization
description: Cooperative localizing unknown nodes in a network.
img: assets/img/localization.jpg
importance: 2
category: Topics
related_publications: true
---

Sensor Network Localization (SNL) is to determine locations of all sensors when locations of partial sensors (called anchors) and relative measurements between some pairs of sensors are available. The SNL problem plays an essential role in multi-robot coordination, and is also important in continuous monitoring problems.


Typically, the SNL problem can be catogerized into two types.

**Centralized SNL**. A central unit collects all the local information measured by the sensors, then solves the locations of all the sensors.

**Distributed SNL**. Each sensor localizes itself based on the local measurements from and communications with neighbors.


Based on angle rigidity theory, we investigated how to utilize angle measurements in SNL. We call the corresponding problem ASNL {%cite jingAngleBasedSensorNetwork2022%}. The main advantage of angle measurements is coordinate-free and measurable by monocular sensors. 

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ASNL.png" title="example image" class="img-fluid rounded z-depth-1" %}
        <figcaption class="text-center mt-2">Angle-based sensor network localization.</figcaption>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/localization.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <figcaption class="text-center mt-2">Experiments on monocular sensors.</figcaption>
    </div>
</div>

Network localization has a great potential in robotics motion planning under complex environments, where the robots need to understand the world via weak measurements captured by sensors. We are currently working on exciting topics regarding localization in medical robotics and environment monitoring.