// JavaScript Document
//tab切换共用
    function tabs(tabTit,on,tabCon,tabMore){
	$(tabCon).each(function(){
	  $(this).children().eq(0).show();
	  });
	$(tabTit).each(function(){
	  $(this).children().eq(0).addClass(on);
	  });
	  $(tabMore).each(function(){
	  $(this).children().eq(0).show();
	  });
     $(tabTit).children().hover(function(){
        $(this).addClass(on).siblings().removeClass(on);
         var index = $(tabTit).children().index(this);
         $(tabCon).children().eq(index).show().siblings().hide();
		 $(tabMore).children().eq(index).show().siblings().hide();
    });
     }
	  function tabs1(tabTit,on,tabCon,tabMore){
	$(tabCon).each(function(){
	  //$(this).children().eq(0).show();
	  });
	$(tabTit).each(function(){
	  //$(this).children().eq(0).addClass(on);
	  });
	  $(tabMore).each(function(){
	  $(this).children().eq(0).show();
	  });
     $(tabTit).children().hover(function(){
        $(this).addClass(on).siblings().removeClass(on);
         var index = $(tabTit).children().index(this);
         $(tabCon).children().eq(index).show().siblings().hide();
		 $(tabMore).children().eq(index).show().siblings().hide();
    });
     }
  tabs(".tab-hd","active",".tab-bd",".tab-more");
    tabs1(".tab-hd1","active",".tab-bd1",".tab-more");
	  tabs("#tab-hd-5","active","#tab-bd-5",".tab-more");
 //细览文字大小控制	
function font_size(psize) {  
    $('.xl-nr p').css('fontSize', psize);  
}

$(function(){
	$("#erweima li ").mouseenter(function(){
		 $(this).children().eq(1).css("display","inline-block");
		})
		
	$("#erweima li").mouseleave(function(){
		$(this).children().eq(1).css("display","none");
		})	
	})

//检索
$(function(){
	$("#btn-search").click(function(){
		return doSearch();
	});
	
	$(".hotkey").each(function(){
		$(this).bind("click", function(){
			return doSearch($(this).html());
		});
	});
	
    $('#text-searchword').bind('keypress',function(event){
        if(event.keyCode == "13"){
			return doSearch();
        }
    });
	
	function doSearch(_param){
		if(_param==undefined){
			if($("#text-searchword").val()!=''&&$("#text-searchword").val()!='请输入搜索关键词...'){
				var keyword = $("#text-searchword").val();
				$("#searchword").val(keyword);
				$("#57_search").submit();	
			}else{
				alert("检索词不能为空！");
								  return false;
			}
				   
		}else{
			$("#searchword").val(_param);
			$("#57_search").submit();
		}
	}
});