import { useState } from 'react'
import { Button } from './components/Button'
import { BsCalculator } from 'react-icons/bs'
import { CalculatorModal } from './components/Calculator'
import { SimpleCalculatorModal } from './components/SimpleCalculator'

function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false)
  const [isSimpleCalculatorOpen, setIsSimpleCalculatorOpen] =
    useState<boolean>(false)

  return (
    <>
      <main className="h-full flex flex-col justify-center items-center gap-6">
        <div className="bg-[#47E2D0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#47BDE2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        <section className="flex flex-col items-center select-none gap-1">
          <h1>Simple Calculator</h1>
          <p>A simple calculator in ReactTS + Vite</p>
        </section>
        <section className="flex justify-center gap-2">
          <Button onClick={() => setIsSimpleCalculatorOpen((state) => !state)}>
            Launch Calculator
          </Button>
          <Button
            onClick={() => setIsCalculatorOpen((state) => !state)}
            styleType="secondary"
            Icon={BsCalculator}
          />
        </section>
      </main>
      <SimpleCalculatorModal
        isOpen={isSimpleCalculatorOpen}
        close={() => setIsSimpleCalculatorOpen((state) => !state)}
      />
      <CalculatorModal
        isOpen={isCalculatorOpen}
        close={() => setIsCalculatorOpen((state) => !state)}
      />
    </>
  )
}

export default App
