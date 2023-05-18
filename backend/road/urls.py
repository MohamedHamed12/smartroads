# road/urls.py
from django.urls import include, path

from . import views
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('vehicles',views.viewsets_vehicle)
router.register('accidents',views.viewsets_accident)
router.register('units',views.viewsets_unit)
router.register('roads',views.viewsets_road)
urlpatterns = [
    # path("", views.index, name="index"),
    path("room/<str:room_name>/", views.room, name="room"),
    path('',include(router.urls)  ),
    path("dashboard/",views.dashboard,name="dashboard"),
]