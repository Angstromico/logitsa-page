const API_URL = import.meta.env.VITE_API_URL
console.log(API_URL);

export async function sendContactMail(provider, setSpin) {
  const providerData = JSON.parse(provider)
  
  const response = await fetch( API_URL + `/api/page/sendEmail`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      provider: {
        name: providerData.user_name,
        email: providerData.user_email,
        message: providerData.message,
      },
    }),
    method: 'POST',
  })

  if (response) {
    console.log(response)
    setSpin(false)
  }

  return response?.data
}
