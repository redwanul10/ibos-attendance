import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'

export const checkIn = async (payload) => {

    try {
        const res = await axios.post(
            // `https://ibosapi.akij.net/hcm/EmployeeRemoteAttendance/CreateEmployeeRemoteAttendance`
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckIn`,payload
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
            text: err?.response?.data?.message ,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        // console.log(JSON.stringify(err?.response?.data, null, 2))
        console.log(err)
    }

}


export const checkOut = async (payload) => {

    try {
        const res = await axios.post(
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckOut`,payload
        )

        Toast.show({
            text: res?.data?.message || "CheckOut Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        Toast.show({
            text: err?.response?.data?.message ,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        // console.log(JSON.stringify(err?.response?.data, null, 2))
        console.log(err)
    }

}


