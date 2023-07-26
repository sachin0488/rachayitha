import React, { useCallback, useEffect, useState } from 'react'
import PlanCard from './components/PlanCard'
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded'
import TollRoundedIcon from '@mui/icons-material/TollRounded'
import styled from '@emotion/styled'
import { useCreateCoinPurchaseService } from 'Container/Payment/services/CreateCoinPurchase.service'

const CoinPlan = () => {
  const [currentState, setCurrentState] = useState("")
  const { isLoading, mutate, isSuccess, isError } = useCreateCoinPurchaseService()

  const handlePayClick = useCallback(
    ({ amount, qty }) =>
      () => {
        setCurrentState(`${qty}`)
        mutate({
          amount: amount,
          qty: qty,
        })
      },
    [mutate],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setCurrentState('')
    }
  }, [isSuccess, isError])

  return (
    <Root>
      <PlanCard
        Icon={TollRoundedIcon}
        name="10 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹90"
        isSelected={currentState === '10'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 90, qty: 10 })}
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="50 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹400"
        isSelected={currentState === '50'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 400, qty: 50 })}
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="100 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹750"
        isSelected={currentState === '100'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 750, qty: 100 })}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  max-width: var(--main-max-width);
  height: 100%;
  overflow-x: scroll;
  padding: 30px;
  padding-left: 23px;
  padding-bottom: 40px;
`

export default CoinPlan
/**
 * import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import {
  createEnrollmentAPI,
  editEnrollmentAPI,
  verifyCouponAPI,
  verifyEnrollmentAPI,
} from "./enrollment.api";

import useRazorpay from "react-razorpay";
import { useCallback, useState } from "react";
import { useEnrollmentInfoAPI } from "../../profile/api/profile.hooks";
import { useFetchUserDataAPI } from "../../auth/api/auth.hooks";
import { useDispatch } from "react-redux";
import { setIsEnrolledInTournament } from "../../../store/slices/global/user.slice";

export const useCreateEnrollmentAPI = () => {
  const { enqueueSnackbar } = useSnackbar();
  const Razorpay = useRazorpay();
  const { handleVerifyEnrollment, isVerifying } = useVerifyEnrollmentAPI();
  const [razorpayLoading, setRazorpayLoading] = useState(false);

  const handlePaymentSuccess = useCallback(
    (response) => {
      handleVerifyEnrollment(response);
    },
    [handleVerifyEnrollment]
  );

  const handlePaymentError = useCallback(
    (response) => {
      enqueueSnackbar(response.error.description, {
        variant: "error",
      });
    },
    [enqueueSnackbar]
  );

  const handlePayments = useCallback(
    async (paymentOptions) => {
      const options = {
        ...paymentOptions,
        name: "Kurukshetra Pvt Ltd",
        handler: handlePaymentSuccess,
      };

      const paymentInstance = new Razorpay(options);
      // const paymentInstance = await newRazorpay(options);

      paymentInstance.on("payment.failed", handlePaymentError);

      paymentInstance.open();
    },
    [Razorpay, handlePaymentSuccess, handlePaymentError]
  );

  const { mutate, isLoading, isSuccess } = useMutation(createEnrollmentAPI, {
    onSuccess({ data }) {
      setRazorpayLoading(true);
      handlePayments(data.payment);
      setRazorpayLoading(false);

      enqueueSnackbar(data.message, {
        variant: "success",
      });
    },
    onError: (error) => {
      if (error.response.data.message)
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        });
    },
  });

  const handleCreateEnrollment = mutate;

  return {
    handleCreateEnrollment,
    isLoading: isLoading || razorpayLoading || isVerifying,
    isSuccess,
  };
};
 */
