function socialScoreShare() {
  let left = (screen.width/2)-(250/2);
  let top = (screen.height/2)-(450/2);

  caption = 'Pepper - The Chicken';
  title = 'Pepper - The Chicken!';
  description = 'I just scored '+chicken.score+' on Pepper - The Chicken. Can you beat it?';

  window = window.open ('https://www.facebook.com/dialog/share?app_id=998325273610775&href=https://daltonmenezes.github.io/pepper-the-chicken/&picture=https://daltonmenezes.github.io/pepper-the-chicken/src/sprites/pepper-fb.png&title='+title+'&caption='+caption+'&description='+description, '_blank', 'width=250, height=250, top='+ top +', left='+ left);
}
