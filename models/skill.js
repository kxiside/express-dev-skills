const skills = [
    {id: 1, skill: 'HTML', def: 'Front end text for a website'},
    {id: 2, skill: 'CSS', def: 'Styling and arranging the website'},
    {id: 3, skill: 'Javascript', def: 'Creating functions & displaying dynamic information for a website'}
]

module.exports = {
    getAll,
    getOne
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills
}

