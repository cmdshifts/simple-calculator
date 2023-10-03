import React, { Fragment, useState } from 'react'
import { ModalProps } from '../lib/interfaces'
import { Dialog, Transition } from '@headlessui/react'
import { CalculatorButton } from './CalculatorButton'
import {
  FaC,
  FaPlusMinus,
  FaPercent,
  FaDivide,
  Fa7,
  Fa8,
  Fa9,
  FaXmark,
  Fa4,
  Fa5,
  Fa6,
  FaMinus,
  Fa1,
  Fa2,
  Fa3,
  FaPlus,
  Fa0,
  FaEquals,
} from 'react-icons/fa6'
import { Display } from './Display'

export const CalculatorModal = ({ isOpen, close }: ModalProps) => {
  const [currentValue, setCurrentValue] = useState<string>('0')
  const [displayTotal, setDisplayTotal] = useState<string>('0')
  const [operator, setOperator] = useState<string | null>(null)

  const handleClearValue = () => {
    setDisplayTotal('0')
    setCurrentValue('0')
    setOperator(null)
  }

  const handleCalculate = () => {
    const num1 = parseFloat(displayTotal)
    const num2 = parseFloat(currentValue)

    switch (operator) {
      case '+':
        return (num1 + num2).toString()
      case '-':
        return (num1 - num2).toString()
      case '*':
        return (num1 * num2).toString()
      case '/':
        return (num1 / num2).toString()
      default:
        return currentValue
    }
  }

  const handleOperatorClick = (key: string) => {
    const result = handleCalculate()
    setDisplayTotal(result)
    setOperator(key)
    setCurrentValue('0')
  }

  const handleDigitClick = (key: string) => {
    if (currentValue === '0' && key !== '.') {
      setCurrentValue(key)
    } else if (
      currentValue.length < 9 ||
      (key === '.' && !currentValue.includes('.'))
    ) {
      setCurrentValue(currentValue + key)
    }
  }

  const handleEqualClick = () => {
    if (operator && currentValue !== '') {
      const result = handleCalculate()
      setDisplayTotal(result)
      setCurrentValue(result)
      setOperator(null)
    }
  }

  const handleNegative = () => {
    if (currentValue !== '0') {
      setCurrentValue((prevVal) => {
        if (prevVal[0] === '-') {
          return prevVal.slice(1)
        } else {
          return '-' + prevVal
        }
      })
    }
  }

  const handlePercent = () => {
    if (currentValue !== '0') {
      setCurrentValue((prevValue) => (parseFloat(prevValue) / 100).toString())
      setDisplayTotal((prevDisplay) =>
        (parseFloat(prevDisplay) / 100).toString(),
      )
    }
  }

  return (
    <React.Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-max max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Advanced Calculator
                  </Dialog.Title>
                  <React.Fragment>
                    <section className="flex flex-col justify-center items-center select-none">
                      <div className="w-full py-3">
                        <Display>{currentValue}</Display>
                        <Display displayType="total">{displayTotal}</Display>
                      </div>
                      <div className="w-max grid grid-cols-4 gap-1">
                        <CalculatorButton
                          Icon={FaC}
                          onClick={() => handleClearValue()}
                          buttonType="normal"
                        />
                        <CalculatorButton
                          Icon={FaPlusMinus}
                          onClick={() => handleNegative()}
                          buttonType="normal"
                        />
                        <CalculatorButton
                          Icon={FaPercent}
                          onClick={() => handlePercent()}
                          buttonType="normal"
                        />
                        <CalculatorButton
                          Icon={FaDivide}
                          onClick={() => handleOperatorClick('/')}
                          buttonType="operator"
                        />
                        <CalculatorButton
                          Icon={Fa7}
                          onClick={() => handleDigitClick('7')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa8}
                          onClick={() => handleDigitClick('8')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa9}
                          onClick={() => handleDigitClick('9')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={FaXmark}
                          onClick={() => handleOperatorClick('*')}
                          buttonType="operator"
                        />
                        <CalculatorButton
                          Icon={Fa4}
                          onClick={() => handleDigitClick('4')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa5}
                          onClick={() => handleDigitClick('5')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa6}
                          onClick={() => handleDigitClick('6')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={FaMinus}
                          onClick={() => handleOperatorClick('-')}
                          buttonType="operator"
                        />
                        <CalculatorButton
                          Icon={Fa1}
                          onClick={() => handleDigitClick('1')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa2}
                          onClick={() => handleDigitClick('2')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={Fa3}
                          onClick={() => handleDigitClick('3')}
                          buttonType="number"
                        />
                        <CalculatorButton
                          Icon={FaPlus}
                          onClick={() => handleOperatorClick('+')}
                          buttonType="operator"
                        />
                        <CalculatorButton
                          Icon={Fa0}
                          onClick={() => handleDigitClick('0')}
                          buttonType="number"
                          className="col-span-2 w-full flex justify-center items-start"
                        />
                        <CalculatorButton
                          onClick={() => handleDigitClick('.')}
                          buttonType="number"
                        >
                          .
                        </CalculatorButton>
                        <CalculatorButton
                          Icon={FaEquals}
                          onClick={() => handleEqualClick()}
                          buttonType="operator"
                        />
                      </div>
                    </section>
                  </React.Fragment>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  )
}
