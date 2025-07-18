---
layout: page
title: Formation Control
description: Cooperatively form and maneuver a formation to perform tasks in complex environments.
img: assets/img/formation.jpg
importance: 1
category: Topics
related_publications: true
---

Formation control aims to drive multiple autonomous systems to meet prescribed constraints on their states, so that the overall system exhibits a desired collective behavior as required in specific scenarios. 

We mainly focus on the following problems in formation control:

**How to control the formation shape via local constraints among agents?**

We proposed two new graph rigidity theories, i.e., weak rigidity theory {%cite jingWeakRigidityTheory2018%} and angle rigidity theory {%cite jing2019angle%}. They provide a guidance on how to design the network structure so that the local constraints are sufficient to determine the geometric shape. We are still working on this direction to develop new kinds of constraints along with the network structure condition such that the constrained formation is more flexible.



<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IAR.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <figcaption class="text-center mt-2">Infinitesimally angle rigid graphs.</figcaption>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AGformation.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <figcaption class="text-center mt-2">Experiments on multi-UAV formation with a drone leader.</figcaption>
    </div>
</div>

**How to maneuver a formation in dynamic environments?**

How to react to dynamic environments in real-time is known as an open problem in the robotics society. We are developing real-time decision making methods for a multi-agent formation to change its shape when interacting with the complex environments. Related topcis include autonomous shape transformation, motion planning in the presence of moving obstacles, human-formation interaction, etc.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-2 mt-md-0">
        {% include figure.liquid path="assets/img/formation_transformation.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An angle-based formation transformation approach {%cite jingMultiagentFlockingAngleBased2020%}.
</div>



