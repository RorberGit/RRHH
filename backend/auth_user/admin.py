from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Usuario
from django.contrib.auth.forms import (
    AdminPasswordChangeForm,
    UserChangeForm,
    UserCreationForm,
)

# Register your models here.


class UserAdmin(BaseUserAdmin):
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    list_display = ["username", "email", "is_superuser", "is_admin", "is_active"]
    list_filter = ["is_staff", "is_superuser", "is_active", "is_admin"]
    fieldsets = [
        (None, {"fields": ["password"]}),
        ("Información Personal", {"fields": ["username", "email", "empleados"]}),
        ("Permisos", {"fields": ["is_superuser", "is_admin", "is_staff"]}),
        ("Fechas Importantes", {"fields": ["last_login"]}),
    ]

    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": [
                    "username",
                    "email",
                    "empleados",
                    "password1",
                    "password2",
                    "is_superuser",
                    "is_admin",
                    "is_staff",
                ],
            },
        ),
    ]
    search_fields = ["username"]
    ordering = ["username"]
    filter_horizontal = []


admin.site.register(Usuario, UserAdmin)
admin.site.unregister(Group)
