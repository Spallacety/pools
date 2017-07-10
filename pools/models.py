from django.db import models

# Create your models here.

class Question(models.Model):
  question_text = models.CharField(max_length=255)
  closed = models.BooleanField(default=False)
  pub_date = models.DateField()

  def __str__(self):
    return self.question_text

class Choice(models.Model):
  question = models.ForeignKey(Question, null=True)
  choice_text = models.CharField(max_length=255)
  votes = models.IntegerField()

  def __str__(self):
    return self.choice_text