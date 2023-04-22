#create vehicle serializer 
 
from rest_framework import serializers

from .models import Road, Unit, Vehicle ,Accident

class Vehicleserializer(serializers.ModelSerializer):
  
    class Meta:
        model = Vehicle
        fields='__all__'

#create Accident serializer 
class Accidentserializer(serializers.ModelSerializer):
    class Meta:
        model = Accident
        fields='__all__'
class Roadserializer(serializers.ModelSerializer):
    class Meta:
        model = Road
        fields='__all__'
class Unitserializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields='__all__'
