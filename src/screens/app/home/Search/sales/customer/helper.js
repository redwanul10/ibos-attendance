import axios from "axios";
import { Toast } from "native-base";

//Suppler Data
export const getCustomerData = (accId, setter) =>{
    axios.get(`https://ibosapi.akij.net/sme/Partner/GetPartnerByAccount/${accId}?$filter=partnerTypeName eq 'Customer'`)
    .then(res => {
        const {status, data} = res;
        console.log(JSON.stringify(data,null,2))
        if(status === 200 && data){
            setter(data.value);
        }
    }) 
    .catch(err => {
        console.log(err);
    })
}

//Bank DDl
export const getBankNameDDL = (accId, setter) =>{
    axios.get(`https://ibosapi.akij.net/sme/Bank/GetBank?AccountId=${accId}`)
    .then(res => {
        const {status, data} = res;
        if(status === 200 && data){
            const ddl = data.value.map(item => (
                {
                    ...item,
                    value : item.bankId,
                    label: item.bankName
                }
            ))
            setter(ddl);
        }
    })
}

// Branch DDl
export const getBranchDDl = (bankId,setter) => {
    axios.get(`https://ibosapi.akij.net/sme/BankBranch/GetBranchByBankId/${bankId}`)
    .then(res => {
        const {status, data } = res;
        if(status === 200 && data){
            const ddl = data.value.map(item => (
                {
                    ...item,
                    value : item.bankBranchId,
                    label: item.bankBranchName
                }
            ))
            setter(ddl)
        }
    })
}

// Bank Account Type DDl
export const getBankAccTypeDDl = (setter) =>{
    axios.get('https://ibosapi.akij.net/sme/BankAccountType/GetBankAccountType')
    .then(res =>{
        const {status, data} = res;
        if(status === 200 && data){
            const ddl = data.value.map(item => (
                {
                    ...item,
                    value: item.bankAccountTypeId,
                    label: item.bankAccountTypeName
                }
            ))
            setter(ddl)
        }
    })
}

// supplier create
export const createCustomer = (createData,cb) => {
    axios.post('https://ibosapi.akij.net/sme/Partner/CreatePartner', createData)
    .then(res => {
        
        cb()

        Toast.show({
            text: "Create Successfull",
            buttonText: "close",
            duration: 3000
        })
    })
    .catch(err =>{
        console.log(err);
    })
}

// supplier Edit
export const editSupplier = (id,payload) =>{
    axios.put(`https://ibosapi.akij.net/sme/Partner/UpdatePartner?id=${id}`,payload)
    .then(res => {
        
        Toast.show({
            text: "Edit Successfull",
            buttonText: "close",
            duration: 3000
        })
    })
    .catch(err =>{
        console.log(err);
    })
}