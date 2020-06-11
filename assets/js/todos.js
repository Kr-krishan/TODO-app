//color of each category chosen 
category=$('.show-category');

for(i=0;i<category.length;i++){
	if(category[i].innerText=="work"){
		category[i].style.backgroundColor="orange";
	}
	if(category[i].innerText=="personal"){
		category[i].style.backgroundColor="teal";
	}
	if(category[i].innerText=="cleaning"){
		category[i].style.backgroundColor="cyan";
	}
	if(category[i].innerText=="school"){
		category[i].style.backgroundColor="mistyrose";
	}
	if(category[i].innerText=="other"){
		category[i].remove();
	}
}


//mark-off completed task
$(function(){
    jQuery("input[type=checkbox]").change(function(){

        jQuery(this.parentElement.children[1]).toggleClass("completed");

    });
});
