var m_name=document.getElementById("m-name");
var m_phone=document.getElementById("m-phone");
var m_email=document.getElementById("m-email");

function validationName(){
    var name=document.getElementById("name").value;
    if(name.length==0)
    {
        m_name.innerHTML="Enter The Name First";
        return false;
    }
    m_name.innerHTML='<i class="bi bi-check-circle-fill">'
    return true;
    if(m_phone)
}