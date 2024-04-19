from django.db import models

from accounts.models import CustomUser
from hall.models import Hall  # Update path to your hall model


class Rate(models.Model):
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    comment = models.TextField(blank=True)
    rate = models.PositiveIntegerField()  # Assuming rate is a positive integer
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['hall', 'user'], name='unique_rate_per_hall_user'),
        ]