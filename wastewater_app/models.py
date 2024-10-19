from django.db import models

class EffluentParameter(models.Model):
    bod5 = models.FloatField()
    cod = models.FloatField()
    tss = models.FloatField()
    tds = models.FloatField()
    no2 = models.FloatField()
    no3 = models.FloatField()
    nh3 = models.FloatField()
    nh4 = models.FloatField()
    fog = models.FloatField()
