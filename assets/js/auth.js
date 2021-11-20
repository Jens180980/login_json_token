//Helpers import
import {
  apiResult
} from './helpers.js'

//Listening for sendbutton click to fire main function
sendBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getData(usernameInput.value, passwordInput.value)
})

//Main datahandling function
const getData = async (user, password) => {
  const formData = new FormData()
  formData.append('username', user)
  formData.append('password', password)

  const options = {
    method: 'POST',
    body: formData
  }

  const data = await apiResult('https://api.mediehuset.net/token', options)

  //Error- or successmessages
  if (data.access_token) {
    errMsg.innerText = 'You are now logged in.'
  } else {
    errMsg.innerText = 'Wrong password. Please try again.'
  }
  const token = data.access_token
  sessionStorage.setItem('token', token)
  console.log(token);

} // End of getData