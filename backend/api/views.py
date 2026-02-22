from rest_framework import generics
from .models import Section
from .serializers import SectionSerializer

class SectionList(generics.ListCreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
