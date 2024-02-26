const AddUser = (req, res) => {
    res.render ('add_user', {title: 'Agregar usuario'})
}

module.exports = {AddUser};