import React,{useEffect} from 'react'
import IHeader from '../../../../../../../common/components/IHeader';
import { getGlobalData } from '../../../../../../../common/functions/localStorage';
import Form from './form';



let initValues = {
    partnerName: "Test",
    address: "Dhaka Bangladesh",
    email: "ab@gmail.com",
    city: "Dhaka",
    mobileNo: "3243",
    bankName: "",
    branchName: "",
    bankAccountType: "",
}

const PurchaseForm = ({route}) => {
    const {params} = route;
    
    isEditPage = params?.data?.item?.id ? true : false


    if(isEditPage){
        const {item} = params.data

        params.data = {
            ...item,
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

    const hendleCreateSubmit = (values) => {
        const {supplierName, supplierAddress, supplierEmail, city, mobile, bankName, branchName, bankAccountType} = values;
        const newData = {
            id: "",
            partnerName: "",
            address: supplierAddress,
            city: city,
            email: supplierEmail,
            employee_Id: "string",
            mobileNo: mobile,
            account_Id: "string",
            accountName: "string",
            
            branch_Id: "string",
            branchName: "string",
            partnerType_Id: "string",
            partnerTypeName: "string",
            bankAccountNumber: "string",
            bankAccountTypeId: "string",
            bankAccountTypeName: "string",
            bankBranchId: 0,
            bankBranchName: "string",
            bankBranchCode: "string",
            bankBranchAddress: "string",
            bankId: 0,
            bankName: "string",
            bankShortName: "string",
            bankCode: "string",
            routingNo: "string",
            user_Id: "string",
            user_Name: "string",
            isActive: true,
            actionTime: new Date(),
            serial: 0
        }
    }

    const getGlobalDataFromLocalStorage = async () => {
       const  globalData = await getGlobalData()
        console.log(JSON.stringify(globalData,null,2))
    }
    useEffect( () => {
        getGlobalDataFromLocalStorage()
    },[])

    return (
        <>
        <IHeader />
        <Form 
            hendleCreateSubmit={hendleCreateSubmit}
            initValues={isEditPage ? params?.data : initValues}
            />
        </>
    );
}

export default PurchaseForm

