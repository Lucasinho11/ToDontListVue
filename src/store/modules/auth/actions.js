import axios from 'axios'

export const login = ({ commit }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/auth/login',
        {
            email: form.email,
            password: form.password,
            device_name: "vue"
          }
        ).then((response) => {
            console.log(response);

            commit('token', response.data.token)
            
            const user = {
                name: response.data.name,
                email: response.data.email,
                created_at: response.data.created_at
            }

            commit('data', user)

       }).catch((error) => {
        console.log(error)
       }); 
}

export const register = ({ commit }, form) => {
   axios.post(
    'http://127.0.0.1:8000/api/auth/register',
    {
        name: form.name,
        email: form.email,
        password: form.password,
        device_name: "vue"
      }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
            
            const user = {
                name: response.data.name,
                email: response.data.email,
                created_at: response.data.created_at
            }

            commit('data', user)
   }).catch((error) => {
    console.log(error)
   }); 
}

export const logout = ({ commit, state }) => {
 const token = state.user.token;
                if (!token) {
                    return;
                }

                axios.post(
                'http://127.0.0.1:8000/api/auth/logout', {}, {
                    headers: {
                    'Authorization': `Bearer ${token}` 
                }
                }).then((response) => {
                    console.log(response);
               }).catch((error) => {
                console.log(error)
               }); 
               commit('token', null);
    commit('data', {});
}
export const tasks_user = ({ commit, state }) => {
    axios.post(
        'http://127.0.0.1:8000/api/posts', {}, {
            headers: {
            'Authorization': `Bearer ${state.user.token}` 
        }
        }).then((response) => {
            console.log("action posts")
            console.log(response.data[0][0].title);
            const tasks = response.data[0]

        commit('tasks', tasks)
       }).catch((error) => {
        console.log(error)
       });
}
export const task_user = ({ commit, state }, id) => {
    axios.post(
        `http://127.0.0.1:8000/api/posts/${id}`, {}, {
            headers: {
            'Authorization': `Bearer ${state.user.token}` 
        }
        }).then((response) => {
            console.log("task_user")
            console.log(response.data[0])
            const task = {
                id: id,
                title: response.data[0].title,
                body: response.data[0].body
            }

        commit('task', task)
       }).catch((error) => {
        console.log(error)
       });
}
export const updateTask = ({ commit,state }, task) => {
    axios.post(
        `http://127.0.0.1:8000/api/posts/update/${task.id}`, { 
            title: task.title,
            body: task.body 
        },
        {
            headers: {
            'Authorization': `Bearer ${state.user.token}` 
        }
         
        }
     ).then((response) => {
         console.log(response);
         state.msg.success = 'Tache modifiée'
         commit('task', task)
    }).catch((error) => {
     console.log(error)
     state.msg.error = error
    });
 }
 export const deleteTask = ({ state , commit}, task) => {   
                   axios.post(
                   `http://127.0.0.1:8000/api/posts/delete/${task.id}`, {}, {
                       headers: {
                       'Authorization': `Bearer ${state.user.token}` 
                   }
                   }).then((response) => {
                       console.log("action delete" + response);
                       state.msg.success = 'Tache supprimée'
                       const task = {
                        title: '',
                        body: ''
                    }
                    commit('task', task)
                  }).catch((error) => {
                   console.log(error)
                  }); 

                  
   }
   export const createTask = ({state }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/posts/create', { 
            title: form.title,
            body: form.body 
        },
        {
            headers: {
            'Authorization': `Bearer ${state.user.token}` 
        }
         
        }
     ).then((response) => {
         console.log(response);
         state.msg.success = 'Tache créée'
    }).catch((error) => {
     console.log(error)
     state.msg.error = error
    });
 }
