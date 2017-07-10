from django.contrib import admin
from .models import *

# Register your models here.

class QuestionAdmin(admin.ModelAdmin):
  list_display = ('question_text', 'closed', 'pub_date')

class ChoiceAdmin(admin.ModelAdmin):
  list_display = ('choice_text', 'question', 'votes')

admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)