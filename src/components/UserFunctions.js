import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered');
    })
    .catch(error => {
      alert('Already Registed');
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateProfile = user => {
  return axios
    .put(`users/update/${user.id}`, {
      first_name: user.firstName,
      last_name: user.lastName
    })
    .then(response => {
      return(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export const pushNotificationData = (userid, subscriptionId) => {
  console.log(userid, subscriptionId);
  return axios
    .put(`users/subscription/${userid}`, {
      subscription: subscriptionId
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getList = (userid) => {
  return axios
      .get(`${userid}/api/tasks`, {
          headers: { "Content-type": "application/json" }
      })
      .then(res => {
          var data = []
          Object.keys(res.data).forEach((key) => {
              var val = res.data[key]
              data.push([val.id, val.title, val.reminder, val.canvas])
          })
          console.log('user function', res);
          return data;
          
      })
}

export const addToList = (userid, term, reminder, canvas) => {
  return axios
      .post(
        `${userid}/api/task`, {
              title: term,
              reminder: reminder,
              canvas: canvas
          }, {
              headers: { "Content-type": "application/json" }
          })
      .then((res) => {
          console.log(res)
      })
}

export const deleteItem = (id, userid) => {
  axios
      .delete(
          `${userid}/api/task/${id}`, {
              headers: { "Content-type": "application/json" }
          })
      .then((res) => {
          console.log(res)
      })
      .catch((res) => {
          console.log(res)
      })
}

export const updateItem = (term, reminder, canvas, userid, id) => {
  return axios
      .put(
          `${userid}/api/task/${id}`, {
              title: term,
              reminder: reminder,
              canvas: canvas
          }, {
              headers: { "Content-type": "application/json" }
          })
      .then((res) => {
          console.log(res)
      })
}