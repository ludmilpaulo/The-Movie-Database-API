from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token
from api.views import  get_fav, taskUpdate, UserAuthToken, UserSignupView, favorite_movies




urlpatterns = [
    path('admin/', admin.site.urls),
    path('get/', get_fav),
    path('delete/', taskUpdate),
    path('movies/', favorite_movies),
    path('signup/', UserSignupView.as_view()),
    path('login/',UserAuthToken.as_view(), name='auth-token'),

]