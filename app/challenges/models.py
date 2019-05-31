from django.db import models

# Create your models here.
class Challenge(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    class Meta:
        verbose_name = "Challenge"
        verbose_name_plural = "Challenges"
    
    def __str__(self):
        return self.name

class File(models.Model):
    file = models.FileField(blank=False, null=False)
 
    class Meta:
        verbose_name="File"
        verbose_name_plural="Files"

    def __str__(self):
        return self.file.name