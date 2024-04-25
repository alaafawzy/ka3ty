from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField  
from django.contrib.auth.models import PermissionsMixin
class UserManager(BaseUserManager):
    def create_user(self, email, password,first_name,last_name,phone_number, **extra_fields):
        """
        Creates and saves a User with the given email, password and extra fields.
        """
        if not email:
            raise ValueError('Users must have an email address')
        if not first_name:
            raise ValueError('Users must have a first name')
        if not last_name:
            raise ValueError('Users must have a last name')
        if not phone_number:
            raise ValueError('Users must have a phone number')
        
        user = self.model(email=self.normalize_email(email),first_name=first_name,
            last_name=last_name,phone_number=phone_number)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password,first_name,last_name,phone_number, **extra_fields):
        """
        Creates and saves a SuperUser with the given email, password and extra fields.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if password is None:
            raise ValueError('Superusers must have a password')

        return self.create_user(email, password,first_name,last_name,phone_number, **extra_fields)

class CustomUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone_number = PhoneNumberField(blank=True)  

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password','first_name','last_name','phone_number']

    objects = UserManager()

    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=True)
    def __str__(self):
        return f"{self.email}"
    def save(self, *args, **kwargs):
        super(CustomUser, self).save(*args, **kwargs)