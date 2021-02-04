import axios from 'axios'

export const getAttendanceList = async (empId, month, year, setLoading, setter) => {
    setLoading(true)
    try {
        const res = await axios.get(
            `https://erp.ibos.io/hcm/EmployeeAttendance/GetAttendanceEmployee?EmployeeId=${empId}&month=${month}&YearId=${year}`
        )
        setter(res ?.data)
        console.log(JSON.stringify(res ?.data, null, 2))
        setLoading(false)
    } catch (err) {
        console.log(err)
        setLoading(false)
        //    console.log(err.response.data,null,2)
        //    alert(err.response.data.message)
    }
}

