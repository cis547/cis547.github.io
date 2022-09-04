---
layout: default
title: Labs
---

{% assign labs = site.labs | sort: '_id' %}
{% for lab in labs %}
### [Lab {{lab._id}}: {{lab.title}}]({{ lab.id }})

{{lab.synopsis | markdownify}}
{% endfor %}