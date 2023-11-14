document.addEventListener('DOMContentLoaded', () => {
    let words = ['Programador', 'Developer', 'Spiderman', 'Batman'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 100;

    const block_typing = document.querySelector('.typing');

    function typingtext(){
        setInterval(function () {
            if(forwards){
                if(offset >= words[i].length){
                    ++skip_count;
                    if(skip_count == skip_delay){
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if(offset == 0){
                    forwards = true;
                    i++;
                    offset = 0;
                    if(i >= len){
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if(skip_count == 0){
                if(forwards){
                    offset++;
                } else {
                    offset--;
                }
            }
            block_typing.textContent = part;
        }, speed);
    }
    typingtext();
});
