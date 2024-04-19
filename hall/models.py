from django.db import models

class Hall(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    max_visitors = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    area = models.FloatField()
    hall_number = models.CharField(max_length=255, unique=True)
    max_meal = models.PositiveIntegerField()
