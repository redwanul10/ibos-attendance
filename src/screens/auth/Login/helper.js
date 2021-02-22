import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const loginAction = (email, password, setLoading, cb) => {
    setLoading(true)
    axios.post(
        `https://erp.ibos.io/identity/TokenGenerate/IbosLogin`, { userName: email, password }
    )
        .then(res => {


            const token = res?.data?.token
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            getUserInformation(email, cb, token, setLoading)


            console.log(JSON.stringify(res.data, null, 2))


            Toast.show({
                text: "Log in Successfull",
                type: "success",

                duration: 3000
            })
        })
        .catch(err => {
            console.log(err, null, 2)
            setLoading(false)
            Toast.show({
                text: err?.response?.data?.message,
                type: "danger",
                duration: 3000
            })
        })
}

const getUserInformation = async (email, cb, token, setLoading) => {

    try {
        const req = await axios.get(
            `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`
        )
        setLoading(false)
        const res = req.data


        const selectedBusinessUnit = {
            values: res?.defaultBusinessUnit,
            label: res?.businessUnitName
        }

        await storeGlobalData({
            isAuthenticate: true,
            // token,
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