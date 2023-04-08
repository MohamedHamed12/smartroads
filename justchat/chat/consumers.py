# chat/consumers.py
import json


from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from datetime import date

from django.contrib.auth import get_user_model
from django.http import JsonResponse

from .serializer import Vehicleserializer
from .views import *
from .models import *
from django.core import serializers
class ChatConsumer(WebsocketConsumer):

    def vehicle_to_json(self , vehicle):
        return {
            'type': vehicle.type,
            'speed': vehicle.speed,
            'datetime': str(vehicle.datetime)
        }
    def accident_to_json(self , accident):
        return {
            'status':accident.status,
            'datetime': str(accident.datetime),
            'num_of_vehicle':accident.num_of_vehicle,
            'location':accident.location
        }
    



#**********************************************
    def handled(self ,data):
        pass
    
    def fetch_vehicles(self ,data):
        content = {
            'command': 'fetch_vehicles',
            'vehicles': [self.vehicle_to_json(item) for item in Vehicle.objects.all()]
        }
        return self.send_chat_message(content)
    
    def fetch_accidents(self ,data):
      
        content = {
            'command': 'fetch_accidents',
            'accidents': [self.accident_to_json(item)  for item in Accident.objects.all()]
        }
        return self.send_chat_message(content)
     
    def dashboard(self,data):
        content = {
            'command': 'dashboard',
            'data': {
            'car_count': Vehicle.objects.count(),
            'accident_count': Accident.objects.count(),
            }
        }
        return self.send_chat_message(content)
    def new_accident(self,data):
        accident=Accident.objects.create(status=data['status'],location=data['location'],num_of_vehicle=data['num_of_vehicle'])
        content={
            'comand': 'new_accident',
            'accident':self.accident_to_json(accident)
        }
        return  self.send_chat_message(content)


    def new_vehicle(self,data):
     
        vehicle=Vehicle.objects.create(type=data['type'],speed=data['speed'])
        content = {
            'command': 'new_vehicle',
            'vehicle': self.vehicle_to_json(vehicle)
        }
        return self.send_chat_message(content)
    

    commands = {
        'new_vehicle': new_vehicle,
        'new_accident': new_accident,
        'fetch_vehicles': fetch_vehicles,
        'fetch_accidents': fetch_accidents,
        'dashboard': dashboard,
        'handled':handled,
    }
#**************************************************************
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name
        
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