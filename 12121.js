		function addLoadEvent(func) { 
			var oldonload = window.onload; 
			if (typeof window.onload != 'function') { 
				window.onload = func; 
			} else { 
			window.onload = function() { 
				oldonload(); 
				func(); 
				} 
			} 
		} 

		function insertAfter(newElement,targetElement) {				//设两个参数。新元素，目标元素
			var parent =targetElement.parentNode;						//保存属性值
			if (parent.lastChild ==targetElement) {						//检查目标元素是不是parent最后一个子元素
			 	parent.appendChild(newElement);							//追加元素，在目标元素之后
			 } else {
			 	parent.insertBefore(newElement,targetElement.nextSibling);		//插入到目标元素的下一个兄弟元素之前
			 }
		}

		
		
		

	function prepa() {
			if (!document.createElement) return false;					//检查
			if (!document.createTextNode) return false;
			if (!document.getElementById) return false;
			if (!document.getElementById("zxcv")) return false;
		var placeholder=document.createElement("img");
		placeholder.setAttribute("id","placeholder");						//创建节点，设置属性
		placeholder.setAttribute("src","images/1.jpg");
		placeholder.setAttribute("alt","my image gallery");
		var decoration=document.createElement("p");
		decoration.setAttribute("id","decoration");
		var desctxt =document.createTextNode("Choose an image");
		decoration.appendChild(desctxt);
		var gallery =document.getElementById("zxcv");
		insertAfter(placeholder,gallery);
		insertAfter(decoration,placeholder);
	}
		
		function prep() {
			if (!document.getElementsByTagName) return false;
			if (!document.getElementById) return false;
			if (!document.getElementById("zxcv")) return false;//检查
			var gallery = document.getElementById("zxcv");
			var links = gallery.getElementsByTagName("a"); 
			for (var i=0; i<links.length; i++) {
				links[i].onmouseover=function() {
				
				return showPic(this);
				
				}
			}
		}
		
function showPic(whichpic) {	//命名一个函数，参数名为whichpic
			
			if (!document.getElementById("placeholder")) return false;

			var source=whichpic.getAttribute("href");  //         将href作为参数传递给get....后赋值给soure

			var placeholder=document.getElementById("placeholder");//获取ID为 plACEHOLDER的图片赋值给...

			if (placeholder.nodeName !="IMG") return false;  //检查图片是否存在

			placeholder.setAttribute("src",source); //用set对placeholder元素的src属性进行刷新

			if (document.getElementById("description")) {  //如果存在，更新

				var text=whichpic.getAttribute("title");//当图片链接被点击时，title属性将被提取并赋值到text

				var description=document.getElementById("description");//获取id为decription的p元素，保存到变量里

				if (description.firstChild.nodeType==3) {//如果他的第一个子元素是文本节点，那么把第一个子节点的nodevalue属性值设置为text变量
					description.firstChild.nodeValue=text;
				} 
			  }
				return false
		 	}	
		 	addLoadEvent(prepa);
		 	addLoadEvent(prep);
		

			// alert (description.firstChild.nodeValue);

		// function countBodyChildren(){
		// 	var body_element=document.getElementsByTagName("body")[0];
		// 	alert (body_element.nodeType);
		// }
		// window.onload=countBodyChildren;
		

