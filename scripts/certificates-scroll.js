function certificatesScrollL(){
    let left = document.getElementById('sertificatesScroll');
    left.scrollBy(-880,0)

    if(screen.width < 768){
        left.scrollBy(-440,0);
    }else{
        left.scrollBy(-880,0);
    }
}

function certificatesScrollR(){
    let right = document.getElementById('sertificatesScroll');
    right.scrollBy(880,0)

    if(screen.width < 768){
        right.scrollBy(440,0);
    }else{
        right.scrollBy(880,0);
    }
}
