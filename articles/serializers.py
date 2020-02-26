from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Article, Comment

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username')

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Article
    fields = '__all__' 

class PopulatedCommentSerializer(CommentSerializer):
  owner = UserSerializer()
  
class PopulatedArticleSerializer(ArticleSerializer):
      comments = PopulatedCommentSerializer(many=True)