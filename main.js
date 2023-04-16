let button = document.getElementById('button');
let output = document.getElementById('output');
let img = document.getElementById('img');
let images =
[
    'pics/1.jpg' , 'pics/2.jpg' , 'pics/3.jpg' , 'pics/4.jpg' , 'pics/5.jpg' , 'pics/6.jpg' , 'pics/7.jpg' , 'pics/8.jpg' , 'pics/9.jpg' , 'pics/10.jpg' ,
    'pics/11.jpg' , 'pics/12.jpg' , 'pics/13.jpg' , 'pics/14.jpg' , 'pics/15.jpg' , 'pics/16.jpg' , 'pics/17.jpg' , 'pics/18.jpg' , 'pics/19.jpg'
]
let quotes =
[
    '“Every tattoo is temporary, because we’re all slowly dying.” – Unknown',

    '“I used to think I was indecisive, but now I’m not so sure.” – Unknown',

    '“It could be that your purpose in life is to serve as a warning to others.” – Ashleigh Brilliant',

    '“Never put off until tomorrow what you can do the day after tomorrow.” – Mark Twain',

    '“The best things in life are actually really expensive.” – Unknown',

    '“The road to success is dotted with many tempting parking spaces.” – Will Rogers',

    '“Don’t worry about the world coming to an end today. It is already tomorrow in Australia.” – Charles Schulz',

    '“Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.” – Robert Bloch',

    '“Bad decisions make good stories.” – Ellis Vidler',

    '“Happiness is just sadness that hasn’t happened yet.” – Unknown',

    '“If the world didn’t suck we’d all fly into space.” – Unknown',

    '“Leadership is the art of getting someone else to do something you want done because he wants to do it.” – Dwight D. Eisenhower',

    '“Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.” – Marie von Ebner-Eschenbach',

    '“You must learn from the mistakes of others. You can’t possibly live long enough to make them all yourself.” – Sam Levenson',

    '“By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.” – Robert Frost',

    '“Even if you are on the right track, you’ll get run over if you just sit there.” – Will Rogers',

    '“Trying is the first step toward failure.” – Homer Simpson',

];

button.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
    let random = Math.floor(Math.random() * images.length);
    img.src = images[random];
})