from django.db import models

# Create your models here.
class Challenge(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    class Meta:
        verbose_name = "Challenges"
        verbose_name_plural = "Challenge"
    
    def __str__(self):
        return self.name