# chat/consumers.py
import json
from channels.layers import get_channel_layer

from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from datetime import date

from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.http import JsonResponse

from .serializer import Vehicleserializer
from .views import *
from .models import *
from django.core import serializers
from django.db.models.signals import post_save
class ChatConsumer(WebsocketConsumer):  
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        self.room_name = 'room'
        self.room_group_name = "chatroom"
        
        # Join room group
        async_to_sync (self.channel_layer.group_add)(self.room_group_name, self.channel_name)

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync (self.channel_layer.group_discard)(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    def receive(self, text_data):
        rdata = json.loads(text_data)
      
        self.commands[rdata['command']](self, rdata)

    def send_chat_message(self, message):

        # Send message to room group
        async_to_sync( self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event["message"]
      
        # Send message to WebSocket

        async_to_sync (self.send(text_data=json.dumps({"message": message},default=str)))







'''
# chat/consumers.py
import json

from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync (self.channel_layer.group_add)(self.room_group_name, self.channel_name)

        self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        async_to_sync (self.channel_layer.group_discard)(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        # Send message to room group
        async_to_sync( self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        async_to_sync (self.send(text_data=json.dumps({"message": message})))
'''