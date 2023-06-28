document.addEventListener('scroll', function(){
    /*pass in section where nav color should be dark*/
    var section = document.getElementById('final');
    /*pass in nav itself*/
    var navbar = document.querySelector('nav');

    var navbarheight = navbar.offsetHeight;
    /* get the top offset (position) of the section*/
    var sectionOffsettop = section.offsetTop;
    /* This next section takes the windows top position relative to documents top position*/
    var totaloffset = sectionOffsettop - navbarheight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    /* if the scrolling windows top section matches or goes past the sections top section*/
    if (scrollTop >= totaloffset){
        /*Add a white background to the navbar*/
        navbar.classList.add('bg-white');
    }
    else{
        /*otherwise if not in section remove the 'bg-white' class*/
        navbar.classList.remove('bg-white');
    }

    

})