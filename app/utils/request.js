import axios from 'axios'

const api = {
  development: 'http://csdl_v2.ntbic.local/api/v1',
}

const getApiUrl = () => {
  let apiUrl
  switch (process.env.NODE_ENV) {
    case 'development':
      apiUrl = api.development
      break
    default:
      apiUrl = `${window.location.origin}/api/v1`
      break
  }
  return apiUrl
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.data
}


const request = (uri, method = 'GET', data = null) => {
  return axios({
    method,
    url: getApiUrl() + uri,
    data,
  }).then(function (response) {
    checkStatus(response)
    return parseJSON(response)
  })
}

export default request
