from django.db import models


class Generate(models.Model):
    imgUrl = models.CharField(max_length=500)