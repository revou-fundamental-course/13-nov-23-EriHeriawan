                
                var slideIndex = 1;
                    showDivs(slideIndex);

                    function plusDivs(n) {
                        showDivs(slideIndex += n);
                    }

                    function showDivs(n) {
                        var i;
                        var x = document.getElementsByClassName("slider");
                        if(n > x.length) {slideIndex = 1};
                        if (n < 1) {slideIndex = x.length};
                        for (i = 0; i < x.length; i++) {
                            x[i].style.display = "none";
                        }
                        x[slideIndex-1].style.display = "block";
                    }

                    setInterval(() =>{
                        plusDivs(1);
                    },5000);


                    function validateForm(){
                        const name = document.forms['message-form']['name-input'].value;
                        const email = document.forms['message-form']['email-input'].value;
                        const select = document.forms['message-form']['select-input'].value;

                        if (name == ''|| email == '' || select ==''){
                            // document.getElementById("error-name").innerHTML = "tidak boleh kosong!"
                            alert('input has not is empty');
                        }else{
                            alert('message send');
                            }
                            return false;

                    }
