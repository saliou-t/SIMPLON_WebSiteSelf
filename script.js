var donnees = [

	["Engagement",
	"Lorem Ipsum is simply dummy text of the printing and ty dummy texter took a galley of setting, remaining essentially unchanged.",
	],

	["Respect",
	"Lorem Ipsum is simply dummy text of the printing1500sset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since d.",
	],

	["Determination",
	"Lorem Ipsum is simply dummy text of the the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	],

	["Volonte",
	"Lorem Ipsum is simply dummy text of the printing and typesetting ind type specimen book. It has survived not only five centurie an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	],
];

	function ongletFocus(classe, number, marginT){
		var onglet_selected = document.getElementsByClassName(classe);
		var onglet_nodes = onglet_selected.childNodes;
		
		//alert(onglet_nodes[3].textContent);

		var element = document.getElementById('onglet-text-content');
		element.innerHTML = donnees[number][1];
		var onglet_text_title = document.getElementById('onglet_text_title');
		onglet_text_title.innerHTML = donnees[number][0]

		var triangle = document.getElementById('triangle');
		triangle.style.top = marginT+'px';
		
	}
	function search(){
		var formSearch = document.getElementById('formSearch');
		formSearch.style.visibility = 'visible'
	}
