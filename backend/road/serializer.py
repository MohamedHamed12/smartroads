#create vehicle serializer 
 
from rest_framework import serializers

from .models import AccidentImages, Road, Unit, Vehicle ,Accident

class Vehicleserializer(serializers.ModelSerializer):
  
    class Meta:
        model = Vehicle
        fields='__all__'

#create Accident serializer 
class Accidentserializer(serializers.ModelSerializer):
    class Meta:
        model = Accident
        fields='__all__'
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['road_name'] = instance.unit.road.name
        data['unit_location'] = instance.unit.location
        return data
class Roadserializer(serializers.ModelSerializer):
    class Meta:
        model = Road
        fields='__all__'
class Unitserializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields='__all__'
class AccidentImagesserializer(serializers.ModelSerializer):
    class Meta:
        model = AccidentImages
        fields='__all__'
