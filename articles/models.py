# pylint: disable=no-member
from django.db import models
from django.utils import timezone

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Article(models.Model):
  title = models.CharField(max_length=50)
  # user = models.OneToOneRel()
  date = models.DateTimeField(default=timezone.now)
  text = models.CharField(max_length=1000)
  categories = models.ManyToManyField('categories.Category', related_name='categories', blank=True)


  def __str__(self):
    return self.title

class Comment(models.Model):
  text = models.CharField(max_length=140)
  owner = models.ForeignKey(User, related_name='comments', null=True, on_delete=models.CASCADE)
  article = models.ForeignKey(Article, related_name="comments", null=True, on_delete=models.CASCADE)   

  def __str__(self):
    return f'Comment by {self.owner} / {self.id} on {self.article}' # should either be article or title.
    
class Like(models.Model):
  like = models.IntegerField(default=0)
  owner = models.ForeignKey(User, related_name='likes', null=True, on_delete=models.CASCADE)
  article = models.ForeignKey(Article, related_name="likes", null=True, on_delete=models.CASCADE)

  def __str__(self):
    return f'Like by {self.owner} on {self.article}'
