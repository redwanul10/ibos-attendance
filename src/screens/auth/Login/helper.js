import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const loginAction = (email, password, setLoading, cb) => {
    setLoading(true)
    axios.post(
        // `https://ibosapi.akij.net/domain/LogIn/GetLoginCheck?Email=${email}&Password=${password}`
        // `https://ibosapi.akij.net/sme/UserProfile/GetUserProfileByUserId?userid=${email}&password=${password}`
        // `https://ibosapi.akij.net/identity/TokenGenerate/IbosLogin`, { userName: email, password }
        `https://erp.ibos.io/identity/TokenGenerate/IbosLogin`, { userName: email, password }
    )
        .then(res => {


            const token = res ?.data ?.token
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            getUserInformation(email, cb, token, setLoading)

            // const selectedBusinessUnit = {
            //     values: res?.data?.branch[0]?.branch_Id,
            //     label: res?.data?.branch[0]?.branchName
            // }

            // storeGlobalData({
            //     isAuthenticate: true,
            //     profileData: res.data,
            //     selectedBusinessUnit
            // })

            console.log(JSON.stringify(res.data, null, 2))



            Toast.show({
                text: "login Successfull",
                type: "success",
               
                duration: 3000
            })
        })
        .catch(err => {
            console.log(err, null, 2)
            setLoading(false)
            // alert("err")
            Toast.show({
                text: err ?.response ?.data ?.message,
               
                duration: 3000
            })
        })
}

const getUserInformation = async (email, cb, token, setLoading) => {

    try {
        const req = await axios.get(
            // `https://ibosapi.akij.net/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
            `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
        )
        // const res = req.data[0]
        setLoading(false)
        const res = req.data


        const selectedBusinessUnit = {
            values: res ?.defaultBusinessUnit,
            label: res ?.businessUnitName
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
        setLoading(false)
        console.log(JSON.stringify(err.response.data, null, 2))
    }

}