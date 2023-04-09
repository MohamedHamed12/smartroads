from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status ,generics ,mixins ,viewsets ,filters
from .serializer import Accidentserializer, Vehicleserializer
from .models import Accident, Vehicle

User = get_user_model()

from django.shortcuts import render, get_object_or_404

def index(request):
    return render(request, "chat/index.html",{})
    
def room(request, room_name):
    room_name='room'
    return render(request, "chat/room.html", {"room_name": room_name})

class viewsets_vehicle(viewsets.ModelViewSet ):
    queryset=Vehicle.objects.all()
    serializer_class=Vehicleserializer
    
class viewsets_accident(viewsets.ModelViewSet ):
    queryset=Accident.objects.all()
    serializer_class=Accidentserializer
    