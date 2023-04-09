from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from .models import Accident, Vehicle

@receiver(post_save, sender=Vehicle)
def send_message_on_save(sender, instance, created, **kwargs):
 
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
           'chatroom',
            {
                'type':'chat_message',
                'message': {
                    'commands': 'new_vehicle',
            }
              
            }
    )

@receiver(post_save, sender=Accident)
def send_message_on_save(sender, instance, created, **kwargs):
 
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
           'chatroom',
            {
                'type':'chat_message',
                'message': {
                    'commands': 'new_accident',
            }
              
            }
    )