import axios from 'axios'
import { Toast } from 'native-base'
import { storeGlobalData, getGlobalData } from '../../../common/functions/localStorage'


export const getCustomerList = async (id, setter) => {

    try {
        const res = await axios.get(
            `https://ibosapi.akij.net/partner/PManagementCommonDDL/GetCustomerListSalesForceDDL?EmployeeId=${id}`
        )
        setter(res?.data)
    } catch (err) {
    //    console.log(err.response.data,null,2)
       alert(err.response.data.message)
    }
}


export const registerAttentance = async (payload) => {

    try {
        const res = await axios.post(
            `https://ibosapi.akij.net/partner/PartnerLocationRegister/CreatPartnerLocationRegister`,payload
        )

        Toast.show({
            text: res.message || "Created Successfull",
            buttonText: "close",
            type: "success",
            duration: 3000
        })
        
    } catch (err) {
        // alert(err.response.data.message)
        Toast.show({
            text: err.response.data.message,
            buttonText: "close",
            type: "danger",
            duration: 3000
        })
    }
}