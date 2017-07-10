from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^question/(?P<question_id>\d+)$', views.question, name='question'),
    url(r'^question/(?P<question_id>\d+)/vote$', views.vote, name='vote'),
    url(r'^question/(?P<question_id>\d+)/results$', views.results, name='results'),
    url(r'^question/(?P<question_id>\d+)/manage$', views.manage, name='manage'),
    url(r'^choice/(?P<choice_id>\d+)/increment$', views.increment_vote, name='increment_vote'),
    url(r'^choice/(?P<choice_id>\d+)/remove$', views.remove_choice, name='remove_choice'),
    url(r'^question/(?P<question_id>\d+)/open_question$', views.open_question, name='open_question'),
    url(r'^question/(?P<question_id>\d+)/close_question$', views.close_question, name='close_question'),
]