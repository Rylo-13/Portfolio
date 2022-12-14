import Head from "next/head";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meqdzpgq");

  if (state.succeeded) {
    return (
      <div className="w-full h-screen py-4 mx-auto">
        <Head>
          <title>Thank you</title>
          <meta name="description" content="Portfolio thank you page" />
        </Head>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center">
          <p className="font-light text-center text-3xl md:text-4xl text-[#C8A951]">
            Thanks for getting in touch!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-h-screen items-center px-10 mx-auto">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Portfolio contact page" />
      </Head>
      <h1 className="mt-24 mb-2 text-3xl md:text-4xl font-light text-center text-[#C8A951]">
        CONTACT
      </h1>
      <div className=" py-6 px-10 mx-auto max-w-lg justify-center rounded-lg shadow-md bg-[#ebebeb]">
        <form onSubmit={handleSubmit}>
          <p className="text-gray-600">📲: 0429 781 929</p>
          <p className="text-gray-600">📫: rylanjmcneil@gmail.com</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col col-span-4 mt-4 mb-1">
              <label className="mb-1" htmlFor="email"></label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className=" border-gray-200 border-2 pl-2 py-2 rounded-md"
              />
            </div>

            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
            />

            <div className="flex flex-col col-span-4">
              <label className="mb-1" htmlFor="message"></label>
              <div className="flex align-items"></div>
              <textarea
                id="message"
                name="message"
                maxLength="500"
                placeholder="Enter your message"
                className="border-gray-200 border-2 pl-2 py-2 rounded-md"
                rows="8"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className="flex justify-center py-4">
                <button
                  type="submit"
                  class=" text-white my-2 bg-gray-900 hover:bg-[#C8A951] font-bold py-1 px-8 rounded-lg hover:duration-200"
                  disabled={state.submitting}
                >
                  Send
                </button>
              </div>
              <ValidationError errors={state.errors} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
