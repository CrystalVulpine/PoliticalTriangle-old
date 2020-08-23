function calculateScore() {
	
	var questionCount = 11;
	
	// questions with only moderate answers
	var moderateAnswers = 4;
	
	// questions with strong answers
	var strongAnswers = 7;
	
	var moderateWeight = 1.0;
	var strongWeight = 2.0;
	
	// adds the submitted answers to the results URL, useful for feedback from test takers
	var answers = '';
	var right = 0.0;
	var left = 0.0;
	var lib = 0.0;

	for (let q = 1; q <= questionCount; q++) {
		
	    let s = document.getElementById("s" + q);
	    
	    if (s.options[s.selectedIndex].value === "Neutral") {
	    	answers += 'n';
	    } else if (s.options[s.selectedIndex].value === "Left1") {
			left += moderateWeight;
			answers += 'l1';
	    } else if (s.options[s.selectedIndex].value === "Left2") {
	    	left += strongWeight;
	    	answers += 'l2';
	    } else if (s.options[s.selectedIndex].value === "Lib1") {
	    	lib += moderateWeight;
	    	answers += 'i1';
	    } else if (s.options[s.selectedIndex].value === "Lib2") {
	    	lib += strongWeight;
	    	answers += 'i2';
	    } else if (s.options[s.selectedIndex].value === "Right1") {
	    	right += moderateWeight;
	    	answers += 'r1';
	    } else if (s.options[s.selectedIndex].value === "Right2") {
	    	right += strongWeight;
	    	answers += 'r2';
	    }
	}

	// divide by the points in total for each axis (sum of the max amount of points for each question)
	right /= (moderateAnswers * moderateWeight) + (strongAnswers * strongWeight);
	left /= (moderateAnswers * moderateWeight) + (strongAnswers * strongWeight);
	lib /= (moderateAnswers * moderateWeight) + (strongAnswers * strongWeight);

	// convert to a number between 0 and 10 rounded to the nearest hundredth
	right = Math.round(right * 1000) / 100;
	left = Math.round(left * 1000) / 100;
	lib = Math.round(lib * 1000) / 100;

	window.location.href = "results.html?left=" + left + "&right=" + right + "&lib=" + lib + "&answers=" + answers;

}
