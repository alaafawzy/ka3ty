from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, FileExtensionValidator
from django.utils.text import slugify
import re
import os

def bug_attachment(instance, filename):
    base_name, ext = os.path.splitext(filename)
    base_name = sanitize_file_name(base_name)
    return 'attachments/hall/{}/{}{}'.format(instance.hall_id, base_name, ext)

def sanitize_file_name(filename):
    # Remove all non-alphanumeric characters from the filename
    filename = re.sub(r'[^\w\s-]', '', filename)

    # Replace whitespace with hyphens
    filename = filename.strip().replace(' ', '-')

    # Use Django's slugify function to convert the filename to a URL-safe string
    filename = slugify(filename)

    return filename

class Hall(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    max_visitors = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    area = models.FloatField()
    hall_number = models.CharField(max_length=255, unique=True)
    max_meal = models.PositiveIntegerField()

class HallAttachments(models.Model):
    hall = models.ForeignKey('hall', related_name='hall_attachments', on_delete=models.CASCADE,db_index=True)
    file = models.FileField(upload_to=bug_attachment, blank=True, null=True,
                            validators=[
                                FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'mp4', 'mkv','gif','webm','pdf','doc','docx','ogg','avl','txt'])
                            ])
    def __str__(self):
        return str(self.file)