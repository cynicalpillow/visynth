var instrument = Synth.createInstrument('piano');
function playNote(z, i){
	instrument.play(z, i, 1);
}
function playChord(a, b, c, d, i){
	instrument.play(a, i, 0.7);
	instrument.play(b, i, 0.7);
	instrument.play(c, i, 0.7);
	instrument.play(d, i, 0.7);
}
function playSong(theme, result){
    var countChord = 0;
    var chordListBlues = [
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D']
];
	var chordListOriental = [
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D']
];
	var seconds = 0;
	var cc = 0;
    for(i = 0; i < result.length; i++){
        for(j = 0; j < result[i].length; j++){
            setTimeout(playNote, seconds, result[i][j], 4);
            countChord++;
            if(countChord%3==0){
                if(theme==0)setTimeout(playChord, seconds, chordListBlues[cc][0], chordListBlues[cc][1], chordListBlues[cc][2], chordListBlues[cc++][3], 4);
                else if(theme = 1)setTimeout(playChord, seconds, chordListOriental[cc][0], chordListOriental[cc][1], chordListOriental[cc++][2], chordListOriental[countChord/3][3], 4);
            }
            seconds+=450;
        }
        countChord = 0;
    }
}
//document.getElementById("submit").addEventListener("click", playSong, 1);