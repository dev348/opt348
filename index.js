var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth(){
  
    var number = '+91 ' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('Successful text transmission');


        var code = prompt('Please enter your verification number', '');

        if(code === null) return;

        e.confirm(code).then(function (result) {
            console.log('Authentication success', result.user);

            document.querySelector('label').textContent += 'good ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('Authentication failure', error);
            
        });

    })
    .catch(function (error) {
        console.error('Text transmission failure', error);

    });

  }

  