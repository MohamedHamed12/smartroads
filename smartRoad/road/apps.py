from django.apps import AppConfig


class roadConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'road'
    def ready(self):
        from . import signals

# def ready(self):
#     from . import signals