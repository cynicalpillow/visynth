from django.views.generic import CreateView
from visynthapp.models import Generate

class CreateGenerateView(CreateView):
    model = Generate
    template_name = "upload.html"
    fields = ['imgUrl']
    sucess_url = '/'
