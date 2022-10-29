import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meqdzpgq");

  if (state.succeeded) {
    return (
      <div className="w-full h-screen py-4 mx-auto">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center">
          <p className="text-center text-5xl text-[#C8A951]">
            Thanks for your submission!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen py-4 mx-auto bg-[#f6f6f6]">
      <h1 className="mt-20 mb-10 text-4xl text-center bottom-0">CONTACT</h1>
      <div className=" p-10 mx-auto justify-center max-w-[500px] rounded-lg shadow-md bg-[#d7d7d8]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col col-span-4 my-8">
              <label className="mb-1" htmlFor="email">
                Email:
              </label>
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
              <label className="mb-1" htmlFor="message">
                Message:
              </label>
              <div className="flex align-items"></div>
              <textarea
                id="message"
                name="message"
                maxLength="500"
                placeholder="Enter your message"
                className="border-gray-200 border-2 pl-2 py-2 rounded-md"
                rows="5"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className="flex justify-center py-4">
                <button
                  type="submit"
                  class=" text-white my-2 bg-gray-900  hover:bg-[#C8A951] font-bold py-1 px-4 rounded"
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
