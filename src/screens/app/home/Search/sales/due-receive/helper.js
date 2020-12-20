import axios from "axios";
import { Toast } from "native-base";

//getDueReceiveLanding
export const getSupplierData = (accId, setter) =>{
    axios.get(`https://ibosapi.akij.net/sme/Partner/GetPartnerByAccount/${accId}?$filter=partnerTypeName%20eq%20%27Supplier%27`)
    .then(res => {
        const {status, data} = res;
        if(status === 200 && data){
            setter(data.value);
        }
    }) 
    .catch(err => {
        console.log(err);
    })
}

// export const getDueReceiveLanding = async (branchId, setter) => {
//     try {
//       const res = await Axios.get(
//         `https://ibosapi.akij.net/sme/Journal/GetJournalLanding/${branchId}?type=Sales%20Receive`
//       );
//       if (res?.status === 200) {
//         console.log(JSON.stringify(res.data, null, 2));
//         setter([...res?.data]);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };




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
export const createSupplier = (createData,cb) => {
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
        console.log(JSON.stringify(res, null, 2));
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