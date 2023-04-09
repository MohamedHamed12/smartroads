#create vehicle serializer 
 
from rest_framework import serializers

from .models import Vehicle ,Accident

class Vehicleserializer(serializers.ModelSerializer):
  
    class Meta:
        model = Vehicle
        fields='__all__'

#create Accident serializer 
class Accidentserializer(serializers.ModelSerializer):
    class Meta:
        model = Accident
        fields='__all__'
