import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { type NextPage } from "next";
import { motion as m } from "framer-motion";

const Contact: NextPage = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [state, setState] = useState<'idle' | 'error' | 'success'>('idle')

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setDetails({ ...details, [e.target.id]: e.target.value })
    },
    [details, setDetails]
  )

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      console.log(details)

      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: details.email,
          name: details.name,
          subject: details.subject,
          message: details.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setState('error')
        return;
      }

      setState('success')
      setDetails({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    },
    [details]
  )

  return (
    <m.div animate={{ opacity: 100 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'backOut' }} className="flex flex-col h-full justify-start">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact
      </h3>
      <div className="lg:mx-auto max-w-5xl flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">

        <div className="flex flex-col gap-6 items-baseline">
          <h1 className="text-xl md:text-3xl">
            <span className="text-blue-600">Nashville</span>, TN
          </h1>
          <div className="flex flex-col gap-4 text-md md:text-xl">
            <a href="mailto:kpstanleyjr@gmail.com">kpstanleyjr@gmail.com</a>
            <a href="tel:+1-615-498-4465">615-498-4465</a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:gap-6 text-md md:text-lg lg:text-xl"
        >
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full">
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={details.name}
              onChange={handleChange}
              className="bg-black text-white bg-opacity-70 p-2 md:p-3 lg:p-4 rounded-md border dark:bg-[#ffffff30] dark:border-transparent"
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={details.email}
              onChange={handleChange}
              className="bg-black text-white bg-opacity-70 p-2 md:p-3 lg:p-4 rounded-md border dark:bg-[#ffffff30] dark:border-transparent"
            />
          </div>

          <input
            id="subject"
            type="text"
            placeholder="Subject (Optional)"
            value={details.subject}
            onChange={handleChange}
            className="bg-black text-white bg-opacity-70 p-2 md:p-3 lg:p-4 rounded-md border dark:bg-[#ffffff30] dark:border-transparent"
          />
          <textarea
            id="message"
            placeholder="Message"
            value={details.message}
            onChange={handleChange}
            className="bg-black text-white bg-opacity-70 p-2 md:p-3 lg:p-4 rounded-md border dark:bg-[#ffffff30] dark:border-transparent"
          />
          <div className="flex w-full justify-between items-center">
            {state === 'idle' && (
              <div />
            )}
            {state === 'error' && (
              <p className="text-red-600 text-sm md:text-base">Something went wrong. Please try again.</p>
            )}
            {state === 'success' && (
              <p className="text-green-600 text-sm md:text-base">Message sent successfully!</p>
            )}
            <button
              type="submit"
              className="animated-radius w-min whitespace-nowrap self-end border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-full transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </m.div>
  )
};

export default Contact;
