from django.urls import path
from .views import SectionList

urlpatterns = [
    path('sections/', SectionList.as_view(), name='section-list'),
]
