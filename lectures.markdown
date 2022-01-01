---
layout: default
title: Lectures
---

{% for lecture in site.lectures %}
  ### [Module {{lecture._id}}: {{lecture.title}}]({{ lecture.id }})

  {{lecture.description | markdownify}}
{% endfor %}
