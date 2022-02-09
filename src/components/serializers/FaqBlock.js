import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import PortableText from "../portableText";

import * as faqStyles from "./FaqBlock.module.css"


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default ({ node }) => {
  // console.log("node from faqs", node);
  return (
    <dl className={faqStyles.dlWrapper}>
      {/* mt-6 space-y-6 divide-y divide-gray-200 */}
      {node.faqItems.map(faq => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className={faqStyles.dtItem}>
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className={faqStyles.questionText}>{faq.question}</span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={open ? faqStyles.iconOpen : faqStyles.iconClosed}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className={faqStyles.answerDd}>
                  <PortableText blocks={faq._rawAnswer} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};
