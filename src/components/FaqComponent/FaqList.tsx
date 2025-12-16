import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: React.ReactNode;
    answer: React.ReactNode;
  }>;
}

export default function Faq(content: FaqFrontMatterAttributes) {
  const faqs = content.faqs;
  const middleIndex = Math.ceil(faqs.length / 2);
  const listOne = faqs.slice(0, middleIndex);
  const listTwo = faqs.slice(middleIndex, faqs.length);

  return (
    <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8 faq-container">
      <div>
        <h2 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
          {content.title || 'Frequently Asked Questions'}
        </h2>
      </div>
      <div className="flex sm:flex-row mobile:flex-col gap-[24px]">
        <Accordion.Root
          type="single"
          collapsible
          className="w-full mx-auto bg-white shadow-sm rounded-lg overflow-hidden"
        >
          {listOne.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-100 last:border-b-0"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center font-albertSans justify-between px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition-all duration-300 ease-in-out">
                  <div className="flex-1 pr-4">
                    {faq.question}
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 ease-in-out text-primary group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="px-6 pb-4 pt-2 text-gray-600 font-albertSans text-base leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <Accordion.Root
          type="single"
          collapsible
          className="w-full mx-auto bg-white shadow-sm rounded-lg overflow-hidden"
        >
          {listTwo.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index + middleIndex}`}
              className="border-b border-gray-100 last:border-b-0"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center font-albertSans justify-between px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition-all duration-300 ease-in-out">
                  <div className="flex-1 pr-4">
                    {faq.question}
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 ease-in-out text-primary group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="px-6 pb-4 pt-2 text-gray-600 font-albertSans text-base leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
