# chat/urls.py
from django.urls import include, path

from . import views
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('vehicles',views.viewsets_vehicle)
router.register('accident',views.viewsets_accident)
urlpatterns = [
    path("", views.index, name="index"),
    path("room<str:room_name>/", views.room, name="room"),
    path('vehicles/',include(router.urls)  ),
    path('accident/',include(router.urls)  ),
]
