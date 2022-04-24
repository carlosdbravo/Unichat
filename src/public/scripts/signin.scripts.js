
/*$("#collapseLogin").click(function() {
    $("#collapseCreate").hide();
    $("#collapseLogin").show();
});
*/

function mcSignin() {
    $("#collapseSignin").show();
    $("#collapseCreate").hide();
}
function mcCreate() {
    $("#collapseSignin").hide();
    $("#collapseCreate").show();
}

var btnCreateUser = document.querySelectorAll('#btnCreateUser')
$(btnCreateUser).click(function (e) {
    e.preventDefault();
    //seleccionar los inputs y evaluarlos
    var inputName = $('#createname').val();
    var inputEmail = $('#createemail').val();
    var inputPaswword = $('#createpassword').val();
    var inputConfirmpassword = $('#confirmpassword').val();
    var inputMatricula = $('#creatematricula').val();
    $.post('/create/user', { name: inputName, email: inputEmail, password: inputPaswword, confirmpassword: inputConfirmpassword, matricula: inputMatricula }).done(data => {
        console.log(data.errors);
        if(data.errors>0){
            for (var i = 0; i < data.errors.length; i++) {
                var divName='div'+i;
                var divName = document.createElement('div');
                divName.setAttribute('id', 'divErrors')
                divName.setAttribute('role', 'alert')
                divName.setAttribute('class', 'alert alert-danger d-flex align-items-center justify-content-between')
                divName.innerText = data.errors[i];
                var btnClose="btn"+i;
                var btnClose = document.createElement('button')
                btnClose.setAttribute('type', 'button')
                btnClose.setAttribute('class', 'btn-close')
            btnClose.setAttribute('data-bs-dismiss', 'alert')
            btnClose.setAttribute('aria-label', 'Close')
            divName.appendChild(btnClose)
            const conterrors = document.getElementById('conterrors')
            conterrors.append(divName)
            }
        }else{
            window.location.href='http://localhost:3000/index'
        }
        
        
       
        
       
        
        //type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"

    })
})
