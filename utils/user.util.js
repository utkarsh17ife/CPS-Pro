const { dbUtil } = require('../endpoint');





let getAllUsers=()=>{


    let getAllUsersQuery = 'SELECT userID, UserName FROM public.users';
 

    return new Promise((resolve, reject)=>{


        dbUtil.query(getAllUsersQuery,[], (e, result)=>{

            if(e) reject(e);
        
            return resolve(result);

        });


    });



}







module.exports={

    getAllUsers

}