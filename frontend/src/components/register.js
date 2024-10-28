import photo_reg from '../images/register.png'

function Register(){
    function send_data() {
        let obj_data = {
            'id': document.getElementById("id").value,
            'name': document.getElementById("name").value,
            'lastname': document.getElementById("lastname").value,
            'birthday': document.getElementById("birthday").value
        }
        fetch('http://127.0.0.1:5000/register_user', {
            'method': 'post',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(obj_data)
        })
        .then(resp => resp.json())
        .then(data => alert(data.response))
    }
    return(
        <div>
            <img className='img-reg' src={photo_reg} /> <br/> <br/>
                <label> Id </label> <input id="id"></input> <br/> <br/>
                <label> Name </label> <input id="name"/> <br/> <br/>
                <label> Lastname </label> <input id="lastname"></input> <br/> <br/>
                <label> Birthday </label> <input id="birthday"></input> <br/> <br/>
                <button className='btn-reg-cons' onClick={send_data}> Register </button>
        </div>
    )
}

export default Register