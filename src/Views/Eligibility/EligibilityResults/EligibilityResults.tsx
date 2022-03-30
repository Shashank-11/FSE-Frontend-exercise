import * as React from "react";
import styled from "styled-components";

import { ElegibilityResponse } from '../../../models/EligibilityModel';
import LottieAnimation from '../../../DesignSystem/LottieAnimation';
import Card from '../../../DesignSystem/Card'
import successAnimation from './success-file.json';
import failureAnimation from './failure-file.json';

const ResultsWrapper = styled.div`
  width: 100%;
`;

const SuccessMessage = styled.h1`
  color: #38c172;
`
const ErrorMessage = styled.h1`
  color: #e3342f
`

const CardsList = styled.div`
  width: 300px;
  margin: 20px;
`

interface EligibilityResultsProps {
  results: ElegibilityResponse | null
}

const EligibilityResults = ({ results }: EligibilityResultsProps) => {
  return (
    <ResultsWrapper data-testid="eligibility-result">
      {results && results?.eligibleCards?.length > 0 ?
        <>
          <LottieAnimation
            loop={true}
            animationData={successAnimation}
          />
          <SuccessMessage>Congratulation! You are eligible for the following:</SuccessMessage>
          {results?.eligibleCards.map((cards, i) => {
            return (
              <CardsList key={i}>
                <Card data-testid="eligibility-cards">{cards}</Card>
              </CardsList>)
          })}
        </> :
        <>
          <LottieAnimation
            loop={true}
            animationData={failureAnimation}
          />
          <ErrorMessage>Unfortunately, you are not not eligible for any of the cards right now. Please try again in few weeks.</ErrorMessage>
        </>
      }
    </ResultsWrapper>
  );
};

export default EligibilityResults;
