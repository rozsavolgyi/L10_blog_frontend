import type User from '@/types/user';
import  Axios  from './dataservice';

export default {
  registerUser(data: User){
    return Axios.post('/register',data)
      .then((res)=>{
        return res

      })
      .catch((err)=>{
        return Promise.reject(err)

      })
  },

}
