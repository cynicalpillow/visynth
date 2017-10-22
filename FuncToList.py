from ImgToFunc import imgToFunc

scales =\
    {
    "pentatonic" :
        {
        "A" : ["A", "C", "D", "E"],
        "D": ["D", "F", "G", "A"],
        "E": ["E", "G", "A", "B"]
        },
    "blues" :
        {
            "A": ["A", "C", "D", "Eb", "E"],
            "D": ["D", "F", "G", "Ab", "A"],
            "E": ["E", "G", "A", "Bb", "B"]
        },
    }

def genScale(type, ch):
    ret = []
    for i in range(1, 6):
        for let in scales[type][ch]:
            ret.append(let + str(i))
    return ret

def getMelody(type, let, clst):
    ret = []
    cScale = genScale(type, let)
    scaleLen = len(cScale)

    for i in range(len(clst)):
        ret.append(cScale[clst[i]%scaleLen])

    return ret

print(getMelody("pentatonic", "A", imgToFunc("https://i.ytimg.com/vi/RvaNnvl2Q8g/maxresdefault.jpg", 2)[0]))
