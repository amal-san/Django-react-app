# Generated by Django 2.2.1 on 2019-05-31 10:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('challenges', '0004_auto_20190531_0936'),
    ]

    operations = [
        migrations.RenameField(
            model_name='file',
            old_name='document',
            new_name='file',
        ),
        migrations.RemoveField(
            model_name='file',
            name='name',
        ),
    ]
