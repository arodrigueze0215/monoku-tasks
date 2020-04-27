const BASE_URL = 'https://monoku-tasks.herokuapp.com';
const token = 'FXouHilAxLw1LT5ttZpa';


async function callApi(endpoint, options = {}) {

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = `${BASE_URL}/${token}${endpoint}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  task: {
    list() {
      //throw new Error('Not found')
      return callApi('/all');
    },
    create(task) {
      //throw new Error('500: Server error')
      return callApi(`/add`, {
        method: 'POST',
        body: JSON.stringify(task),
      });
    },
    update(taskId, updates) {
        return callApi(`/${taskId}/update`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(taskId) {
      return callApi(`/${taskId}/delete`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
