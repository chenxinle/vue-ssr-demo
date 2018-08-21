import Network from '../../mods/Network'

function getUserById(id) {
  return Network.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

export default {
  getUserById
}
