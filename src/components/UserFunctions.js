import API from './API';

export const register = newUser => {
  return API
    .post('users/register', {
      firstName: newUser.firstname,
      lastName: newUser.lastname,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      alert('User Registered. Please login!');
    })
    .catch(error => {
      alert('Please fill the form correctly');
    })
}

export const login = user => {
  return API
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

export const getProfile = userid => {
  return API
    .get(`users/account/${userid}`)
    .then(response => {
      return(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateProfile = user => {
  return API
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
  return API
    .put(`users/subscription/${userid}`, {
      subscription: subscriptionId
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getList = (userid) => {
  return API
      .get(`${userid}/api/tasks`, {
          headers: { "Content-type": "application/json" }
      })
      .then(res => {
          var data = []
          Object.keys(res.data).forEach((key) => {
              var val = res.data[key]
              data.push([val.id, val.title, val.reminder, val.canvas])
          })
          return data;
          
      })
}

export const addToList = (userid, term, reminder, canvas) => {
  return API
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
  API
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
  return API
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