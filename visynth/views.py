from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def generateData(request):
    print("REEEEEEEEEEEEEEEEEEEE")
    if request.method == 'POST':
        assert(1+1, 0)
        print(request.POST)
        #url = request.GET["Search"]#,)
