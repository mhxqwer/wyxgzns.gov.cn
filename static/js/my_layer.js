


    $(function(){
      var str=window.location.href;
      var regexp = /.*\/\/([^\/]*)/;
      url_=str.match(regexp);
    });

  //点击外链询问离开
    $(document).on('click','a',function(){
      var o = $(this);
      var href = o.attr('href');
      var host = getHost(href);
      var ckhost = host.indexOf(url_[1]);

     //加入不需要外链提示的链接
      if(href.indexOf("search.gd.gov.cn") >= 0 ) { 
        //console.log("search.gd.gov.cn");
        var ckhost = 0;

      }else if(href.indexOf("gz12345.gz.gov.cn") >= 0 ) { 
        //console.log("gz12345.gz.gov.cn");
        var ckhost = 0;

      }else if(href.indexOf("gov.cn") >= 0 ) { 
        //console.log("gz12345.gz.gov.cn");
        var ckhost = 0;
      }else if(href.indexOf("nansha.guangdong.chinadaily.com.cn") >= 0 ) { 
        //console.log("gz12345.gz.gov.cn");
        var ckhost = 0;
      }
      //加入不需要外链提示的链接
      

      if( host != 'null' && ckhost < 0 && typeof(href)!='undefined' && o.data('ask')!='1'){
          o.removeAttr('href');
          var jx = true;
          var w = '480px';
          var h = '170px';
          if(window.screen.width < 768) { w = '90%'; h = '170px';}
          // var cf = layer.confirm('<div style="margin-top:30px; font-size:16px;">您访问的链接即将离开“'+document.querySelector("title").innerText+'”门户网站 是否继续？</div>', {
          var cf = layer.confirm('<div style="margin-top:30px; font-size:16px;">您访问的链接即将离开“广州市南沙区人民政府”门户网站 是否继续？</div>', {
              btn:[ '继续访问', '放弃' ],
              title: false,
              shade: 0.7,
              area: [w, h],
              cancel: function(index){ o.attr('href',href); }
          }, function() {
              o.attr('href',href);
              o.attr('target','_blank');
              o.data('ask','1');
              layer.close(cf);
              o[0].click();
          }, function() {
              o.attr('href',href);
          });
      }
  });

  //截取URL域名部份
  var getHost = function(url) {
      var host = "null";
      if (typeof url == "undefined" || null == url) url = window.location.href;
      var regex = /.*\/\/([^\/]*)/;
      var match = url.match(regex);
      if (typeof match != "undefined" && null != match) host = match[1];
      return host;
  };





    //select触发提示函数
   function demo(o) {
      // body... 
      var a  =  document.getElementById(o);
    
      var w = '480px';
      var h = '170px';
      var flag = a.value.indexOf(url_[1]);
      
      if(flag < 0){
          var cf = layer.confirm('<div style="margin-top:30px; font-size:16px;">您访问的链接即将离开“'+document.querySelector("title").innerText+'”门户网站 是否继续？</div>', {
            btn:[ '继续访问', '放弃' ],
            title: false,
            shade: 0.7,
            area: [w, h],
            cancel: function(index){  }
          }, function() {
           window.open(a.value);
           layer.close(cf);
           a[0].click();
         }, function() {

         });
      }else{
        window.open(a.value,"_blank");
      }


    }

    //为下拉选择添加事件
    function bindSelected(sign){
       var parentCotainer;
       if(document.querySelector("."+sign)){
           var parentCotainer=document.querySelector("."+sign);
           for(var i=0;i<parentCotainer.children.length;i++){
              //设定id
              parentCotainer.children[i].id="selId"+i

              parentCotainer.children[i].addEventListener("change",(function(i){
                return function(event){
                  if(this.selectedIndex==0){
                    return;
                  }else{
                    demo(event.target.id);
                  }
                  
                }
              }(i)),false);
           }
       }else if(document.querySelector("#"+sign)){
           var parentCotainer=document.querySelector("#"+sign);
           for(var i=0;i<parentCotainer.children.length;i++){
              //设定id
              parentCotainer.children[i].id="selId"+i

              parentCotainer.children[i].addEventListener("change",(function(i){
                return function(event){
                  if(this.selectedIndex==0){
                    return;
                  }else{
                    demo(event.target.id);
                  }
                  
                }
              }(i)),false);
           }
       }else{
          throw "out of expect!!!";
       }

    }



