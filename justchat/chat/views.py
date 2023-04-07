from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# from .serializers import RoomSerializer

User = get_user_model()

# chat/views.py
from django.shortcuts import render, get_object_or_404

def index(request):

        
   
    # chats=Chat.objects.filter(username in Chat.participants.all())
    con={
        
    }
    
    return render(request, "chat/index.html",con)
    
def room(request, room_name):
  
    return render(request, "chat/room.html", {"room_name": room_name})

