from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, RetrieveAPIView,GenericAPIView
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken  # For token authentication
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, RegistrationSerializer, LoginSerializer

class UserView(RetrieveAPIView):
    serializer_class = UserSerializer
    def get_object(self):
        # Get the token from the request headers (adjust based on your authentication setup)
        user = self.request.user  # Access the authenticated user
        return user

class RegisterView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = None  # We don't need a queryset for user creation
    serializer_class = RegistrationSerializer


class LoginView(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']  # User retrieved from validation
        # token, created = Token.objects.get_or_create(user=user)
        login(request, user)
        return Response({
            # 'token': token.key,
            'user': UserSerializer(user).data
        })
class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return Response({'message': 'Successfully logged out.'})
