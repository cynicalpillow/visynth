var piano = Synth.createInstrument('piano');
function playNote(z, i){
	piano.play(z, i, 1);
	console.log("played " + z);
}
function playChord(a, b, c, d, i){
	piano.play(a, i, 1);
	piano.play(b, i, 1);
	piano.play(c, i, 1);
	piano.play(d, i, 1);
}
function playSong(theme){
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
    for(i = 0; i < result.length; i++){
        for(j = 0; j < result[i].length; j++){
            setTimeout(playNote, seconds, result[i][j], 4);
            countChord++;
            if(countChord%3==0){
                if(theme==0)setTimeout(playChord, seconds, chordListBlues[countChord/3][0], chordListBlues[countChord/3][1], chordListBlues[countChord/3][2], chordListBlues[countChord/3][3], 4);
                else if(theme = 1)setTimeout(playChord, seconds, chordListOriental[countChord/3][0], chordListOriental[countChord/3][1], chordListOriental[countChord/3][2], chordListOriental[countChord/3][3], 4);
            }
            seconds+=500;
            console.log(seconds);
        }
        countChord = 0;
    }
}
document.getElementById("submit").addEventListener("click", playSong, 0);