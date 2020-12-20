import axios from "axios";

//Suppler Data
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
export const createSupplier = (createData) => {
    console.log(JSON.stringify(createData, null, 2));
    // axios.post('https://ibosapi.akij.net/sme/Partner/CreatePartner', createData)
    // .then(res => {
    //     console.log(JSON.stringify(res, null, 2));
    // })
    // .catch(err =>{
    //     console.log(JSON.stringify("Error", err, null, 2));
    // })
}