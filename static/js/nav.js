 window.onload=function (){

		var sUrl = window.location.href;
		if(sUrl.indexOf("http://www.gzns.gov.cn/nsdt")>=0){
			$("#along_menu .nav_nsdt").addClass("active").siblings().removeClass("active");
		}else if(sUrl.indexOf("http://www.gzns.gov.cn/zwgk")>=0){
			$("#along_menu .nav_zwgk").addClass("active").siblings().removeClass("active");
		}else if(sUrl.indexOf("http://www.gzns.gov.cn/tzns")>=0 ){

			$("#along_menu .nav_tzns").addClass("active").siblings().removeClass("active");
		}else if(sUrl.indexOf("http://www.gzns.gov.cn/gzfw")>=0){

			$("#along_menu .nav_gzfw").addClass("active").siblings().removeClass("active");
		}else if(sUrl.indexOf("http://www.gzns.gov.cn/hdjl")>=0){

			$("#along_menu .nav_hdjl").addClass("active").siblings().removeClass("active");
		}else if(sUrl.indexOf("http://www.gzns.gov.cn/gzjg")>=0){

			$("#along_menu .nav_gzjg").addClass("active").siblings().removeClass("active");
		}else{
			$("#along_menu .nav_sy").addClass("active").siblings().removeClass("active");
		}

}