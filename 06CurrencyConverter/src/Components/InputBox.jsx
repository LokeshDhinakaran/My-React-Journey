import React , {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""

}) 

{
    const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'> 
            <label htmlFor={id} className='text-[#2C2C2C] mb-2 inline-block'>{label}</label>
            <input 
            id={id}
            type="number"
            className='outline-none w-full bg-[#2F71A3] py-1.5 text-[#F5F5F5] p-1.5 '
            placeholder='Amount'
            disabled = {amountDisabled}
            value={amount}
            onChange ={(e) =>{ onAmountchange && onAmountchange (Number(e.target.value))}}            
            />
        </div>
        <div className='w-1/2 justify-end text-right'>
            <p className=''>Cuurency Type</p>    
            <select 
            name="" 
            id=""
            className='outline-none rounded-md px-3 py-1 mt-2 bg-[#E9c56D] cursor-pointer'
            value={selectedCurrency}
            onChange={(e) => {
                onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option className= 'text-black items-center  ' key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox