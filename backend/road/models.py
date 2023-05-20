import datetime
from django.contrib.auth import get_user_model
from django.db import models

# User = get_user_model()

class Road(models.Model):
    name = models.CharField(max_length=150)
    def __str__(self) :
        return self.name
class Unit(models.Model):
    
    location = models.CharField(max_length=150)
    road = models.ForeignKey(Road, on_delete=models.CASCADE)
    def __str__(self) :
        return self.location+self.road.name
    
class Vehicle(models.Model):
    road = models.ForeignKey(Road, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True)
    unit= models.ForeignKey(Unit, on_delete=models.CASCADE)

STATUS_CHOICES=(
    ('normal', 'Normal'),
    ('danger', 'Danger'),
    ('deadly', 'Deadly'),
)

class Accident(models.Model):
    unit= models.ForeignKey(Unit, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True)
    status=models.CharField(max_length=50,choices=STATUS_CHOICES)
    handled=models.BooleanField(default=False)
    # image=models.ImageField( upload_to='images',null=True, blank=True, multiple=True)
    title=models.CharField(max_length=200,default='accident ')
    # title=models.CharField(max_length=200,default='accident at '+str(road))
class AccidentImages(models.Model):
    accident=models.ForeignKey(Accident, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images')
    