import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const getAttendanceList = async (empId, month, year, setter) => {

    try {
        const res = await axios.get(
            `https://erp.ibos.io/hcm/EmployeeAttendance/GetAttendanceEmployee?EmployeeId=${empId}&month=${month}&YearId=${year}`
        )
        setter(res?.data)
        console.log(JSON.stringify(res?.data, null, 2))
    } catch (err) {
        console.log(err)
        //    console.log(err.response.data,null,2)
        //    alert(err.response.data.message)
    }
}

