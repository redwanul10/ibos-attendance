import React,{useEffect, useState} from 'react'
import IHeader from '../../../../../../../common/components/IHeader';
import { getGlobalData } from '../../../../../../../common/functions/localStorage';
import { createSupplier, editSupplier } from '../helper';
import Form from './form';



let initValues = {
    partnerName: "",
    address: "",
    email: "",
    city: "",
    mobileNo: "",
    bankName: "",
    branchName: "",
    bankAccountType: "",
    bankAccountNumber: "",
}

const SupplierForm = ({route}) => {
    const {params} = route;
    const [globalData, setGlobalData] = useState({})
    let singleData ={}

    const getGlobalDataFromLocalStorage = async () => {
        const  globalDataStroage = await getGlobalData()
        setGlobalData(globalDataStroage)
     }
     useEffect( () => {
         getGlobalDataFromLocalStorage()
     },[])
    
    const isEditPage = params?.data ? true : false;
    if(isEditPage){
        
        const {item} = params.data

        singleData = {
            ...params.data.item,
            bankName: {
                value:item?.bankId,
                label:item?.branchName
            },
            branchName: {
                value:item?.branch_Id,
                label:item?.bankName
            },
            bankAccountType: {
                value:item?.bankAccountTypeId,
                label:item?.bankAccountTypeName
            },
        }
    }

    const hendleCreateSubmit = (values,cb) => {
        const {
            partnerName, address, email, city,
            mobileNo, bankName, branchName, bankAccountType,bankAccountNumber
        } = values;
        const {profileData, selectedBusinessUnit} = globalData;
            
       const newData = {
        // id: "string",
        partnerName: partnerName,
        address: address,
        city: city,
        email: email,
        employee_Id: "string",

        mobileNo: mobileNo,
        account_Id: profileData.account_Id,
        accountName: profileData.accountName,
        branch_Id: selectedBusinessUnit.values, 
        branchName: selectedBusinessUnit.label,
        partnerType_Id: "string",
        partnerTypeName: "Supplier",

        bankAccountNumber: bankAccountNumber,
        bankAccountTypeId: bankAccountType.id,
        bankAccountTypeName: bankAccountType.bankAccountTypeName,
        bankBranchId: branchName.bankBranchId, //number
        bankBranchName: branchName.bankBranchName,
        bankBranchCode: branchName.bankBranchCode,
        bankBranchAddress: branchName.bankBranchAddress,
        bankId: bankName.bankId, //number
        bankName: bankName.bankName,
        bankShortName: bankName.shortName,
        bankCode: bankName.bankCode,
        routingNo: branchName.routingNo,
        user_Id: profileData.user_Id,
        user_Name: profileData.userName,
        isActive: true,
        actionTime: "2020-12-08T04:08:36.634Z",
        serial: 0
       }
       if(isEditPage){
           const id = params?.data?.item?.id
           newData.id = id
           editSupplier(id,newData)
        //    alert("edit handelar")
       }else{
        // alert("create handelar")
        createSupplier(newData,cb)
       }
        
    }
    
    return (
        <>
        <IHeader />
        <Form 
            hendleCreateSubmit={hendleCreateSubmit}
            initValues={isEditPage ? singleData : initValues}
            />
        </>
    );
}

export default SupplierForm

