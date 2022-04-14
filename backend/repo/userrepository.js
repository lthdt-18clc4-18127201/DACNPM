import User from '../models/User';
export default {
    getbyemail(email){
      return findOne({email:email});
    },
    
}