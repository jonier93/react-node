import exp from 'express'
import ruta from 'path'
import cors from 'cors'

let app = exp()
let dir_root = ruta.resolve()
app.use(exp.static("frontend/build"))
app.use(exp.json())
//app.use(exp.urlencoded())
app.use(cors())

app.listen('5000', function(pet, res){
    console.log("Server started")
})

app.get('', function(pet, resp){
    resp.sendFile(dir_root + "/frontend/build/index.html")
})

app.get('/register_page', function(pet, resp){
    resp.sendFile(dir_root + "/frontend/build/index.html")
})

app.post("/register_user", (pet, resp) => {
    console.log("Hola")
    let {id, name, lastname, birthday} = pet.body
    console.log(id + name + lastname + birthday)
    let obj_message = {'response': 'User registered'}
    resp.send(obj_message)
})