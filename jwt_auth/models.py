from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
  email = models.CharField(max_length=40, unique=True)

  def __str__(self):
    return f'{self.username} - {self.id}'