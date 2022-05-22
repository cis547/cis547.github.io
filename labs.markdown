---
layout: default
title: Labs
---

{% for lab in site.labs %}
### [Lab {{lab._id}}: {{lab.title}}]({{ lab.id }})

{{lab.synopsis | markdownify}}
{% endfor %}