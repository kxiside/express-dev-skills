const skills = [
    {id: 163543, skill: 'HTML', def: 'Front end text for a website'},
    {id: 234635, skill: 'CSS', def: 'Styling and arranging the website'},
    {id: 332464, skill: 'Javascript', def: 'Creating functions & displaying dynamic information for a website'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills
}

