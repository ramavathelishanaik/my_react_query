import { useCallback, useEffect, useRef } from "react";
import { useCountries } from "../queryies";

const DynamicParallel = () => {
  const randomNum = useRef(null);

  const generateRandomNumbers = useCallback(() => {
    const min = 1; // Minimum value (inclusive)
    const max = 10; // Maximum value (inclusive)

    const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

    return [randomNumber1, randomNumber2];
  }, []);

  useEffect(() => {
    const a = generateRandomNumbers();
    randomNum.current = a;
  }, []);

  // Usage

  const default_random = [1, 3];

  const randomqueryResult = useCountries(randomNum.current ?? default_random);
  const country_1 = randomqueryResult[0];
  const country_2 = randomqueryResult[1];
  //   console.log(randomqueryResult);

  //   if (randomNum.current === null) {
  //     return <div>loading....</div>;
  //   }

  return (
    <div>
      <p>DynamicParallel queries</p>
      <div className="mt-10 flex justify-between">
        <div>
          <p>country A group</p>

          <div key={country_1?.data?.id} className="mt-2">
            <p className="font-bold">{country_1?.data?.name}</p>
            <p className="mt-2">{country_1?.data?.capital}</p>
            <p>{country_1?.data?.population}</p>
          </div>
        </div>
        <div>
          <p>country B group</p>
          <div key={country_2?.data?.id} className="mt-2">
            <p className="font-bold">{country_2?.data?.name}</p>
            <p className="mt-2">{country_2?.data?.capital}</p>
            <p>{country_2?.data?.population}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DynamicParallel;
