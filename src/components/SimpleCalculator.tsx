import React, { Fragment, useState } from 'react'
import { ModalProps } from '../lib/interfaces'
import { Dialog, Transition } from '@headlessui/react'
import { Input } from './Input'
import { Display } from './Display'
import { Button } from './Button'

export const SimpleCalculatorModal = ({ isOpen, close }: ModalProps) => {
  const [input, setInput] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  const handleStateClick = (state: string) => {
    const num = input

    switch (state) {
      case 'addition':
        setResult((val) => val + num)
        break
      case 'subtract':
        setResult((val) => val - num)
        break
      case 'multiply':
        setResult((val) => val * num)
        break
      case 'divide':
        setResult((val) => val / num)
        break
      case 'resetInput':
        setInput(0)
        break
      default:
        setResult(0)
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
                    Simple Calculator
                  </Dialog.Title>
                  <section className="flex flex-col gap-3">
                    <section className="flex flex-col justify-center items-center select-none">
                      <Display className="text-left p-2">{result}</Display>
                      <Input
                        className="w-full"
                        type="number"
                        onChange={(e) =>
                          setInput(parseFloat(e.currentTarget.value))
                        }
                        value={input}
                      />
                    </section>
                    <section className="flex flex-col gap-2 justify-center items-center [&>div]:flex [&>div]:gap-2">
                      <div>
                        <Button onClick={() => handleStateClick('addition')}>
                          Add
                        </Button>
                        <Button onClick={() => handleStateClick('subtract')}>
                          Subtract
                        </Button>
                        <Button onClick={() => handleStateClick('multiply')}>
                          Multiply
                        </Button>
                        <Button onClick={() => handleStateClick('divide')}>
                          Divide
                        </Button>
                      </div>
                      <div className="grid-cols-2">
                        <Button
                          className="col-span-1"
                          onClick={() => handleStateClick('resetInput')}
                        >
                          Reset Input
                        </Button>
                        <Button
                          className="col-span-1"
                          onClick={() => handleStateClick('')}
                        >
                          Reset Result
                        </Button>
                      </div>
                    </section>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  )
}
