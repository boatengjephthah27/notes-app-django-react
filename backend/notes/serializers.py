from .models import Note
from rest_framework import  serializers



class NoteSerializer(serializers.ModelSerializer):
    """ 
        A serializer to convert the response data into json format
    """
    
    
    class Meta:
        model = Note
        fields = '__all__'