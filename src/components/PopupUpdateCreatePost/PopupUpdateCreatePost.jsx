import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BackdropPopup from "../BackdropPopup";
import PopupButtonsBlock from "../PopupButtonsBlock";

import {
  updateCurrentPostStart,
  createCurrentPostStart,
} from "../../store/post/actions";

import * as s from "../PopupUpdateCreatePost/PopupUpdateCreatePost.styled";

const PopupUpdateCreatePost = ({
  setShowUpdatePopup,
  showUpdatePopup,
  setShowCreatePopup,
  showCreatePopup,
  bgBtnColor,
  post,
}) => {
  const posts = useSelector((state) => state.Posts.posts);
  const dispatch = useDispatch();
  const [currentTitle, setCurrentTitle] = useState(
    showUpdatePopup ? post.title : ""
  );
  const [currentBody, setCurrentBody] = useState(
    showUpdatePopup ? post.body : ""
  );
  const [isValidated, setValidated] = useState(false);

  useEffect(() => {
    if (
      currentTitle.length <= 4 ||
      currentTitle.length > 72 ||
      currentBody.length <= 8 ||
      currentBody.length > 510
    ) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  }, [currentTitle, currentBody]);

  const updateNewData = () => {
    let newData = {
      ...post,
      title: currentTitle,
      body: currentBody,
    };
    console.log(newData);
    dispatch(updateCurrentPostStart(newData));
  };

  const createNewData = () => {
    let newData = {
      title: currentTitle,
      body: currentBody,
      userId: posts.length + 1,
      tags: ["classic", "fiction", "english"],
      reactions: 2,
    };
    console.log(newData);
    dispatch(createCurrentPostStart(newData));
  };

  const handleUpdateOrCreatePopup = () => {
    if (showUpdatePopup) {
      updateNewData();
    } else if (showCreatePopup) {
      createNewData();
    }
  };

  const hadleOnChangeTitle = (event) => {
    const elem = event.target;
    setCurrentTitle(elem.value);

    if (elem.value.length <= 4 || elem.value.length > 72) {
      elem.style.borderColor = "#E00000";
    } else {
      elem.style.borderColor = "#e7e8e9";
    }
  };
  const hadleOnChangeBody = (event) => {
    const elemBody = event.target;
    setCurrentBody(elemBody.value);

    if (elemBody.value.length <= 8 || elemBody.value.length > 510) {
      elemBody.style.borderColor = "#E00000";
    } else {
      elemBody.style.borderColor = "#e7e8e9";
    }
  };

  return (
    <BackdropPopup>
      <s.PopupBlock>
        {showUpdatePopup && <p>Edit post</p>}
        {showCreatePopup && <p>Add new post</p>}
        <s.TitleBlock>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="New Title Name"
            defaultValue={currentTitle}
            onChange={hadleOnChangeTitle}
          />
          {currentTitle.length <= 4 || currentTitle.length > 72 ? (
            <s.ErrorMessageTitleBody>
              Please enter at least 4 characters and not more than 64
              characters.
            </s.ErrorMessageTitleBody>
          ) : (
            ""
          )}
          <s.NumberOfCharacters>({currentTitle.length})</s.NumberOfCharacters>
        </s.TitleBlock>
        <s.DescriptionBlock>
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Here is a description for the new post, coming soon...."
            defaultValue={currentBody}
            onChange={hadleOnChangeBody}
          />
          {currentBody.length <= 8 || currentBody.length > 510 ? (
            <s.ErrorMessageTitleBody className="body-error">
              The length of the post cannot be less than 8 and more than 390
              characters.
            </s.ErrorMessageTitleBody>
          ) : (
            ""
          )}
          <s.NumberOfCharacters className="body-error">
            ({currentBody.length})
          </s.NumberOfCharacters>
        </s.DescriptionBlock>
        <PopupButtonsBlock
          setShowUpdatePopup={setShowUpdatePopup}
          showUpdatePopup={showUpdatePopup}
          setShowCreatePopup={setShowCreatePopup}
          showCreatePopup={showCreatePopup}
          sendButton="Save Changes"
          bgBtnColor={bgBtnColor}
          onClickHandler={handleUpdateOrCreatePopup}
          isValidated={isValidated}
        ></PopupButtonsBlock>
      </s.PopupBlock>
    </BackdropPopup>
  );
};

export default PopupUpdateCreatePost;

// import React, { useState } from 'react';
// import moment from 'moment';

// import SelectWithArrow from '../../SelectWithArrow/SelectWithArrow';
// import EditableTextArea from '../../EditableText/EditableTextArea';
// import CheckboxLabel from '../../../../components/CheckboxLabel/CheckboxLabel';
// import UnitInput from '../../UnitInput/UnitInput';
// import * as s from './AddPaymentPlanPopup.styled';
// import {
//   paymentPlanPaymentDayOptions,
//   paymentPlanFrequencyOptions,
//   paymentPlanEndOnOptions,
// } from '../../../../selectOptions';
// import { formatMoney, parseDateStashToISO, formatDateSlash } from '../../../../utils/utilHelpers';

// const funderAccountValue = [
//   { label: 'Fifth Third - Fox', value: 'Fifth Third - Fox' },
//   { label: 'Fifth Ninth - Fox', value: 'Fifth Ninth - Fox' },
// ];
// const merchantAccountValue = [
//   { label: 'Bank of America - 8454', value: 'Bank of America - 8454' },
//   { label: 'Bank of  Canada - 8645', value: 'Bank of  Canada - 8645' },
// ];
// const bankDescriptorValue = [
//   { label: 'Valley - Fox', value: 'Valley - Fox' },
//   { label: 'Ninth - Fox', value: 'Ninth - Fox' },
// ];

// const AddPaymentPlanPopup = ({ onClose }) => {
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [paymentsCount, setPaymentsCount] = useState();

//   const [funderAccount, setFunderAccount] = useState('');
//   const [bankDescriptor, setBankDescriptor] = useState('');
//   const [merchantAccount, setMerchantAccount] = useState('');
//   const [paymentPlanEndOn, setPaymentPlanEndOn] = useState('');
//   const [frequency, setValueFrequency] = useState('');
//   const [expectedEndDate, setExpectedEndDate] = useState('');
//   const handleMoney = event => {
//     setPaymentAmount(event.target.value);
//   };
//   const handleStartDate = event => {
//     setStartDate(event.target.value);
//   };

//   const calcDateDiff = () => {
//     const currentDate = moment(startDate, 'MM/DD/YYYY');
//     setExpectedEndDate(
//       moment(currentDate, 'MM/DD/YYYY', true)
//         .add(paymentsCount, 'month')
//         .format('MM/DD/YYYY'),
//     );
//     return moment(currentDate, 'MM/DD/YYYY', true)
//       .add(paymentsCount, 'month')
//       .format('MM/DD/YYYY');
//   };
//   const handlePaymentsCount = event => {
//     if (event.target.value <= 0) return setPaymentsCount(0);
//     setPaymentsCount(event.target.value);
//     console.log(event.target.value);
//   };

//   const handleValueFunderAccount = event => {
//     setFunderAccount(event.label);
//     console.log(event.label);
//   };
//   const handleValueBankDescriptor = event => {
//     setBankDescriptor(event.label);
//     console.log(event.label);
//   };
//   const handleValueMerchantAccount = event => {
//     setMerchantAccount(event.label);
//     console.log(event.label);
//   };
//   const handleValuePaymentPlanEndOn = event => {
//     setPaymentPlanEndOn(event.label);
//     console.log(event.label);
//   };
//   const handleValueFrequency = event => {
//     setValueFrequency(event.label);
//     console.log(event.label);
//   };
//   // const createNewData = () => {
//   //   let newData = {
//   //     paymentPlanId: 5,
//   //     status: 'new',
//   //     additionalStatus: null,
//   //     startDate: startDate,
//   //     endDate: expectedEndDate,
//   //     restartDate: null,
//   //     endOn: paymentPlanEndOnOptions,
//   //     expectedEndData: expectedEndDate,
//   //     numberPayments: '',
//   //     frequency: frequency,
//   //     paymentDate: 'Monday',
//   //     paymentAmount: paymentAmount,
//   //     payments: paymentsCount,
//   //     accountId: 937,
//   //     accountName: merchantAccount,
//   //     funderAccount: funderAccount,
//   //     descriptor: bankDescriptor,
//   //     nsf: 0,
//   //     isHolidayPayment: false,
//   //     note: '',
//   //   };
//   //   console.log(newData);
//   //   // dispatch(createCurrentPostStart(newData));
//   // };
//   const onClickHandle = () => {
//     if (
//       !funderAccount ||
//       !bankDescriptor ||
//       !merchantAccount ||
//       !paymentPlanEndOn ||
//       !frequency ||
//       !paymentAmount ||
//       !startDate ||
//       !paymentsCount ||
//       moment().diff(moment(startDate, 'MM/DD/YYYY'), 'days') > 0
//     ) {
//       return;
//     }
//     // createNewData();
//     onClose();
//   };

//   return (
//     <s.MainContainer>
//       <s.FirstRowWrapper>
//         <SelectWithArrow
//           gridArea="funder_account"
//           fieldName="funder_account"
//           title="Funder Account"
//           options={funderAccountValue}
//           onChange={handleValueFunderAccount}
//         />
//         <SelectWithArrow
//           gridArea="bank_descriptor"
//           fieldName="bank_descriptor"
//           title="Bank Descriptor"
//           options={bankDescriptorValue}
//           onChange={handleValueBankDescriptor}
//         />
//         <SelectWithArrow
//           gridArea="merchant_account"
//           fieldName="merchant_account"
//           title="Merchant Account"
//           options={merchantAccountValue}
//           onChange={handleValueMerchantAccount}
//         />
//       </s.FirstRowWrapper>
//       <s.SecondRowWrapper>
//         <UnitInput
//           gridArea="payment_amount"
//           fieldName="payment_amount"
//           title="Payment Amount"
//           onChange={handleMoney}
//           value={formatMoney(paymentAmount)}
//         />
//         <SelectWithArrow
//           gridArea="frequnecy"
//           fieldName="frequnecy"
//           title="Frequnecy"
//           options={paymentPlanFrequencyOptions}
//           onChange={handleValueFrequency}
//         />
//       </s.SecondRowWrapper>
//       <s.ThirdRowWrapper>
//         <UnitInput
//           gridArea="start_date"
//           fieldName="start_date"
//           title="Start Date"
//           onChange={handleStartDate}
//           value={formatDateSlash(startDate)}
//         />
//         <SelectWithArrow
//           gridArea="end_on"
//           fieldName="end_on"
//           title="End on"
//           options={paymentPlanEndOnOptions}
//           onChange={handleValuePaymentPlanEndOn}
//         />
//         <UnitInput
//           gridArea="payments_count"
//           fieldName="payments_count"
//           title="Payments Count"
//           type="number"
//           value={paymentsCount}
//           onChange={handlePaymentsCount}
//         />
//         <UnitInput
//           gridArea="expected_end_date"
//           fieldName="expected_end_date"
//           title="Expected End Date"
//           disabled={true}
//           value={calcDateDiff()}
//         />
//       </s.ThirdRowWrapper>
//       <s.FourthRowWrapper>
//         {/* <s.CheckBoxContainer gridArea="checkbox" fieldName="checkbox">
//           <s.CheckBoxLabel>Process Holiday Payments</s.CheckBoxLabel>
//           <CheckboxLabel />
//         </s.CheckBoxContainer> */}
//         <EditableTextArea label="Note" gridArea="note" fieldName="note" blackLabel />
//       </s.FourthRowWrapper>

//       <s.ButtonAdd onClick={onClickHandle}>Add Payment Plan</s.ButtonAdd>
//     </s.MainContainer>
//   );
// };

// export default AddPaymentPlanPopup;
