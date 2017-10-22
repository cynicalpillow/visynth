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

chords =\
[
    [
        ["A", "C”, “E”, “G"],
        ["D", "F", "A", "C"],
        ["A", "C", "E", "G"],
        ["A", "C", "E", "G"],
        ["D", "F", "A", "C"],
        ["D", "F", "A", "C"],
        ["A", "C", "E", "G"],
        ["A", "C", "E", "G"],
        ["E", "G", "B", "D"],
        ["D", "F", "A", "C"],
        ["A", "C", "E", "G"],
        ["E", "G", "B", "D"],
    ]
]

def genScale(type, ch):
    """
    generates the given type of scale: minor pentatonic or blues, given a starting note
    :param type: string
    :param ch: string
    :return: list
    """
    ret = []
    for i in range(1, 6):
        for let in scales[type][ch]:
            ret.append(let + str(i))
    return ret

def getMelody(type, let, clst):
    """
    returns the melody given the an integer input array from ImgToFunc
    :param type: string
    :param let: string
    :param clst: list
    :return: list
    """
    ret = []
    cScale = genScale(type, let)
    scaleLen = len(cScale)

    for i in range(len(clst)):
        if(clist[i] != -1):
            ret.append(cScale[clst[i]%scaleLen])
        else:
            ret.append("")

    return ret

def getParts(type, let, lists):
    """
    generates the notes to be played given the lists in lists
    :param type: string
    :param let: string
    :param lists: list of lists
    :return: list of lists
    """
    parts = []
    for list in lists:
        parts.append(getMelody(type, let, list))
    return parts
    background = [];
    chordLen = len(chords)
    for i in range(len(parts)):
        background.append(chords[i%chordLen])
    parts.append(background)
    return parts

#print(getMelody("pentatonic", "A", imgToFunc("https://i.ytimg.com/vi/RvaNnvl2Q8g/maxresdefault.jpg", 2)[0]))
