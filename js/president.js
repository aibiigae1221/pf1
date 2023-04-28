$(() => {
    /* 상단 메뉴 */
    $("#president section .wrap ul.nav li a").click(function(e){
        e.preventDefault();
        $("#president section .wrap ul.nav li").removeClass("current");
        $(this).parent().addClass("current");
    });

    $("#president section .wrap ul.nav li:first-child a").click();
    /* 상단 메뉴 */
    
    
    /* 갤러리 */ 
    $("#president section .wrap > div ul.gallery li a img").hover(function(){
        $(this).addClass("hovered");
    },function(){
        $(this).removeClass("hovered");
    });
    
    $("#president section .wrap > div ul.gallery li a").click(function(e){
        e.preventDefault();
        
        const src = $(this).find("img").attr("src");
        const container = $("#president section .wrap > div ul.gallery li:first-child figure");
        container.empty();
        container.append($(`<img src="${src}" alt="${src}" />`)); 
    });    
    $("#president section .wrap > div ul.gallery li:nth-child(2) a").click();
    /* 갤러리 */ 

    /* 커리어 */
    $("#president section .wrap ul.career li a").click(function(e){
        e.preventDefault();
        $("#president section .wrap ul.career li a.current").removeClass("current");
        $(this).addClass("current");

        const idx = $(this).parent().index();
        $(`ul.year > li`).addClass("hide");
        $(`ul.year > li:nth-child(${(idx+1)})`).removeClass("hide");
    });
    $("#president section .wrap ul.career li:first-child a").click();
    /* 커리어 */

    /* 변수 사용법 */ 
    let n; // 변수 초기화
    n = $(this).parent().index()+1; // 변수에 값을 저장한다.
    
});