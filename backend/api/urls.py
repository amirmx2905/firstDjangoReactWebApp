from django.urls import path, include
from . import views

urlpatterns = [
    path("notes/",views.noteListCreate.as_view(),name="note-list"),
    path("notes/delete/<int:pk>",views.noteDelete.as_view(),name="note-delete"),
]