var quote = new Array()
    quote[0] = '<h3>&quot;I think that\'s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.&quot;<br /><small>-Elon Musk</small></h3>'
    quote[1] = '<h3>&quot;I came to Berlin not to visit its museums and galleries, its operas, its theaters... but for the sake of seeing and speaking with the world\'s greatest living man. &quot;<br /><small>-Alexander von Humboldt</small></h3>'
    quote[2] = '<h3>&quot;Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them.&quot;<br /><small>-Dalai Lama</small></h3>'
    quote[3] = '<h3>&quot;Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.&quot;<br /><small>-Richard Feynman</small></h3>'
    quote[4] = '<h3>&quot;\'Science in itself\' is nothing, for it exists only in the human beings who are its bearers. \'Science for its own sake\' usually means nothing more than science for the sake of the people who happen to be pursuing it.&quot;<br /><small>-Rudolf Virchow</small></h3>'
    quote[5] = '<h3>&quot;Frustra fit per plura quod potest fieri per pauciora [It is futile to do with more things that which can be done with fewer]&quot;<br /><small>- William of Ockham</small></h3>'
    quote[6] = '<h3>&quot;Almost certainly, however, the first essential component of social justice is adequate food for all mankind.&quot;<br /><small>-Norman Borlaug</small></h3>'
    quote[7] = '<h3>&quot;The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.&quot;<br /><small>-Mark Zuckerberg</small></h3>'
    quote[8] = '<h3>&quot;The only source of knowledge is experience.&quot;<br /><small>-Albert Einstein</small></h3>'

	function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(message));
}

var msg;
function tweetHandler() {
  tweet($(msg).text());
  //tweet(msg);
}

$(document).ready(function() {
  $("#getMessage").on("click", function(){
    var randomquote = Math.floor(Math.random()*(quote.length-1));
    msg = quote[randomquote];
    $(".message").html(msg);
  });

  $('#tweetMessage').on('click', tweetHandler);

});
