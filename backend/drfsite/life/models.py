from django.db import models
from django.contrib.auth import models as user_models

class User(models.Model):
    id = models.OneToOneField(user_models.User, unique=True, on_delete=models.CASCADE, primary_key=True)
    profile_img = models.CharField(max_length=255, default="logo1.png")
    reg_date = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(default=0)

class Moment(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    image = models.CharField(max_length=255, default="logo.svg")

class Coment(models.Model):
    author = models.ForeignKey('User', on_delete=models.CASCADE, null=True)
    content = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)

class Subscription(models.Model):
    author = models.ForeignKey(User, related_name='authorS', on_delete=models.CASCADE, null=True)
    target = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)

class Like(models.Model):
    author = models.ForeignKey(User, related_name='authorL', on_delete=models.CASCADE, null=True)
    target = models.ForeignKey(Moment, on_delete=models.CASCADE, null=True)
    target = models.ForeignKey(Coment, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)

class Tag(models.Model):
    title = models.CharField(max_length=255)
    # related_moments = models.ManyToManyField(Moment, on_delete=models.SET_NULL, null=True)