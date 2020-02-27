# pylint: disable=no-member
from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Article(models.Model):
  title = models.CharField(max_length=50)
  # user = models.OneToOneRel()
  date = models.CharField(max_length=10)
  text = models.CharField(max_length=1000)

  def __str__(self):
    return self.title

class Comment(models.Model):
  text = models.CharField(max_length=140)
  owner = models.ForeignKey(User, related_name='comments', null=True, on_delete=models.CASCADE)
  article = models.ForeignKey(Article, related_name="comments", null=True, on_delete=models.CASCADE)   

  def __str__(self):
    return f'Comment by {self.owner} / {self.id} on {self.article}' # should either be article or title.
    