# Generated by Django 2.2.1 on 2019-06-01 05:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('challenges', '0005_auto_20190531_1003'),
    ]

    operations = [
        migrations.DeleteModel(
            name='File',
        ),
        migrations.AddField(
            model_name='challenge',
            name='file',
            field=models.FileField(default=django.utils.timezone.now, upload_to=''),
            preserve_default=False,
        ),
    ]
