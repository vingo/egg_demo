<html>
  <head>
    <title>Hacker tags</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.id }}">{{ item.name }}</a> {{helper.relativeTime(item.time)}}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>