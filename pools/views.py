from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def index(request):
  opened_questions = Question.objects.filter(closed=0).order_by('-pub_date')
  closed_questions = Question.objects.filter(closed=1).order_by('-pub_date')
  return render(request, 'index.html', {'opened_questions': opened_questions, 'closed_questions': closed_questions})

def question(request, question_id):
  question = Question.objects.get(id=question_id)
  choices = Choice.objects.filter(question=question)
  return render(request, 'question.html', {'question': question, 'choices':choices})

def vote(request, question_id):
  question = Question.objects.get(id=question_id)
  choices = Choice.objects.filter(question=question)
  return render(request, 'vote.html', {'question': question, 'choices':choices})

def results(request, question_id):
  question = Question.objects.get(id=question_id)
  choices = Choice.objects.filter(question=question)
  all_votes = 0
  for choice in choices:
    all_votes += choice.votes
  return render(request, 'results.html', {'question': question, 'choices':choices, 'all_votes': all_votes})

def manage(request, question_id):
  question = Question.objects.get(id=question_id)
  choices = Choice.objects.filter(question=question)
  return render(request, 'manage.html', {'question': question, 'choices':choices})

def increment_vote(request, choice_id):
  choice = Choice.objects.get(id=choice_id)
  choice.votes += 1
  choice.save()
  return redirect('vote', question_id=choice.question.id)


def remove_choice(request, choice_id):
  choice = Choice.objects.get(id=choice_id)
  choice.delete()
  return redirect('manage', question_id=choice.question.id)

def open_question(request, question_id):
  question = Question.objects.get(id=question_id)
  question.closed = False
  question.save()
  return redirect('manage', question_id=question.id)

def close_question(request, question_id):
  question = Question.objects.get(id=question_id)
  question.closed = True
  question.save()
  return redirect('manage', question_id=question.id)