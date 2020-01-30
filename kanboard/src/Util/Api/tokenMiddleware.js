import moment from 'moment';
import axios from 'axios';
import queryString from 'query-string';
import { RSAA } from 'redux-api-middleware';
import { EL_TOKEN_URL, EL_KEY } from 'appConfigs';
import { EL } from  '../../Component/Auth/constant';
const ACCESS_TOKEN_TIMEOUT_THRESHOLD_SECONDS = 10;

/*
  This middle-ware intercepts call API actions and checks the token expiry 
  if the access token is expired or is about to expire returns a promise to update the token.
  When promise is fulfilled successfully then it updates the token in local storage and 
  updates the token in the call API action object which is on hold and then let it pass 
  to be handled by redux-api-middleware.
  
  If promise is finished with an error it is passed to the next middleware. 
*/

const tokenMiddleware = store => {
  let refreshTokenPromise;

  return next => action => {
    let callApi = action[RSAA];
    if (callApi) {
      const token = JSON.parse(localStorage.getItem(EL));
      const timeoutInSeconds = moment(token['.expires']).diff(moment(), 'seconds');

      if (timeoutInSeconds <= ACCESS_TOKEN_TIMEOUT_THRESHOLD_SECONDS) {
        if (!refreshTokenPromise) {
          refreshTokenPromise = refreshToken(token.refresh_token, token.userName).then(newToken => {
            localStorage.setItem(EL, JSON.stringify(newToken));
            refreshTokenPromise = null;
          });
        }
        return refreshTokenPromise
          .then(() => {
            const token = JSON.parse(localStorage.getItem(EL));
            callApi.headers['Authorization'] = `Bearer ${token.access_token}`;
            return next(action);
          })
          .catch(err => next(action));
      }
    }
    return next(action);
  };
};

function refreshToken(refreshToken, userName) {
  let config = { headers: { Authorization: 'Basic ' + EL_KEY } };
  let data = { grant_type: 'refresh_token', refresh_token: refreshToken, user_name: userName };
  return new Promise((resolve, reject) => {
    axios
      .post(EL_TOKEN_URL, queryString.stringify(data), config)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
}

export default tokenMiddleware;