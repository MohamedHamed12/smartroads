# road/urls.py
from django.urls import include, path

from . import views
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('vehicles',views.vehicle_viewsets)
router.register('accidents',views.accident_viewsets)
router.register('units',views.unit_viewsets)
router.register('roads',views.road_viewsets)
router.register('accidentImages',views.AccidentImages_viewsets)
urlpatterns = [
    # path("", views.index, name="index"),
    path("room/<str:room_name>/", views.room, name="room"),
    path('',include(router.urls)  ),
    path("dashboard/",views.dashboard,name="dashboard"),
]
