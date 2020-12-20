import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const loginAction = (email, password, cb) => {
    axios(
        // `https://ibosapi.akij.net/domain/LogIn/GetLoginCheck?Email=${email}&Password=${password}`
        `https://ibosapi.akij.net/sme/UserProfile/GetUserProfileByUserId?userid=${email}&password=${password}`
        )
        .then(res => {
            // console.log(res)

           
            // getUserInformation(email, cb)

            const selectedBusinessUnit = {
                values: res?.data?.branch[0]?.branch_Id,
                label: res?.data?.branch[0]?.branchName
            }

             storeGlobalData({
                isAuthenticate: true,
                profileData: res.data,
                selectedBusinessUnit
            })

             cb()

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

const getUserInformation = async (email, cb) => {

    try {
        const req = await axios(
            `https://ibosapi.akij.net/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
            )
        const res = req.data[0]
        console.log(res)
        // const getPrevAuthData = await getGlobalData()

        const selectedBusinessUnit = {
            values: res?.defaultBusinessUnit,
            label: res?.businessUnitName
        }

        await storeGlobalData({
            isAuthenticate: true,
            profileData: res,
            selectedBusinessUnit
        })

        cb()
    } catch (err) {
        console.log(err)
    }

    // .then(res => {
    //     console.log(JSON.stringify(res.data,null,2))
    //     storeGlobalData({
    //         isAuthenticate:true,
    //         profileData: res?.data,
    //         selectedBusinessUnit:{
    //             values:"",
    //             label:""
    //         }
    //     })
    //     cb()
    // })
    // .catch(err => console.log(err))
}