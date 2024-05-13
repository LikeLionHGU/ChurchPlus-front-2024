import React from "react";
import styled from "styled-components"
import DateDropdown from "../../asset/Images/Icons/DateDropdownIcon.svg"
import SelectMonthDropdown from "./SelectMonthDropDown";
import SelectYearDropdown from "./SelectYearDropDown";


const DateContainer = styled.div`
    font-family: "GmarketSansLight";
    font-size: 24px;
    margin-top: 32px;
    margin-left: 36px;
    display: flex;
`

const ContiContainer = styled.div`
    display: flex;
    flex-wrap: Wrap;
    margin-left: 36px;
    margin-top: 44px;
`

const Conti = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 29px;
    margin-bottom: 29px;
`
const SmallBox = styled.div`
    width: 85px;
    height: 18px;
    border-radius: 70px 100px 0px 0px;
    background-color: #ccdfff;
    cursor: pointer;
`

const Bigbox = styled.div`
    width: 355px;
    height: 224px;
    border-radius: 0px 16px 16px 16px;
    background-color: #ccdfff;
    font-family: "GmarketSansLight";
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`
export default function ContiStorage(){


    const ContiData = [
        {
            ContiName: "금요예배"
        },
        {
            ContiName: "수요예배"
        },
        {
            ContiName: "주일예배"
        },
        {
            ContiName: "주일 저녁 예배"
        },
        {
            ContiName: "금요예배"
        }
    ];
    return(
        <>
        <DateContainer>
            <SelectYearDropdown/>
            <SelectMonthDropdown/>
        </DateContainer>
        <ContiContainer>
             {ContiData.length > 0 ? (
                 ContiData.map((conti, index) =>(
                    <Conti key={index}>
                        <SmallBox/>
                        <Bigbox>{conti.ContiName}</Bigbox>
                    </Conti>
                ))
            ) : null}
            
        </ContiContainer>
        </>
    )
}