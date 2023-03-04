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

  const [state, setState] = useState<'idle' | 'sending' | 'error' | 'success'>('sending')

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setDetails({ ...details, [e.target.id]: e.target.value })
    },
    [details, setDetails]
  )

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      console.log(details)

      setState('sending')

      const res = fetch("/api/contact", {
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
      }).then((res) => {
        const data = res.json() as { error?: string, message?: string }
        if (data.error) {
          console.log(data.error);
          setState('error')
        } else {
          setState('success')
          setDetails({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        }
      }).catch((err) => {
        console.log(err);
        setState('error')
      })
    },
    [details]
  )

  return (
    <>
      <style>
        {`
          .loading-circle-1 {
            animation-delay: 0.1s;
          }
          .loading-circle-2 {
            animation - delay: 0.2s;
          }
          .loading-circle-3 {
            animation - delay: 0.3s;
          }
        `}
      </style>
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
              {state === 'sending' && (
                <div className="flex gap-2 items-center">

                </div>
              )}
            {state === 'error' && (
              <p className="text-red-600 text-sm md:text-base">Something went wrong. Please try again.</p>
            )}
            {state === 'success' && (
              <p className="text-green-600 text-sm md:text-base">Message sent successfully!</p>
            )}
            <button
              type="submit"
                disabled={state === 'sending'}
                className={`${state === 'sending' ? 'bg-black opacity-70 text-white dark:bg-white dark:bg-opacity-20 border-neutral-800 cursor-not-allowed' : 'animated-radius hover:bg-blue-600 hover:text-white'} w-min whitespace-nowrap self-end border-2 border-blue-600 px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-full transition-all duration-200`}
            >
                {state === 'sending' ? <p className="animate-pulse">Sending...</p> : 'Send Message'}
            </button>
          </div>
        </form>

      </div>
    </m.div>
    </>

  )
};

export default Contact;
