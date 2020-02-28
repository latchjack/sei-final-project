from django.urls import path
from .views import ArticleListView, ArticleDetailView, CommentListView, CommentDetailView, LikeListView, LikeDetailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<int:pk>/', ArticleDetailView.as_view()),
    path('<int:pk>/comments/', CommentListView.as_view()),
    path('<int:pk>/comments/<int:comment_pk>/', CommentDetailView.as_view()),
    path('<int:pk>/likes/', LikeListView.as_view()),
    path('<int:pk>/likes/<int:like_pk>/', LikeDetailView.as_view())
]