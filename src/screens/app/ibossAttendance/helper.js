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
            text: res?.data?.message || "CheckIn Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err?.response?.data?.message,
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
            text: res?.data?.message || "CheckOut Successfull",
            type: "success",
            buttonText: "close",
            duration: 3000
        })

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err?.response?.data?.message,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })
        // console.log(JSON.stringify(err?.response?.data, null, 2))
        console.log(err)
    }

}
let num = 0
export const getCheckInCheckOutTime = async (empId, todayDate) => {
    // setLoading(true)
    alert("fetching")
    try {
        const res = await axios.get(
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/GetEmployeeCheckInCheckOutTime?EmployeeId=11621&date=${todayDate}`
            // `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/GetEmployeeCheckInCheckOutTime?EmployeeId=${empId}&date=${todayDate}`

        )

        console.log(JSON.stringify(res.data, null, 2))
        alert("success")

    } catch (err) {

        // alert("error")

        Toast.show({
            text: err?.response?.data?.message,
            type: "danger",
            buttonText: "close",
            duration: 3000
        })

        console.log("CHECKIN OUT ERROR", err)
    }

}


