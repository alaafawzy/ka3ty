from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, RetrieveAPIView,GenericAPIView
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken  # For token authentication
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .models import CustomUser
from .serializers import CustomAuthTokenSerializer, UserSerializer, RegistrationSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated

# class UserView(RetrieveAPIView):
#     serializer_class = UserSerializer
#     def get_object(self):
#         # Get the token from the request headers (adjust based on your authentication setup)
#         user = self.request.user  # Access the authenticated user
#         return user
class UserView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CustomUser.objects.all()  # Don't actually filter here
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user  # Access the user from the request

    def retrieve(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(user)
        return Response(serializer.data)
class RegisterView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = None  # We don't need a queryset for user creation
    serializer_class = RegistrationSerializer


class LoginView(GenericAPIView):
    serializer_class=CustomAuthTokenSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)

        return Response({'user': user.first_name}, status=status.HTTP_200_OK)
        
class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return Response({'message': 'Successfully logged out.'})
