import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'

export const checkIn = async (payload) => {

    try {
        const res = await axios.post(
            `https://ibosapi.akij.net/hcm/EmployeeRemoteAttendance/CreateEmployeeRemoteAttendance`, payload
        )

        Toast.show({
            text: res?.data?.message || "CheckIn Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        Toast.show({
            text: err?.response?.data?.message || "CheckIn Error",
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        console.log(JSON.stringify(err.response.data, null, 2))
    }

}