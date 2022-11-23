from django.db import models
from django.contrib.auth.models import User


class Movie(models.Model):
    #user    = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    title    = models.CharField(max_length=290, blank=False, null=False)
    release_date = models.CharField(max_length=290, blank=False, null=False)
    poster_path = models.CharField(max_length=590, blank=False, null=False) 


    def __str__(self):
        return self.title 

    class Meta:
       ordering = ['title']


    