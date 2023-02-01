from django.contrib import admin

from .models import User, Moment, Coment, Subscription, Like

admin.site.register(User)
admin.site.register(Moment)
admin.site.register(Coment)
admin.site.register(Subscription)
admin.site.register(Like)
