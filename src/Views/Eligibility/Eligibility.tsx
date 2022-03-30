import * as React from "react";
import View from "../../DesignSystem/View";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";
import ErrorPage from "../ErrorPage"
import { checkElegibility } from '../../services/ElegibilityService';
import Loading from '../../DesignSystem/Loading'
import { FormValues, ElegibilityResponse } from '../../models/EligibilityModel'

const Eligibility = () => {

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<ElegibilityResponse | null>(null);

  const onFormSubmit = async (values: FormValues) => {
    setLoading(true);
    setError(false);
    try {
      const response = await checkElegibility(values);
      if (response) {
        setResult(response.data);
        setLoading(false);
        setSubmitSuccess(true);
      }
    } catch {
      setLoading(false);
      setError(true);
      setResult(null);
    }
  }
  if (loading) {
    return <Loading />
  }
  return (
    <View>
      {error &&
        <ErrorPage />
      }
      {submitSuccess &&
        <EligibilityResults results={result} />
      }
      {!submitSuccess && !error &&
        <EligibilityApplication onFormSubmit={(values) => onFormSubmit(values)} />
      }

    </View>
  );
};

export default Eligibility;
