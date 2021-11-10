import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

export const ContactContent = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact
      </h3>
      <div className="flex flex-col md:flex-row gap-48">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}
export default ContactContent

const ContactDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1>Nashville, TN</h1>
      </div>
    </>
  )
}

const ContactForm = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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
    },
    [details]
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={details.name}
          onChange={handleChange}
          className="p-4 rounded"
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={details.email}
          onChange={handleChange}
          className="p-4 rounded"
        />
      </div>

      <input
        id="subject"
        type="text"
        placeholder="Subject (Optional)"
        value={details.subject}
        onChange={handleChange}
        className="p-4 rounded"
      />
      <textarea
        id="message"
        placeholder="Message"
        value={details.message}
        onChange={handleChange}
        className="p-4 rounded"
      />
      <button
        type="submit"
        className="border-2 border-blue-600 hover:bg-blue-600 p-4 rounded transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  )
}