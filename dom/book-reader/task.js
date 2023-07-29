const tags = document.querySelectorAll('.font-size');
const book = document.querySelector('.book__content')
function sizeRemove(){
  book.classList.remove('font-size_small');
  book.classList.remove('font-size_big');
}
function activeRemove() {
  tags.forEach(tag => { 
    tag.classList.remove('font-size_active');
  });
}
tags.forEach(tag => {
  tag.addEventListener('click', function() {
     event.preventDefault(); 
    const attributeValue = this.getAttribute('data-size'); 
    activeRemove();
    sizeRemove();
    if (attributeValue === "small"){
      book.classList.add('font-size_small');
    } else if(attributeValue === "big"){
     book.classList.add('font-size_big');
    }
   this.classList.add('font-size_active');
  });
});