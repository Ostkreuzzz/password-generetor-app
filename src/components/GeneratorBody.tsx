import { useContext, useState } from 'react';
import { checkboxesStartData } from '@constants/startValues';

import { StrengthName } from 'enums/StrengthName';

import { StrengthColor } from 'enums/StrengthColor';
import { RangeSlider } from './RangeSlider';
import { StrengthIndicator } from './StrengthIndicator';
import { Button } from './Button';
import { CheckBoxesForm } from './CheckBoxesForm';
import { Alert, Snackbar } from '@mui/material';
import { handlePasswordCreation } from 'handlers/handlePasswordCreation';
import { GlobalContext } from 'ContextProvider/GlobalContext';

export function GeneratorBody() {
  const [passwordLength, setPasswordLength] = useState('5');
  const [includeValues, setIncludeValues] = useState(checkboxesStartData);
  const [strengthName, setStrengthName] = useState<StrengthName | undefined>();
  const [strengthColor, setStrengthColor] = useState<StrengthColor | undefined>();
  const [amountOfBlocks, setAmountOfBlocks] = useState([0, 0, 0, 0]);
  const [isError, setIsError] = useState(false);

  const { setPassword } = useContext(GlobalContext);

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;

    setIncludeValues((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  }

  function handleSubmit() {
    const { uppercase, lowercase, numbers, symbols } = includeValues;
    const { password, strength, color, amount } = handlePasswordCreation({
      passwordLength,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });

    if (!uppercase && !lowercase && !numbers && !symbols) {
      setIsError(true);
      return;
    }

    setPassword(password);
    setStrengthName(strength);
    setStrengthColor(color);
    setAmountOfBlocks(amount);
  }

  return (
    <div className='bg-gray-dark px-32 py-18'>
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={3000}
          onClose={() => setIsError(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => setIsError(false)} severity='error' sx={{ width: '100%' }}>
            Please select at least one character set.
          </Alert>
        </Snackbar>
      )}
      <RangeSlider passwordLength={passwordLength} onPasswordLength={setPasswordLength} />
      <div className='flex flex-col justify-between gap-32'>
        <div className='mt-32'>
          <CheckBoxesForm handleCheckbox={handleCheckbox} includeValues={includeValues} />
        </div>

        <StrengthIndicator strengthName={strengthName} strengthColor={strengthColor} amountOfBlocks={amountOfBlocks} />
        <Button handleSubmit={handleSubmit} buttonTitle='GENERATE ⇀' />
      </div>
    </div>
  );
}
