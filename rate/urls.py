from django.urls import path
from .views import *


urlpatterns = [
    path('list/', RateListView.as_view(), name='rate-list'),
    path('<int:pk>/', RateView.as_view(), name='rate-detail'),
]
