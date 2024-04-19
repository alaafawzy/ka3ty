from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate, logout, login
from phonenumber_field.modelfields import PhoneNumberField 
from .models import CustomUser
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'email','phone_number')

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    phone_number = PhoneNumberField()  

    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'first_name', 'last_name', 'phone_number')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'],
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if not email or not password:
            raise serializers.ValidationError('Both email and password are required.')

        user = CustomUser.objects.filter(email=email).first()
        if not user:
            raise serializers.ValidationError('Invalid credentials.')

        if not user.check_password(password):
            raise serializers.ValidationError('Invalid credentials.')

        attrs['user'] = user
        return attrs
class CustomAuthTokenSerializer(serializers.Serializer):
    email = serializers.CharField(label='email')
    password = serializers.CharField(label='Password', style={'input_type': 'password'})

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)

            if not user:
                attrs['user'] = None
                return attrs

            token, created = Token.objects.get_or_create(user=user)
            data = {"token": token.key, "user": user}

        else:
            raise serializers.ValidationError('Must include "email" and "password".')

        attrs['user'] = user
        return attrs