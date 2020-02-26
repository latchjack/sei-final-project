##pylint: disable = no-member, arguments-differ
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
# import django.contrib.auth.password_validation as validations
# from djnago.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)

  def validate(self, data):
    password = data.pop('password')
    password_confirmation = data.pop('password_confirmation')

    if password != password_confirmation:
      raise serializers.ValidationError({'password_confirmation': 'Does Not Match'})
    data ['password'] = make_password(password)
    return data
    
  class Meta:
    mode = User
    fields = '__all__'