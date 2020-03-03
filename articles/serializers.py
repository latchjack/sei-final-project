from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Article, Comment, Like

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

class LikeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Like
    fields = '__all__' 
  
class PopulatedArticleSerializer(ArticleSerializer):
      comments = PopulatedCommentSerializer(many=True)
      likes = LikeSerializer(many=True)
      owner = UserSerializer()

