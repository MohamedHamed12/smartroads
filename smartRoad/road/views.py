import datetime
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status ,generics ,mixins ,viewsets ,filters

from .detect_model import run_detection
from .serializer import Accidentserializer, Roadserializer, Unitserializer, Vehicleserializer
from .models import Accident, Road, Unit, Vehicle

User = get_user_model()

from django.shortcuts import render, get_object_or_404

# def index(request):
#     return render(request, "road/index.html",{})

def dashboard(req):
    last_24h = datetime.datetime.now() - datetime.timedelta(hours=24)

    response_data={
        'verticals_last_24h': Vehicle.objects.filter(datetime__gte=last_24h).count(),
        'accident_last_24h':Accident.objects.filter(datetime__gte=last_24h).count(),
    }
    return JsonResponse(response_data)


def room(request, room_name):
    room_name='room'
    return render(request, "road/room.html", {"room_name": room_name})

class viewsets_vehicle(viewsets.ModelViewSet ):
    queryset=Vehicle.objects.all()
    serializer_class=Vehicleserializer
    
class viewsets_accident(viewsets.ModelViewSet ):
    queryset=Accident.objects.all()
    serializer_class=Accidentserializer
    def create(self, request, *args, **kwargs):
        # Extract the image data from the request
        image = request.data.get('image')

        # Run detection using the machine learning model
        detection_results = run_detection(image)

        if detection_results:
            # If detection is successful, proceed with saving to the database
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            # If detection fails, return an error response
            error_data = {'error': 'Image detection failed.'}
            return Response(error_data, status=status.HTTP_400_BAD_REQUEST)
class viewsets_road(viewsets.ModelViewSet ):
    queryset=Road.objects.all()
    serializer_class=Roadserializer
    
class viewsets_unit(viewsets.ModelViewSet ):
    queryset=Unit.objects.all()
    serializer_class=Unitserializer
    
