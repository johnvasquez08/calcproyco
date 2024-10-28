const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
type TipPercentajeProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}
export default function TipPercentaje({setTip, tip}: TipPercentajeProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form action="">
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <input type="radio" onChange={e=> setTip(+e.target.value)}
                    checked={tipOption.value === tip} name="tip" id={tipOption.id} value={tipOption.value}/>
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                </div>
            ))}
        </form>
    </div>
  )
}
