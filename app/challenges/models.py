from django.db import models

# Create your models here.
class Challenge(models.Model):
    name = models.CharField(max_length=50 )
    description = models.TextField(max_length=200)
    file_name = models.CharField(max_length=50,null=True,blank=True)
    file = models.FileField(null=True,blank=True)
    flag = models.CharField(max_length=50,null=False)
    fake_flag = models.CharField(max_length = 50,null=True,blank=True)
    hint = models.TextField(max_length=200,blank=False)
    class Meta:
        verbose_name = "Challenge"
        verbose_name_plural = "Challenges"
    
    def __str__(self):
        return self.name


        
class User(models.Model):
    name = models.CharField(max_length=60,blank=False)
    email = models.EmailField(null=False,blank=False)
    school = models.CharField(max_length=300)
    dob = models.DateField(auto_now=False,name='date_of_birth')
    password = models.CharField(max_length=30,blank=False,null=False)


    class Meta:
        verbose_name="User"
        verbose_name_plural="Users"

    def __str__(self):
        return self.name