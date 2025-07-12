import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import { InputBox } from './Components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedamount, setconvertedamount] = useState(0);

  const currenvyInfo = useCurrencyInfo(from);
  const option = Object.keys(currenvyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedamount(amount);
    setAmount(convertedamount);
  };

  const convert = () => {
    setconvertedamount(amount * currenvyInfo[to].toFixed(2));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/259103/pexels-photo-259103.jpeg?_gl=1*393qk5*_ga*Mjk5NjQ1MjUxLjE3NTIxNTQ0MDA.*_ga_8JE65Q40S6*czE3NTIzMjM0OTUkbzIkZzEkdDE3NTIzMjM4OTYkajMzJGwwJGgw)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-[#BFD4DC] rounded-lg p-5 backdrop-blur-sm bg-[#2F71A3]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountchange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 border-2 border-[#BFD4DC] bg-[#2f71A3]
              text-[#2C2C2C] px-2 py-0.5 rounded-md cursor-pointer'
              onClick={swap}
              >Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyOptions={option}
                amountDisabled
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button className='absolute left-1/2 -translate-x-1/2 border-2 border-[#BFD4DC] bg-[#2f71A3]
              text-[#2C2C2C] px-2 py-0.5 rounded-md cursor-pointer'>Convert {from} to {to} </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
