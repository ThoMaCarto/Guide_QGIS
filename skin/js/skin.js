// Skin specific Javascript code - use sparingly and with caution
(function (){
	if (scPaLib.checkNode(".tplGuide", sc$("page"))) {
		document.body.fMenu = localStorage.getItem("menuActive")!="false";
		if (document.body.fMenu){
			document.body.classList.add("menuActive");
		}else{
			document.body.classList.add("menuInactive");
		}
		var vBtn = scDynUiMgr.addElement("button", sc$("header"), "showMenu");
		vBtn.onclick = function(){
			if (document.body.fMenu){
				document.body.classList.remove("menuActive");
				document.body.classList.add("menuInactive");
			} else {
				document.body.classList.add("menuActive");
				document.body.classList.remove("menuInactive");
			}
			document.body.fMenu = !document.body.fMenu;
			if(responsive.getColumns()==2) localStorage.setItem("menuActive", document.body.fMenu);
		}
		vBtn.innerHTML = '<span>☰</span>';
		responsive.registerListener("layoutChange", function(pNumCols){
			if (pNumCols == 1){
				document.body.classList.add("oneColumn");
				document.body.classList.remove("twoColumn");
				if (document.body.fMenu){
					document.body.fMenu = false;
					document.body.classList.remove("menuActive");
					document.body.classList.add("menuInactive");
				}
			} else {
				document.body.classList.remove("oneColumn");
				document.body.classList.add("twoColumn");
				if (!document.body.fMenu && localStorage.getItem("menuActive")!="false"){
					document.body.fMenu = true;
					document.body.classList.add("menuActive");
					document.body.classList.remove("menuInactive");
				}
			}
		});
	}
})();
