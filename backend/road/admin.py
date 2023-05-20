from django.contrib import admin

# Register your models here.
from .models import Accident, AccidentImages, Vehicle,Unit,Road
class Vehicleadmin(admin.ModelAdmin):
    # pass
    list_display = ('id','road','unit', 'datetime')


class Accidentadmin(admin.ModelAdmin):

    list_display = ('id','unit','datetime', 'status','handled')
class Unitadmin(admin.ModelAdmin):

    list_display = ('id','road','location')
class Roadadmin(admin.ModelAdmin):

    list_display = ('id','name')
class AccidentImagesadmin(admin.ModelAdmin):

    list_display = ('id','image','accident')
    # list_display = ('id','accident')

admin.site.register(Vehicle,Vehicleadmin)
admin.site.register(Accident,Accidentadmin)
admin.site.register(Unit,Unitadmin)
admin.site.register(Road,Roadadmin)
admin.site.register(AccidentImages,AccidentImagesadmin)
