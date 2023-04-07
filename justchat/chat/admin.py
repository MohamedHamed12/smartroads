from django.contrib import admin

# Register your models here.
from .models import Accident, Vehicle
class Vehicleadmin(admin.ModelAdmin):
    list_display = ('id','type','speed', 'datetime')


class Accidentadmin(admin.ModelAdmin):
    list_display = ('id','num_of_vehicle','datetime', 'status','location','handled')

admin.site.register(Vehicle,Vehicleadmin)
admin.site.register(Accident,Accidentadmin)
