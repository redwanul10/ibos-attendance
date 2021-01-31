import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'

export const checkIn = async (payload, setLoading) => {
    setLoading(true)

    try {
        const res = await axios.post(
            // `https://ibosapi.akij.net/hcm/EmployeeRemoteAttendance/CreateEmployeeRemoteAttendance`
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckIn`, payload
        )
        setLoading(false)

        Toast.show({
            text: res ?.data ?.message || "CheckIn Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err ?.response ?.data ?.message ,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        // console.log(JSON.stringify(err?.response?.data, null, 2))
        console.log(err)
    }

}


export const checkOut = async (payload, setLoading) => {
    setLoading(true)
    try {
        const res = await axios.post(
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckOut`, payload
        )

        setLoading(false)

        Toast.show({
            text: res ?.data ?.message || "CheckOut Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err ?.response ?.data ?.message ,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        // console.log(JSON.stringify(err?.response?.data, null, 2))
        console.log(err)
    }

}


