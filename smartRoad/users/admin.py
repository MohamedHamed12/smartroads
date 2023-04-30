from django.contrib import admin

from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin): 
      list_display = ( 'email', 'first_name', 'last_name')
           
    # readonly_fields = ('date_joined', 'last_login', 'is_verified',)
    # prepopulated_fields = {'slug': ('username',)}
    # ordering = ('username',)
    # search_fields = ('username', 'first_name', 'last_name')