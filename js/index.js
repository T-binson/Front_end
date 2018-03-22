var list = {
	ul: document.getElementsByTagName('ul')[0],
	show: function(e) {
		alert(e.target.innerHTML);
	},
	click: function() {
		this.ul.addEventListener('click',function(e) {
			list.show(e);
		})
	}
};
list.click();