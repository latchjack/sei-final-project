#pylint:disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND
from rest_framework.status import HTTP_201_CREATED
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.status import HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED

from .models import Article, Comment, Like
from .serializers import ArticleSerializer, PopulatedArticleSerializer, CommentSerializer , LikeSerializer

class ArticleListView(APIView):

  def get(self, _request):

    articles = Article.objects.all()
    serialized_articles = PopulatedArticleSerializer(articles, many=True)

    return Response(serialized_articles.data)

  def post(self, request):
    request.data['owner'] = request.user.id
    article = ArticleSerializer(data=request.data)

    if article.is_valid():
      article.save()
      return Response(article.data, status=HTTP_201_CREATED)
    return Response(article.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class ArticleDetailView(APIView):

  def get(self, _request, pk):

    try:
      article = Article.objects.get(pk=pk)
      serialized_article = PopulatedArticleSerializer(article)
      return Response(serialized_article.data)
    except Article.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)



  def put(self, request, pk):
      article = Article.objects.get(pk=pk)
      updated_article = ArticleSerializer(article, data=request.data)
      if updated_article.is_valid():
          updated_article.save()
          return Response(updated_article.data)
      return Response(updated_article.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

  def delete(self, _request, pk):

    try:
      article = Article.objects.get(pk=pk)
      article.delete()
      return Response(status=HTTP_204_NO_CONTENT)
    except Article.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class CommentListView(APIView):

  def post(self, request, pk):
    request.data['article'] = pk
    request.data['owner'] = request.user.id
    print(request.data)
    comment = CommentSerializer(data=request.data)

    if comment.is_valid():
      comment.save()
      article = Article.objects.get(pk=pk)
      serialized_article = PopulatedArticleSerializer(article)

      return Response(serialized_article.data, status=HTTP_201_CREATED)

    return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):

  def get(self, _request, **kwargs):

    try:
      print(kwargs)
      comment = Comment.objects.get(pk=kwargs['pk'])
      serialized_comment = CommentSerializer(comment)
      return Response(serialized_comment.data)
    except Comment.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  def delete(self, _request, **kwargs):

    try:
      comment = Comment.objects.get(pk=kwargs['pk'])
      comment.delete()
      return Response(status=HTTP_204_NO_CONTENT)
    except Comment.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class LikeListView(APIView):

  def post(self, request, pk):
    request.data['article'] = pk
    request.data['owner'] = request.user.id

    like = LikeSerializer(data=request.data)

    if like.is_valid():
      like.save()
      article = Article.objects.get(pk=pk)
      serialized_article = PopulatedArticleSerializer(article)

      return Response(serialized_article.data, status=HTTP_201_CREATED)

    return Response(like.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class LikeDetailView(APIView):

  def delete(self, request, pk, like_pk):
    
    try:
      like = Like.objects.get(pk=like_pk)
      if like.owner.id != request.user.id:
        return Response(status=HTTP_401_UNAUTHORIZED)
      like.delete()
      return Response(status=HTTP_204_NO_CONTENT)
    except Article.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)