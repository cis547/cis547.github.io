---
layout: default
title: Schedule
---

{% assign lectures = site.lectures | sort: '_id' %}
{% assign labs = site.labs | sort: '_id' %}
<table>
  <thead><tr>
  <th>Week</th><th>Module</th><th>Lab</th>
  </tr></thead>
  <tbody>
  {% for item in site.data.schedule %}
  {% assign lecture_idx = item.lecture | minus: 1 %}
  {% assign lecture = lectures[lecture_idx] %}
    <tr>
      <td>Week {{ item.week }}</td>
      <td><a href="{{ lecture.id }}">{{ lecture.title }}</a></td>
      {% if item.lab %}
      {% assign lab_idx = item.lab | minus: 1 %}
      {% assign lab = labs[lab_idx] %}
      <td><a href="{{ lab.id }}">{{ lab.title }}</a></td>
      {% endif %}
    </tr>
  {% endfor %}
  </tbody>
</table>
