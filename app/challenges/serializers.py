from rest_framework import serializers
from .models import Challenge


class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'description',
            'file_name',
            'file',
            'flag',
            'hint',
            'fake_flag'
        )
        model = Challenge
