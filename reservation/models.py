from django.db import models

# Create your models here.

class ReservationModel(models.Model):
    hall_number = models.ForeignKey('hall.hall', related_name='hall_reservation', on_delete=models.CASCADE,db_index=True)
    user = models.ForeignKey('accounts.customUser', related_name='user_reservation', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    reservation_date = models.DateField(auto_now=False, auto_now_add=False, blank=True, null=True)
    payment_method = models.CharField(max_length=255,blank=True,null=True)
