import datetime
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Vehicle(models.Model):
    type = models.CharField(max_length=150)
    datetime = models.DateTimeField(auto_now_add=True)
    speed=models.IntegerField()
    # def __str__(self) :
    #     return f"{self.type} at {str(datetime)}"

class Accident(models.Model):
    num_of_vehicle=models.IntegerField()
    datetime = models.DateTimeField(auto_now_add=True)
    status=models.CharField(max_length=200)
    location=models.CharField(max_length=300)
    handled=models.BooleanField(default=False)

    imag=models.ImageField( upload_to='images',null=True, blank=True)
    
    # def __str__(self) :
    #     return f"{self.num_of_vehicle}{self.status}"