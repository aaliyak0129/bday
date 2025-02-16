function check() {
    if ( document.forms[0].elements[0].checked == true && document.forms[0].elements[1].checked == true && document.forms[0].elements[2].checked == true ) {
      if ( ! $('.wrapper').hasClass('throb')) {
          // Do things on Nav Close
          $('.wrapper').addClass('throb');
      } 
    } else {
      if ($('.wrapper').hasClass('throb')) {
          // Do things on Nav Close
          $('.wrapper').removeClass('throb');
      }
    }
   }
   function createLip() {
    let lip = document.createElement('div');
    lip.classList.add('lip');
    lip.innerHTML = '💋';
    lip.style.left = `${Math.random() * window.innerWidth}px`;
    lip.style.top = `${Math.random() * window.innerHeight}px`;
    lip.style.position = 'absolute';
    document.body.appendChild(lip);
    
    setTimeout(() => {
        lip.remove();
    }, 5000);
}

setInterval(createLip, 300); // Generate a new lip every 300ms
function check() {
    if (
        document.forms[0].elements[0].checked &&
        document.forms[0].elements[1].checked &&
        document.forms[0].elements[2].checked
    ) {
        if (!$('.wrapper').hasClass('throb')) {
            $('.wrapper').addClass('throb');
        }
    } else {
        $('.wrapper').removeClass('throb');
    }
}

function createLip() {
    let lip = document.createElement('div');
    lip.classList.add('lip');
    lip.innerHTML = '💋';
    lip.style.left = `${Math.random() * window.innerWidth}px`;
    lip.style.top = `${Math.random() * window.innerHeight}px`;
    lip.style.position = 'absolute';

    document.body.appendChild(lip);

    setTimeout(() => {
        lip.remove();
    }, 5000);
}

setInterval(createLip, 300); // Generate a new lip every 300ms
