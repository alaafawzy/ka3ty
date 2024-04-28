from django.urls import path
from .views import *
from rate.views import RateCreateView,RateListByHallView

urlpatterns = [
    path('list/', HallListView.as_view(), name='hall-list'),
    path('<int:pk>/show/', HallDetailView.as_view(), name='hall-detail'),
    path('create/', HallCreateView.as_view(), name='hall-create'),
    path('<int:hall_pk>/rate/', RateCreateView.as_view(), name='hall-rate-create'),
    path('<int:hall_pk>/rates/', RateListByHallView.as_view(), name='hall-rate-list'),
]
