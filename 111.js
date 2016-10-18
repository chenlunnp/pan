function displayAbbreviations () {

	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode)return false;

	 var abbreviations = document.getElementsByTagName("abbr");		//获取所有abbr元素

	if (abbreviations.length < 1) return false;				//如果小于1，则表示没有，

    var defs = new Array();				

    for (var i = 0; i < abbreviations.length; i++) {		// 遍历这些缩略词
        
        if (abbreviations[i].childNodes.length < 1) continue;				//没有子节点，跳出，ie6错误

        var definition = abbreviations[i].getAttribute("title");			//得到title值
       
        var key = abbreviations[i].lastChild.nodeValue;			//只有一个节点， 得到文本节点的nodevalue属性
        
        defs[key] = definition;
    }

    var dlist = document.createElement("dl");			 // 创建定义列表

     for (key in defs) {				//对于数组里的每个键，都赋值给key
        
        var definition = defs[key];				//得到相应数组元素值
      
        var dtitle = document.createElement("dt");				// 创建dt元素
       
        var dtitle_text = document.createTextNode(key);				//用key的值创建文本节点
        
        dtitle.appendChild(dtitle_text);				//添加
        
        var ddesc = document.createElement("dd");
       
        var ddesc_text = document.createTextNode(definition);
       
        ddesc.appendChild(ddesc_text);					 // 把它们添加到定义列表
       
        dlist.appendChild(dtitle);
       
        dlist.appendChild(ddesc); 
    }
     if (dlist.childNodes.length < 1) return false;
     
    var header =document.createElement("h2");

    var header_txt =document.createTextNode("Abbreviations");    //	内容

    header.appendChild(header_txt);

    document.body.appendChild(header);					//标题

    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);
window.onload =displayAbbreviations;
