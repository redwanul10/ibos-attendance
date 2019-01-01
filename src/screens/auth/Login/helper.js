import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const loginAction = (email, password, cb) => {
    axios.post(
        // `https://ibosapi.akij.net/domain/LogIn/GetLoginCheck?Email=${email}&Password=${password}`
        // `https://ibosapi.akij.net/sme/UserProfile/GetUserProfileByUserId?userid=${email}&password=${password}`
        // `https://ibosapi.akij.net/identity/TokenGenerate/IbosLogin`, { userName: email, password }
        `https://erp.ibos.io/identity/TokenGenerate/IbosLogin`, { userName: email, password }
        )
        .then(res => {

            alert("success")

            const token = res?.data?.token
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            getUserInformation(email, cb,token)

            // const selectedBusinessUnit = {
            //     values: res?.data?.branch[0]?.branch_Id,
            //     label: res?.data?.branch[0]?.branchName
            // }

            // storeGlobalData({
            //     isAuthenticate: true,
            //     profileData: res.data,
            //     selectedBusinessUnit
            // })

            console.log(JSON.stringify(res.data,null,2))



            Toast.show({
                text: "login Successfull",
                type: "success",
                buttonText: "close",
                duration: 3000
            })
        })
        .catch(err => {
            console.log(err, null, 2)
            // alert("err")
            Toast.show({
                text: err?.response?.data?.message,
                buttonText: "close",
                duration: 3000
            })
        })
}

const getUserInformation = async (email, cb,token) => {

    try {
        const req = await axios.get(
            // `https://ibosapi.akij.net/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
            `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
        )
        // const res = req.data[0]
        const res = req.data
        

        const selectedBusinessUnit = {
            values: res?.defaultBusinessUnit,
            label: res?.businessUnitName
        }

        // console.log(selectedBusinessUnit)

        await storeGlobalData({
            isAuthenticate: true,
            token,
            profileData: res[0],
            selectedBusinessUnit
        })

        cb()
    } catch (err) {
        alert(err.response.data.message)
        console.log(JSON.stringify(err.response.data, null, 2))
    }

}