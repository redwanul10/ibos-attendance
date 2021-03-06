import axios from 'axios'

export const getAttendanceList = async (empId, month, year, setLoading, setter, cancelToken) => {
    setLoading(true)
    try {
        const res = await axios.get(
            `/hcm/EmployeeAttendance/GetAttendanceEmployee?EmployeeId=${empId}&month=${month}&YearId=${year}`,
            { cancelToken: cancelToken.token }
        )
        setter(res?.data)
        setLoading(false)
        console.log(JSON.stringify(res?.data, null, 2))
    } catch (err) {
        if (err?.message !== "canceled request") {
            setLoading(false)
        }
        // setLoading(false)
        //    alert(err.response.data.message)
    }
}

