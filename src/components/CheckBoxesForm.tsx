import { Checkboxes } from '@constants/checkboxes';
import styles from '../styles/styles.module.scss';
import { checkboxesStartData } from '@constants/startValues';

interface Props {
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  includeValues: typeof checkboxesStartData;
}

export function CheckBoxesForm({ handleCheckbox, includeValues }: Props) {
  return (
    <div className='flex flex-col justify-between gap-18'>
      {Checkboxes.map((checkbox) => (
        <div className='flex justify-start gap-24' key={checkbox.id}>
          <input
            checked={includeValues[checkbox.id as keyof typeof includeValues]}
            type='checkbox'
            id={checkbox.id}
            className={styles.checkbox}
            onChange={handleCheckbox}
          />
          <label htmlFor={checkbox.id} className={styles.label}>
            {checkbox.text}
          </label>
        </div>
      ))}
    </div>
  );
}
