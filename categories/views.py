#pylint:disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND
from rest_framework.status import HTTP_201_CREATED
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.status import HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED

from .models import Category
from .serializers import CategorySerializer

class CategoryListView(APIView):

  def get(self, _request):
    categories = Category.objects.all()
    serialized_categories = CategorySerializer(categories, many=True)
    
    return Response(serialized_categories.data)

class CategoryDetailView(APIView):

  def get(self, _request, pk):

    try:
      article = Category.objects.get(pk=pk)
      serialized_article = CategorySerializer(article)
      return Response(serialized_article.data)
    except Category.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)