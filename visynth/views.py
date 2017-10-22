from django.shortcuts import render


def index(request):
    return render(request, 'index.html', None)

def generateData(request):
    if request.method == 'INP':
        url = request.INP['textfield']#, None)
        print(url)
