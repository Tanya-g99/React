from rest_framework import generics
from rest_framework import serializers
from .models import User, Moment

class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source='id.email', read_only=True)
    nickname = serializers.CharField(source='id.username',  read_only=True)
    class Meta:
        model = User
        fields = ('nickname', 'email', 'profile_img', 'reg_date')

class MomentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moment
        fields = ['id', 'title', 'description',
                  'author', 'created_on', 'image_src']

class UserAPIList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MomentAPIList(generics.ListCreateAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer

class MomentAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer