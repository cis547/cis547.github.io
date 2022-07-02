---
layout: default
title: Staff
---

#### Course Staff

<div class="staff-profiles">
{% for staff in site.data.staff.instructors %}

<div class="profile">
<img alt="{{ staff.name }}" src="images/staff/{{ staff.pennid }}.png"/>

<p>
    <a class="staff-name" href="{{ staff.website }}">{{ staff.name }}</a><br>
    <span>Instructor</span><br>
    <a href="mailto:{{ staff.pennid }}@{{ staff.university_email_provider }}">{{ staff.pennid }} @ {{ staff.school }}</a>
</p>
</div>
{% endfor %}
</div>

{% for offering in site.data.staff.teaching_assistants %}
##### {{ offering[0] }}

<div class="staff-profiles">
{% for staff in offering[1] %}

<div class="profile">

<img alt="{{ staff.name }}" src="images/staff/{{ staff.pennid }}.png"/>

<p>
    <a class="staff-name" href="{{ staff.website }}">{{ staff.name }}</a><br>
    <span>{{ staff.position }}</span><br>
    <a href="mailto:{{ staff.pennid }}@{{ staff.university_email_provider }}">{{ staff.pennid }} @ {{ staff.school }}</a>
</p>
</div>

{% endfor %}
</div>

{% endfor %}