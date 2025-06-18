import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import FaqList from "../Data/FaqList.json"

export default function Faq() {

 const middleIndex = Math.ceil(FaqList.length / 2); 
 const listOne = FaqList.slice(0, middleIndex);
 const listTwo = FaqList.slice(middleIndex, FaqList.length);

  return (
    <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
      <div>
        <h1 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">Frequently Asked Questions</h1>
      </div> 
      <div className="flex sm:flex-row mobile:flex-col gap-[24px]">
      <Accordion.Root
        type="single"
        collapsible
        className="w-full mx-auto  bg-white shadow-sm"
      >
        {listOne.map((faq, index) => (
          <Accordion.Item key={index} value={`item-${index}`} className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center font-albertSans justify-between px-4 py-3 text-left text-lg font-medium hover:bg-gray-100 transition">
                {faq.question}
                <ChevronDownIcon
                  className="h-5 w-5 transition-transform duration-200 font-albertSans group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-2 pt-2 text-gray-600 font-albertSans text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>

        ))}
      </Accordion.Root>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full mx-auto  bg-white shadow-sm"
      >
        {listTwo.map((faq, index) => (
          <Accordion.Item key={index} value={`item-${index}`} className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center font-albertSans justify-between px-4 py-3 text-left text-lg font-medium hover:bg-gray-100 transition">
                {faq.question}
                <ChevronDownIcon
                  className="h-5 w-5 transition-transform duration-200 font-albertSans group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-2 pt-2 text-gray-600 font-albertSans text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>

        ))}
      </Accordion.Root>
      </div>
    </div>
  )
}
