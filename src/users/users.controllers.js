const uuid = require('uuid')

const usersDB = [    
    {
        id: '2b2d045e-5fe2-48f5-865f-b95dd92234cd',
        first_name: 'Juan',
        last_name: 'Valencia',
        email: 'juan@gmail.com',
        password: 'Juanvalencia01+',
        birthday: '2000/12/31'
    },
    {
        id: 'b7f863e3-ff6c-4527-9bb0-169427b6b65e',
        first_name: 'Luis',
        last_name: 'Perez',
        email: 'luis@gmail.com',
        password: 'Luisperez01+',
        birthday: '2000/01/01'
    }
]

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {

    const data = usersDB.find( e => e.id === id)
    return data
}

const createUser = (first_name, last_name, email, password, birthday) => {

    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    usersDB.push(newUser)

    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}