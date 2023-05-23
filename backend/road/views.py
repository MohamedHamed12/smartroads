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
from .serializer import AccidentImagesserializer, Accidentserializer, Roadserializer, Unitserializer, Vehicleserializer
from .models import Accident, AccidentImages, Road, Unit, Vehicle

User = get_user_model()

from django.shortcuts import render, get_object_or_404

# def index(request):
#     return render(request, "road/index.html",{})

def dashboard(req):
    last_24h = datetime.datetime.now() - datetime.timedelta(hours=24)

    response_data={
        'vehicle_last_24h': Vehicle.objects.filter(datetime__gte=last_24h).count(),
        'accident_last_24h':Accident.objects.filter(datetime__gte=last_24h).count(),
    }
    return JsonResponse(response_data)


def room(request, room_name):
    room_name='room'
    return render(request, "road/room.html", {"room_name": room_name})

class vehicle_viewsets(viewsets.ModelViewSet ):
    queryset=Vehicle.objects.all()
    serializer_class=Vehicleserializer
    
class accident_viewsets(viewsets.ModelViewSet ):
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

            # save image to accident
            accident_id = serializer.data['id']
            data={'accident':accident_id,'image':image}
            accidentImageserializer = AccidentImagesserializer(data=data)
            accidentImageserializer.is_valid(raise_exception=True)
            accidentImageserializer.save()

             
            headers = self.get_success_headers(serializer.data)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            # If detection fails, return an error response
            error_data = {'error': 'Image detection failed.'}
            return Response(error_data, status=status.HTTP_400_BAD_REQUEST)
   

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
    
    
class road_viewsets(viewsets.ModelViewSet ):
    queryset=Road.objects.all()
    serializer_class=Roadserializer
    
class unit_viewsets(viewsets.ModelViewSet ):
    queryset=Unit.objects.all()
    serializer_class=Unitserializer
    
class AccidentImages_viewsets(viewsets.ModelViewSet):
    queryset=AccidentImages.objects.all()
    serializer_class=AccidentImagesserializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        accident_id=self.request.query_params.get('accident_id')
      
        # print(accident_id)
        queryset = queryset.filter(accident_id=accident_id)

        return queryset
    
