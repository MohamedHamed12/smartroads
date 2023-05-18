from django import forms

class Messageform(forms.Form):
    message = forms.CharField(label='Your name', max_length=100)
    command=forms.CharField(label='Your name', max_length=100)