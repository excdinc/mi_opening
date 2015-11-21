// JavaScript Document



;(function($) {
	$.fn.miOp = function( params ){
		var element = this;
		var screenSize = $(window).width()
		var pageNum= 5;
		var pageSpeed = 300;
		var spark; 
		var sparkSpeed = 2000;
		var sparkSize = 50;
		
		var sparkLine;
		var sparkLineThickness = 10;
		
		
		
		$('html,body').animate({
			scrollLeft : 0 + 'px'
		},1)
		
		//Element
		this.append('<ul>');
		for(var i=0;i < pageNum; i++){
			element.find('ul').append('<li>');
		}
		
		
		//CSS
		element.css({
			position : 'relative' 
			,width : screenSize * pageNum + 'px'
			,height:'100%'
			,backgroundColor:'#000'
			,overflow:'visible'
		})
		
		
		element.find('ul').css({
			width: '100%'
			,height: '100%'
			,margin : 0
			,padding : 0
			
		})
		
		element.find('li').css({
			listStyle : 'none'
			,width : screenSize + 'px'
			,height : '100%'
			,float:'left'
			,position:'absolute'
		})
		
		var num = 0;
		element.find('li').each(function(){
			
			var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
			$(this).css({
				backgroundColor : '#' + color
				,left :  screenSize * num
			})	
			num++;
		})
		
		element.append('<div id="mi-spark"><img src="img/spark.gif"></div>')
		spark = $('#mi-spark');
		
		element.append('<div id="mi-spark-line"></div>')
		sparkLine = $('#mi-spark-line');
		
		
		
		spark.css({
			width : sparkSize + 'px'
			,height : sparkSize + 'px'
			,borderRadious : '50px'
			,backgroundColor : '#FFF'
			,position : 'absolute'
			,top : (element.height() -sparkSize) / 2 + 'px'
			,left:0
			,zIndex : 11
		})
		
		spark.find('img').css({
			width : sparkSize + 'px'
			,height : sparkSize + 'px'
		})
		
		sparkLine.css({
			position : 'absolute'
			,top : (element.height() - sparkLineThickness) / 2 + 'px'
			,right : 0
			,height : sparkLineThickness  + 'px'
			,width : screenSize * pageNum
			,backgroundColor : '#FFF'
			,zIndex : 10
			
		})
		
		var currentPage = 1;
		function sparkAnimation(page){
			spark.animate({
				left : screenSize * page + 'px'
			},sparkSpeed,'linear', function(){
				pageAnimation(page);
			})
			
			sparkLine.animate({
				width : screenSize * (pageNum - currentPage) + 'px'
				,right : 0
			},sparkSpeed,'linear')
		}
		
		
		function pageAnimation(page){
			
			$('html,body').animate({
				scrollLeft : screenSize * page + 'px'
			},pageSpeed, 'linear', function(){
				if(currentPage < pageNum){
					currentPage++
					sparkAnimation(currentPage)
				}
			})
			/*
			if(currentPage < pageNum){
				currentPage++
				sparkAnimation(currentPage)
			}
			*/
			
		}
		
		
		function run(){
			sparkAnimation(currentPage)
		}
		
		run();
		
		
	
	
	};
	
	
})(jQuery);