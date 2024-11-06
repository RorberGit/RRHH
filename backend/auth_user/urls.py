from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path("create/", views.CreateUser.as_view(), name="Create"),
    path("update/<pk>/", views.UpdateUser.as_view(), name="Update"),
    path("login/", views.LoginUser.as_view(), name="Login"),
    path("logout/", views.LogoutUser.as_view(), name="Logout"),
    path("listing/", views.ListUser.as_view(), name="Listing"),
    path("retrieve/<pk>/", views.RetrieveUser.as_view(), name="Retrieve"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
