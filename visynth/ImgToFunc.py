import requests
import re
import json
def imgToFunc(imgUrl, maxInstruments):
    colourQuantize = requests.get("https://www.wolframcloud.com/objects/d2190251-771a-4623-ad65-58326ba3e3a3?i="+imgUrl+"&n="+str(maxInstruments))
    edgeDetect = requests.get("https://www.wolframcloud.com/objects/c8125274-f7b2-42c4-86f4-4692b8c7e1e7?i="+imgUrl)
    t = colourQuantize.text
    st = t.index('{')
    ed = t[st:].index(']')+st
    colours = json.loads(t[st:ed].replace('{', '[').replace('}', ']'))
    t = edgeDetect.text
    st = t.index('{')
    ed = t[st:].index(']')+st
    edges = json.loads(t[st:ed].replace('{', '[').replace('}', ']'))
    blocksz = len(edges[0])//100
    nn = 100
    d = {}
    l = []
    if blocksz == 0:
        nn = len(edges[0])
        blocksz = 1
    for i in range(len(edges)):
        for j in range(nn):
            for k in range(j*blocksz, (j+1)*blocksz):
                if edges[i][k]==0: continue
                if tuple(colours[i][k]) in d:
                    lind = d[tuple(colours[i][k])]
                else:
                    d[tuple(colours[i][k])]=len(l)
                    lind = len(l)
                    l.append([-1 for p in range(nn)])
                if l[lind][j] == -1:
                    l[lind][j] = len(edges)-1-i
    return l
