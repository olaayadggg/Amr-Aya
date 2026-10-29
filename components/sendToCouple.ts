import emailjs from '@emailjs/browser'

// Same two EmailJS destinations and { name, message } template params as GuestMessage
const destinations = [
  {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_2,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_2,
  },
]

// Skips destinations whose .env values are empty, so an unconfigured one doesn't fail the send
export function sendToCouple(name: string, message: string) {
  return Promise.all(
    destinations
      .filter((d) => d.serviceId && d.templateId && d.publicKey)
      .map((d) => emailjs.send(d.serviceId!, d.templateId!, { name, message }, d.publicKey!))
  )
}
