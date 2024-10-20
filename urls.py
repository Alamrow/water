from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('wastewater_app/', include('wastewater_app.urls')),
]
