
$('#signIn').hide();
$('#alert').hide();
$('#alert2').hide();

$('#reg').on('click',function(){

    $('#signIn').show();
    $('#register').hide();

});

$('#new').on('click',function(){

    $('#signIn').hide();
    $('#register').show();

});

$('#signup').on('click',function(){

    $('#loader').fadeIn();
    let options = {
        'id' : 'true',
        'name': $('#name').val(),
        'email':$('#email').val(),
        'pass':$('#pass').val()
        
    };
    
    if($('#name').val() != "" && $('#email').val() != "" && $('#pass').val() != "" && $('#re_pass').val() != ""){

        if($('#pass').val() == $('#re_pass').val()){

            $.when($.post('/register', options)).done(function (_res) {
    
                if(_res.msg == 'success'){
    
                    /*--------------------Kyc data -------------------------*/
                   setTimeout(function(){
    
                        $('#loader').fadeOut();
                        $('#alert').show();
                        $('#signIn').show();
                        $('#register').hide();
                    },5000);                
                
                }
                else{
    
                    alert(_res.data);
                    $('#loader').fadeOut();
                }          
           });
        }
        else{
            alert('password does not match!');
            $('#loader').fadeOut();
        }
  }
  else{
    alert('fill all required field!');
    $('#loader').fadeOut();
  }
});

$('#signin').on('click',function(){

    $('#loader').fadeIn();

    let options = {
        'id' : 'true',
        'your_name': $('#your_name').val(),
        'your_pass': $('#your_pass').val()
    };
       
    if($('#your_name').val() != '' && $('#your_pass').val() != ''){

        $.when($.post('/signin12', options)).done(function (_res) {
    
            if(_res.msg == 'success'){

                /*--------------------Kyc data -------------------------*/
               setTimeout(function(){

                    window.location.href = '/home';

                },2000);                
            
            }
            else{

                $('#loader').fadeOut();
                // alert('user with password not match!!')
                $('#alert2').show();

            }
            
        });
    }
    else{
        alert('fill all required field!');
        $('#loader').fadeOut();
    }
});

$('#logout').on('click',function(){

    let options = {
        'logout' : 'true'
    };

          $.when($.post('/logoutUser', options)).done(function (_res) {
    
            if(_res.msg == 'logout'){

                /*--------------------Kyc data -------------------------*/
            
                window.location.href = '/';
            
            }
            else{

                $('#loader').fadeOut();
                // alert('user with password not match!!')
                $('#alert2').show();

            }
            
        });
    });
   