---
layout: page
title: Rigidity-Based Precise In-Hand Manipulation of Force-Sensitive Objects
description: We developed a force planning approach for multi-finger coordination based on graph rigidity theory. The planned forces enable precise in-hand manipulation of force-sensitive objects.
importance: 1
img: assets/img/inhand_manipulation.jpg
category: Works
related_publications: true
---

Precise in-hand manipulation of force-sensitive objects typically requires judicious coordinated force planning as well as accurate contact force feedback and control. Unlike multi-arm platforms with gripper end effectors, multi-fingered hands rely solely on fingertip point contacts and are not able to apply pull forces, therefore poses a more challenging problem. Furthermore, calibrated torque sensors are lacking in most commercial dexterous hands, adding to the difficulty. To address these challenges, we propose a dual-layer framework for multi-finger coordination, enabling high-precision manipulation of force-sensitive objects through joint control without tactile feedback. This approach solves coordinated contact force planning by incorporating graph rigidity and force closure constraints. By employing a force-to-position mapping, the planned force trajectory is converted to a joint trajectory. We validate the framework on a custom dexterous hand, demonstrating the capability to manipulate fragile objects—including a soft yarn, a plastic cup, and a raw egg—with high precision and safety. Details please refer to {%cite rong2026RAL%}.


<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;margin-bottom:5rem;">
  <div style="flex:1 1 45%;max-width:45%;aspect-ratio:16/9;">
    <iframe src="https://www.youtube.com/embed/kcf9dVW0Dpo" style="width:100%;height:100%;border:0;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div style="flex:1 1 45%;max-width:45%;aspect-ratio:16/9;">
    <iframe src="https://player.bilibili.com/player.html?bvid=BV1y5ZtBfEKw&page=1&autoplay=0" style="width:100%;height:100%;border:0;" frameborder="0" allowfullscreen></iframe>
  </div>
</div>