let questions =  document.querySelectorAll('.question');
let arrows = document.querySelectorAll('.arrow');
let answers = document.querySelectorAll('.answer');

questions = Object.entries(questions);
arrows = Object.entries(arrows);
answers = Object.entries(answers);

for (let [i, arrow] of arrows.entries()) {

	arrow[1].addEventListener('click', () => {
		
		if(answers[i][1].classList.contains('hidden')){
			questions[i][1].children[0].style.fontWeight = 'bold';
			answers[i][1].classList.remove('hidden');
			arrow[1].classList.add('arrowUp');
		}else{
			questions[i][1].children[0].style.fontWeight = 'normal';
			answers[i][1].classList.add('hidden');
			arrow[1].classList.remove('arrowUp');
		}
	})
}

