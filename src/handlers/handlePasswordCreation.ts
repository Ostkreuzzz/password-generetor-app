import { StrengthColor } from 'enums/StrengthColor';
import { StrengthName } from 'enums/StrengthName';

interface PasswordData {
  passwordLength: string;
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export function handlePasswordCreation(data: PasswordData) {
  const lowercaseData = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseData = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbersData = '0123456789';
  const symbolsData = '!@#$%^&*()_+[]{}|;:,.<>?';

  let password = '';
  let characterPool = '';
  let strength = StrengthName.SUPER_WEAK;
  let color = StrengthColor.RED;
  let amount = [1, 0, 0, 0];

  const { passwordLength, uppercase, lowercase, symbols, numbers } = data;

  if (lowercase) characterPool += lowercaseData;
  if (uppercase) characterPool += uppercaseData;
  if (numbers) characterPool += numbersData;
  if (symbols) characterPool += symbolsData;

  // Ensure at least one of each selected type
  if (lowercase) password += lowercaseData[Math.floor(Math.random() * lowercaseData.length)];
  if (uppercase) password += uppercaseData[Math.floor(Math.random() * uppercaseData.length)];
  if (numbers) password += numbersData[Math.floor(Math.random() * numbersData.length)];
  if (symbols) password += symbolsData[Math.floor(Math.random() * symbolsData.length)];

  while (password.length < Number(passwordLength)) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  if (Number(passwordLength) >= 6 && Object.values(data).filter((value) => value).length >= 2) {
    strength = StrengthName.WEAK;
    color = StrengthColor.ORANGE;
    amount = [1, 1, 0, 0];
  }

  if (Number(passwordLength) >= 8 && Object.values(data).filter((value) => value).length >= 3) {
    strength = StrengthName.MEDIUM;
    color = StrengthColor.YELLOW;
    amount = [1, 1, 1, 0];
  }

  if (Number(passwordLength) >= 10 && Object.values(data).filter((value) => value).length >= 4) {
    strength = StrengthName.STRONG;
    color = StrengthColor.GREEN;
    amount = [1, 1, 1, 1];
  }

  return { password, strength, color, amount };
}
