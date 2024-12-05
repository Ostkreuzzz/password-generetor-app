import styles from '../styles/styles.module.scss';

interface Props {
  passwordLength: string;
  onPasswordLength: (length: string) => void;
}

export function RangeSlider({ passwordLength, onPasswordLength }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onPasswordLength(e.target.value);
  }

  return (
    <div className='flex flex-col justify-between gap-16'>
      <div className='flex items-center justify-between'>
        <p className='text-lg'>Character Length</p>
        <span className='text-2xl text-neon-green'>{passwordLength}</span>
      </div>
      <input type='range' min='5' max='15' value={passwordLength} className={styles.slider} onChange={handleChange} />
    </div>
  );
}
