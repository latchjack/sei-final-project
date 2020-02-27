from django.urls import path
from .views import ArticleListView, ArticleDetailView, CommentListView, CommentDetailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<int:pk>/', ArticleDetailView.as_view()),
    path('<int:pk>/comments', CommentListView.as_view()),
    path('<int:pk>/comments/<int:comment_pk/', CommentDetailView.as_view())
]