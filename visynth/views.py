from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def generateData(request):
    print("REEEEEEEEEEEEEEEEEEEE")
    if request.method == 'POST':
        print(request.POST)
        url = request.POST["Search"]
        print(url)
        return HttpResponse("PLAY THE FUCKING MUSIC")
