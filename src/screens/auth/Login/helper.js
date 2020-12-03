import axios from 'axios'
import {Toast} from 'native-base'

export const loginAction = (email,password,cb) => {
    axios(`https://ibosapi.akij.net/domain/LogIn/GetLoginCheck?Email=${email}&Password=${password}`)
        .then(res => {
            console.log(res.data)
            
            cb()
            getUserInformation(email)

            Toast.show({
                text: "login Successfull",
                buttonText: "close",
                duration: 3000
              })
        })
        .catch(err => {
            console.log(err)
            Toast.show({
                text: err?.response?.data?.message,
                buttonText: "close",
                duration: 3000
              })
        })
}

const getUserInformation = (email) => {
    
    axios(`https://ibosapi.akij.net/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`)
        .then(res => {
            console.log(res?.data)
        })
        .catch(err => console.log(err))
}