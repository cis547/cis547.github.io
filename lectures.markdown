---
layout: default
title: Lectures
---

{% assign lectures = site.lectures | sort: '_id' %}
{% for lecture in lectures %}
### [Module {{lecture._id}}: {{lecture.title}}]({{ lecture.id }})

{{lecture.description | markdownify}}
{% endfor %}
