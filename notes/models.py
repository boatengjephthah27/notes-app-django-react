from django.db import models

# Create your models here.


class Note(models.Model):
    """
        table with columns
        
        title - str
        activity/content - str
        date_created - datetime
        
    """
    
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.title