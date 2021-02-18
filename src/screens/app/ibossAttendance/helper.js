import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'

export const checkIn = async (payload, setLoading, cb) => {
    setLoading(true)

    try {
        const res = await axios.post(
            // `https://ibosapi.akij.net/hcm/EmployeeRemoteAttendance/CreateEmployeeRemoteAttendance`
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckIn`, payload
        )
        setLoading(false)

        Toast.show({
            text: res?.data?.message || "Checked In Successfull",
            type: "success",

            duration: 3000
        })

        cb()

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err?.response?.data?.message,
            type: "danger",

            duration: 3000
        })


    }

}


export const checkOut = async (payload, setLoading, cb) => {
    setLoading(true)
    try {
        const res = await axios.post(
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckOut`, payload
        )

        setLoading(false)

        Toast.show({
            text: res?.data?.message || "Checked Out Successfull",
            type: "success",

            duration: 3000
        })

        cb()

    } catch (err) {
        // alert(err.response.data.message)
        setLoading(false)
        Toast.show({
            text: err?.response?.data?.message,
            type: "danger",

            duration: 3000
        })


    }

}
let num = 0
export const getCheckInCheckOutTime = async (empId, todayDate, setTime, setLoading) => {
    // setLoading(true)
    if (setLoading) setLoading(true)
    try {
        const res = await axios.get(
            `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/GetEmployeeCheckInCheckOutTime?EmployeeId=${empId}&date=${todayDate}`
            // `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/GetEmployeeCheckInCheckOutTime?EmployeeId=${empId}&date=${todayDate}`

        )


        const data = res?.data
        setTime(res?.data[0])
        if (setLoading) setLoading(false)
        console.log(JSON.stringify(res?.data, null, 2))


    } catch (err) {
        if (setLoading) setLoading(false)
    }

}


