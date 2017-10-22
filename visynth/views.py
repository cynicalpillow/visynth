from django.shortcuts import render, render_to_response
from visynth.FuncToList import getChords, getParts
from visynth.ImgToFunc import imgToFunc
from django.shortcuts import render, render_to_response

from visynth.FuncToList import getChords, getParts
from visynth.ImgToFunc import imgToFunc


def index(request):
    return render(request, 'index.html')

def generateData(request):
    if request.method == 'POST':
        print(request.POST)
        url = request.POST["Search"]
        data = imgToFunc(url, 2)
        lst = getParts("blues", "A", data)
        lst.append(getChords(len(data[0])))
        return render_to_response("upload.html", {'derp' : lst})