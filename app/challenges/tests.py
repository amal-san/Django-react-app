from django.test import TestCase

# Create your tests here.
from .models import Challenge

class ChallengeModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Challenge.objects.create(name='first name')
        Challenge.objects.create(description='a description here')
    
    def test_title_content(self):
        challenge = Challenge.objects.get(id=1)
        expected_object_name = f'{challenge.name}'
        self.assertEquals(expected_object_name, 'first name')

    def test_description_content(self):
        challenge = Challenge.objects.get(id=2)
        expected_object_name = f'{challenge.description}'
        self.assertEquals(expected_object_name, 'a description here')
 