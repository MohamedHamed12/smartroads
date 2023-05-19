# road/routing.py
from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/road/(?P<room_name>\w+)/$", consumers.roadConsumer.as_asgi()),
]