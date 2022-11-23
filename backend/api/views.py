from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser, JSONParser, MultiPartParser, FormParser, FileUploadParser
from .models import Movie
from .serializers import MovieSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #authentication_classes = (AllowAny, )
    permission_classes = (AllowAny,)


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser, MultiPartParser, FormParser, FileUploadParser])
def get_fav(request):
    if request.method == 'GET':
        movie = MovieSerializer(
            Movie.objects.all().order_by('-title'),
            many=True,
            context={
                "request": request
            }).data
        return Response({"movie": movie})

    elif request.method == 'POST':
        movie_serializer = MovieSerializer(data=request.data)
        if movie_serializer.is_valid():
            movie_serializer.save()
            return Response(movie_serializer.data, status=status.HTTP_201_CREATED) 
        return Response(movie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': 
        data = request.data
        movie = Movie.objects.get(id=data['id']) 
        movie.delete() 
        return Response({'message': 'Movie was deleted successfully form favourites!'}, status=status.HTTP_204_NO_CONTENT)
    


@api_view(['DELETE'])
def taskUpdate(request):
    data = request.data
    tutorial = Movie.objects.get(id=data['id']) 
    tutorial.delete() 
    return Response({'message': 'Movie was deleted successfully form favourites!'}, status=status.HTTP_204_NO_CONTENT)



