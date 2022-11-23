from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token
from api.views import MovieViewSet, UserViewSet, get_fav

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('movies', MovieViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('get/', get_fav),
]